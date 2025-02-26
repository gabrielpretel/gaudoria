import { BookContext } from "@/core/providers";
import { BookReader, ChargeBook } from "@/pods";
import { HeroSection } from "@/pods/hero-section/hero-section.component";
import React, { useContext } from "react";

export const HomeScene: React.FC = () => {
  const { handleFileChange } = useContext(BookContext);

  return (
    <>
      <HeroSection />
      {/* <ChargeBook />
      <BookReader /> */}
    </>
  );
};
