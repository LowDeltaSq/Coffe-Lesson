import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Hom from "./Hom.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Hom />
  </StrictMode>
);
