import React, { useContext } from "react";
import { BookMetadata } from "./components/bookMetadata.component";
import { BookContext } from "@/core/providers";

export const BookContent: React.FC = () => {
  const {
    handleFileChange,
    chapters,
    setCurrentChapter,
    currentChapter,
    opfDocument,
  } = useContext(BookContext);

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1>📖 Lector de EPUB</h1>

      {chapters.length > 0 && (
        <div>
          <button
            onClick={() => setCurrentChapter((c) => Math.max(c - 1, 0))}
            disabled={currentChapter === 0}
          >
            ⬅️ Anterior
          </button>
          <button
            onClick={() =>
              setCurrentChapter((c) => Math.min(c + 1, chapters.length - 1))
            }
            disabled={currentChapter === chapters.length - 1}
          >
            Siguiente ➡️
          </button>
        </div>
      )}

      {chapters.length > 0 ? (
        <div>
          <h2>{chapters[currentChapter].title}</h2>
          <p>{chapters[currentChapter].content}</p>
        </div>
      ) : (
        <p>Selecciona un archivo EPUB para ver su contenido.</p>
      )}
    </div>
  );
};

export default BookContent;
