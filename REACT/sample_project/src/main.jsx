import { createRoot } from "react-dom/client" // Default Import, named import
import { App } from "./App"
import "bootstrap/dist/css/bootstrap.min.css";

const element = document.getElementById("root")

const root = createRoot(element)

root.render(<App />)