import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { AppRoutes } from "./App";
import "./styles/index.css";

const root = document.getElementById("root")!;
const app = (
  <StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>
);

// Production pages are prerendered (scripts/prerender.mjs). Hydrate only when the HTML was rendered
// for this address (or is the 404 page); otherwise, e.g. a host serving index.html for an unknown
// path, render from scratch instead of hydrating mismatched markup.
const renderedFor = root.dataset.route;
const path = window.location.pathname.replace(/(.)\/$/, "$1");
if (root.hasChildNodes() && (renderedFor === path || renderedFor === "404")) {
  hydrateRoot(root, app);
} else {
  root.textContent = "";
  createRoot(root).render(app);
}
