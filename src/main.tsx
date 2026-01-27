
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import "./i18n"; // Import i18n configuration
import Router from "./Router.tsx";
import "./index.css";

const rootElement = document.getElementById("root")!;

// Use hydrate if the app was pre-rendered by react-snap
if (rootElement.hasChildNodes()) {
  createRoot(rootElement).render(
    <HelmetProvider>
      <Router />
    </HelmetProvider>
  );
} else {
  createRoot(rootElement).render(
    <HelmetProvider>
      <Router />
    </HelmetProvider>
  );
}