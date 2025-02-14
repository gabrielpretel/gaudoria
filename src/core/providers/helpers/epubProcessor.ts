// epubProcessor.ts
import JSZip from "jszip";
import { Chapter } from "../book.provider.model";
import { extractCoverImage } from "./extractCoverImage";

export interface ProcessEpubResult {
  opfDocument?: Document;
  chapters: Chapter[];
  coverImage?: string;
}

export async function processEpub(file: File): Promise<ProcessEpubResult> {
  const zip = new JSZip();
  const data = await zip.loadAsync(file);
  const parser = new DOMParser();

  const result: ProcessEpubResult = { chapters: [] };

  // 1. Extraer el archivo OPF
  const opfFilePath = Object.keys(data.files).find((filePath) =>
    filePath.endsWith(".opf")
  );
  if (!opfFilePath) {
    throw new Error("No se encontró archivo OPF.");
  }
  const basePath = opfFilePath.substring(0, opfFilePath.lastIndexOf("/") + 1);
  const opfContent = await data.files[opfFilePath].async("text");
  const opfDoc = parser.parseFromString(opfContent, "application/xml");
  result.opfDocument = opfDoc;

  // 2. Extraer la imagen de cover (si existe)
  result.coverImage = await extractCoverImage(opfDoc, data, basePath);

  // 3. Extraer capítulos: intentar usar el TOC (.ncx)
  const chapters: Chapter[] = [];
  const ncxFilePath = Object.keys(data.files).find((filePath) =>
    filePath.endsWith(".ncx")
  );
  if (ncxFilePath) {
    const ncxContent = await data.files[ncxFilePath].async("text");
    const ncxDoc = parser.parseFromString(ncxContent, "application/xml");
    const navPoints = ncxDoc.getElementsByTagName("navPoint");
    for (let i = 0; i < navPoints.length; i++) {
      const navPoint = navPoints[i];
      const titleNode = navPoint.getElementsByTagName("text")[0];
      const contentNode = navPoint.getElementsByTagName("content")[0];
      if (titleNode && contentNode) {
        const title = titleNode.textContent || `Capítulo ${i + 1}`;
        let src = contentNode.getAttribute("src") || "";
        let srcWithoutBasePath = src;
        if (!src.startsWith(basePath)) {
          src = basePath + src;
        }
        if (data.files[src]) {
          const chapterContent = await data.files[src].async("text");
          const chapterDoc = parser.parseFromString(
            chapterContent,
            "text/html"
          );
          const extractedText = chapterDoc.body.textContent || "";
          if (extractedText.trim().length < 100) continue;
          chapters.push({
            title,
            content: extractedText,
            href: srcWithoutBasePath,
          });
        }
      }
    }
  } else {
    // 4. Si no existe TOC, usar el spine del OPF como fallback
    const manifest = opfDoc.getElementsByTagName("manifest")[0];
    const spine = opfDoc.getElementsByTagName("spine")[0];
    const itemrefs = spine.getElementsByTagName("itemref");
    for (let i = 0; i < itemrefs.length; i++) {
      const idref = itemrefs[i].getAttribute("idref");
      const item = manifest.querySelector(`item[id="${idref}"]`);
      if (item) {
        const href = item.getAttribute("href");
        if (href) {
          let fullPath = basePath + href;
          if (data.files[fullPath]) {
            const chapterContent = await data.files[fullPath].async("text");
            const chapterDoc = parser.parseFromString(
              chapterContent,
              "text/html"
            );
            const h1Title = chapterDoc.querySelector("h1")?.textContent;
            const title =
              h1Title ||
              chapterDoc.querySelector("title")?.textContent ||
              `Capítulo ${i + 1}`;
            const extractedText = chapterDoc.body.textContent || "";
            if (extractedText.trim().length < 100) continue;
            chapters.push({ title, content: extractedText });
          }
        }
      }
    }
  }
  result.chapters = chapters;

  return result;
}
