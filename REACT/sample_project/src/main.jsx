import { createRoot } from "react-dom/client" // Default Import, named import
import { App } from "./App"

const element = document.getElementById("root")

const root = createRoot(element)

root.render(<App />)