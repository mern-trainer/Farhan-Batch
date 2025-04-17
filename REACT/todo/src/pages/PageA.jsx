import { useState } from "react"
import PageB from "./PageB"

// property - (props) -> Pass data from parent component to child component.

const PageA = () => { // parant

    const age = 30
    const [counter, setCounter] = useState(0)

    // onway data flow

    const getDataFromChild = (data) => {
        console.log(data);
    }

    return <div>
        <h1>Page A</h1>
        <button onClick={() => setCounter(counter + 1)}>Update</button>
        <PageB counter={counter} data="Hi" age={age} callback={getDataFromChild} /> {/* Child */ }
    </div>
}

export default PageA