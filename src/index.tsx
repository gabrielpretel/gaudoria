import { createRoot } from "react-dom/client";
import { App } from "./app";

import "./css/styles.scss";

const rootElement = document.getElementById("root");

if (rootElement && rootElement instanceof HTMLDivElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
} else {
  throw new Error("Root element not found");
}
