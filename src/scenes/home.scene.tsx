import { BookContext } from "@/core/providers";
import { BookReader, ChargeBook } from "@/pods";
import React, { useContext } from "react";

export const HomeScene: React.FC = () => {
  const { handleFileChange } = useContext(BookContext);

  return (
    <>
      <ChargeBook />
      <BookReader />
    </>
  );
};
