import { BookContext } from "@/core/providers";
import ePub, { Book, Rendition } from "epubjs";
import React, { useContext, useState } from "react";

export const BookReader: React.FC = () => {
  const { fileCharged, chapters } = useContext(BookContext);
  const [book, setBook] = useState<Book | null>(null);
  const [rendition, setRendition] = useState<Rendition | null>(null);
  const [toc, setToc] = useState<any[]>([]);
  const [selectedChapter, setSelectedChapter] = useState<string>("");
  const [readerOpen, setReaderOpen] = useState<boolean>(false);

  const handleOnClick = async () => {
    if (!fileCharged) {
      console.log("Debes cargar un libro");
      return;
    }

    setReaderOpen(true);

    console.log("Chapters:", chapters);

    const reader = new FileReader();
    reader.readAsArrayBuffer(fileCharged);

    reader.onload = async () => {
      if (!reader.result) return;

      try {
        // Crea el libro con epub.js
        const ebook = ePub(reader.result);
        await ebook.ready;
        setBook(ebook);

        // Carga la navegación (tabla de contenidos)
        const nav = await ebook.loaded.navigation;
        setToc(nav.toc);

        // Renderiza el libro en el contenedor "viewer"
        const rendition = ebook.renderTo("viewer", {
          width: "1200px",
          height: "800px",
          flow: "paginated",
          allowScriptedContent: true,
        });

        setRendition(rendition);
        await rendition.display();
      } catch (error) {}
    };
  };

  const handleChapterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const href = event.target.value;
    setSelectedChapter(href);
    if (rendition && href) {
      // Muestra el capítulo seleccionado usando su href
      rendition.display(href);
    }
  };

  return (
    <div>
      {fileCharged && (
        <div>
          <button onClick={handleOnClick}>Leer libro</button>
          <button onClick={() => setReaderOpen(false)}>Cerrar lector</button>
        </div>
      )}
      {readerOpen && toc.length > 0 && (
        <div style={{ marginTop: "10px" }}>
          <label htmlFor="toc-select">Selecciona un capítulo: </label>
          <select
            id="toc-select"
            value={selectedChapter}
            onChange={handleChapterChange}
          >
            <option value="">-- Elige un capítulo --</option>
            {chapters.map((chapter, index) => (
              <option key={index} value={chapter.href}>
                {chapter.title}
              </option>
            ))}
          </select>
          <div
            id="viewer"
            style={{ border: "1px solid black", marginTop: "10px" }}
          ></div>
          <div>
            <button onClick={() => book && book.rendition.prev()}>
              Anterior
            </button>
            <button onClick={() => book && book.rendition.next()}>
              Siguiente
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
