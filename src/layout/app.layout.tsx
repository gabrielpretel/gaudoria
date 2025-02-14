import React, { PropsWithChildren } from "react";
import { css } from "@emotion/react";
import { Footer, Header } from "./components";

const appContainer = css`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

const appContent = css`
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 1fr;
  height: 100%;
  width: 1280px;
`;

export const AppLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div css={appContainer}>
      <Header />
      <div css={appContent}>
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};
