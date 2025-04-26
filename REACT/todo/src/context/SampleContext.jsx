import { createContext, useContext, useState } from "react";

export const SampleContext = createContext()

export const SampleContextProvider = ({ children }) => {
    const [counter, setCounter] = useState(0)
    return <SampleContext.Provider value={{ counter, setCounter }}>
        {children}
    </SampleContext.Provider>
}

export const useSampleContext = () => {
    return useContext(SampleContext)
}