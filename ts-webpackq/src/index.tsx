import { createRoot } from "react-dom/client";
import "./styles/globals.css";
import App from "./components/App";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(<App />);
