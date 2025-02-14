import { css } from "@emotion/react";
import React from "react";

export const Footer: React.FC = () => {
  const date = new Date();
  const year = date.getFullYear();

  const footerStyle = css`
    display: flex;
    flex-direction: column;
  `;

  return (
    <div css={footerStyle}>
      <p>Gaudoria {year}. Asistente de lectura.</p>
    </div>
  );
};
