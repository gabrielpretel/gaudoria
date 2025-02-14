import JSZip from "jszip";

export const extractCoverImage = async (
  opfDoc: Document,
  data: JSZip,
  basePath: string
): Promise<string | undefined> => {
  const metaCover = opfDoc.querySelector('meta[name="cover"]');
  const coverId = metaCover?.getAttribute("content");
  if (!coverId) return undefined;

  const manifest = opfDoc.getElementsByTagName("manifest")[0];
  const coverItem = manifest.querySelector(`item[id="${coverId}"]`);
  if (!coverItem) return undefined;

  const coverHref = coverItem.getAttribute("href");
  if (!coverHref) return undefined;

  const coverPath = coverHref.startsWith(basePath)
    ? coverHref
    : basePath + coverHref;
  const coverFile = data.files[coverPath];
  if (!coverFile) return undefined;

  const coverData = await coverFile.async("base64");
  const mediaType = coverItem.getAttribute("media-type") || "image/jpeg";
  return `data:${mediaType};base64,${coverData}`;
};
