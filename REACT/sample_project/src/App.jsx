// state -> An object that stores the current state of the component
// Hooks -> Function that let you use state and other React features without writing a class
// functional components and class components

import { useState } from "react";

const App = () => {
    
    const [counter, setCounter] = useState(10) // counter

    const handleUpdate = () => {
        // setCounter(counter + 1)
        // setCounter(counter + 1)
        // setCounter(counter + 1)
        // setCounter(counter + 1)
        // setCounter(counter + 1)
        setCounter(prevCounter => prevCounter + 1)
        setCounter(prevCounter => prevCounter + 1)
        setCounter(prevCounter => prevCounter + 1)
        setCounter(prevCounter => prevCounter + 1)
        setCounter(prevCounter => prevCounter + 1)
    }
    
    return <div>
        <div>{counter}</div>
        <button onClick={handleUpdate}>Update Value</button>
    </div>
}

export default App