import { BrowserRouter, Route, Routes } from "react-router"
import PageA from "./pages/PageA"
import TodoPage from "./pages/TodoPage"
import Dynamic from "./pages/Dynamic"
import Dynamic2 from "./pages/Dymanic2"
import { createContext, useState } from "react"

// createContext

export const SampleContext = createContext()

const App = () => {

    const [counter, setCounter] = useState(0)

    return <SampleContext.Provider value={{ counter, setCounter }}>
        <BrowserRouter>
            <Routes>
                <Route path="/todo" Component={TodoPage} />
                <Route path="/page-a" Component={PageA} />
                <Route path="/dynamic/:id?" Component={Dynamic} />
                <Route path="/dynamic2" Component={Dynamic2} />
            </Routes>
        </BrowserRouter>
    </SampleContext.Provider>
}

export default App