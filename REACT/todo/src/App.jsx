import { BrowserRouter, Route, Routes } from "react-router"
import PageA from "./pages/PageA"
import TodoPage from "./pages/TodoPage"

const App = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/todo" Component={TodoPage} />
            <Route path="/page-a" Component={PageA} />
        </Routes>
    </BrowserRouter>
}

export default App