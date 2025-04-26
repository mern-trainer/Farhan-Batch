import { BrowserRouter, Route, Routes } from "react-router"
import PageA from "./pages/PageA"
import TodoPage from "./pages/TodoPage"
import Dynamic from "./pages/Dynamic"
import Dynamic2 from "./pages/Dymanic2"
import { SampleContextProvider } from "./context/SampleContext"


const App = () => {

    return <SampleContextProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/todo" Component={TodoPage} />
                <Route path="/page-a" Component={PageA} />
                <Route path="/dynamic/:id?" Component={Dynamic} />
                <Route path="/dynamic2" Component={Dynamic2} />
            </Routes>
        </BrowserRouter>
    </SampleContextProvider>
}

export default App