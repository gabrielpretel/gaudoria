import React from "react";
import Logo from "@/common/assets/Log2.png";
import { css } from "@emotion/react";

const container = css`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 57px;
  border-bottom: 1px solid #e6e8eb;
`;

const header = css`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  width: 100%;
  gap: 4em;
  max-width: 1280px;
`;

const logoContainer = css`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const logoImg = css`
  max-height: 50px;
  padding: 5px;
`;

const logoText = css`
  font-size: 24px;
`;

const menuItems = css`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 20px;
`;

export const Header: React.FC = () => {
  return (
    <div css={container}>
      <div css={header}>
        <div css={logoContainer}>
          <img src={Logo} css={logoImg} alt="Logo Gaudoria" />
          <h2 css={logoText}>Gaudoria</h2>
        </div>
        <div css={menuItems}>
          <span>Home</span>
          <span>Guide</span>
          <span>Ebooks</span>
          <span>Read</span>
        </div>
        <div>
          <span>Ingresar / registrarse</span>
        </div>
      </div>
    </div>
  );
};
