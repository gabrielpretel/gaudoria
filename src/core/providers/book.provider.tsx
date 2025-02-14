// BookProvider.tsx
import React, { createContext, PropsWithChildren, useState } from "react";
import { processEpub, ProcessEpubResult } from "./helpers";
import { BookContextModel, initialBookContext } from "./book.provider.model";

export const BookContext = createContext<BookContextModel>(initialBookContext);

export const BookProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [fileCharged, setFileCharged] = useState<File | undefined>(undefined);
  const [chapters, setChapters] = useState<ProcessEpubResult["chapters"]>([]);
  const [currentChapter, setCurrentChapter] = useState<number>(0);
  const [opfDocument, setOpfDocument] = useState<Document | undefined>(
    undefined
  );
  const [coverImage, setCoverImage] = useState<string | undefined>(undefined);

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setFileCharged(file);

    try {
      const result = await processEpub(file);
      setOpfDocument(result.opfDocument);
      setChapters(result.chapters);
      setCoverImage(result.coverImage);
      setCurrentChapter(0);
    } catch (error) {
      console.error("Error al procesar el EPUB:", error);
    }
  };

  const value = {
    fileCharged,
    setFileCharged,
    chapters,
    setChapters,
    currentChapter,
    setCurrentChapter,
    opfDocument,
    setOpfDocument,
    coverImage,
    handleFileChange,
    setCoverImage,
  };

  return <BookContext.Provider value={value}>{children}</BookContext.Provider>;
};
