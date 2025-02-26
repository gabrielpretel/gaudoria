import React, { useEffect, useState } from "react";

interface BookMetadataProps {
  opfDoc: Document;
}

interface Metadata {
  title?: string;
  description?: string;
  creator?: string;
  language?: string;
  publisher?: string;
  subject?: string;
}

export const BookMetadata: React.FC<BookMetadataProps> = ({ opfDoc }) => {
  const [metadata, setMetadata] = useState<Metadata>({});

  useEffect(() => {
    const metadataElement = opfDoc.getElementsByTagName("metadata")[0];
    console.log("Metadata", metadataElement);

    if (metadataElement) {
      const getText = (tag: string) =>
        metadataElement.getElementsByTagName(tag)[0]?.textContent || "";

      setMetadata({
        title: getText("dc:title"),
        description: getText("dc:description"),
        creator: getText("dc:creator"),
        language: getText("dc:language"),
        publisher: getText("dc:publisher"),
        subject: getText("dc:subject"),
      });
    } else {
      console.log("No se encontraron metadatos en el archivo OPF.");
    }
  }, [opfDoc]);

  return (
    <div>
      <h2>Metadatos</h2>
      <h3>{metadata.title || "Título desconocido"}</h3>
      <p>
        <strong>Descripción:</strong> {metadata.description || "No disponible"}
      </p>
      <p>
        <strong>Autor:</strong> {metadata.creator || "Desconocido"}
      </p>
      <p>
        <strong>Idioma:</strong> {metadata.language || "No especificado"}
      </p>
      <p>
        <strong>Editorial:</strong> {metadata.publisher || "No disponible"}
      </p>
      <p>
        <strong>Género:</strong> {metadata.subject || "Sin categoría"}
      </p>
      <img src="OEBPS/Images/cover.jpg" alt="" />
    </div>
  );
};
