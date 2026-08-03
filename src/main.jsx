import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Bootstrap 5 (layout grid + utility classes)
import "bootstrap/dist/css/bootstrap.min.css";

// Brand design tokens + global styles (loaded after Bootstrap so brand
// styles can override Bootstrap defaults where needed)
import "./styles/global.css";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
