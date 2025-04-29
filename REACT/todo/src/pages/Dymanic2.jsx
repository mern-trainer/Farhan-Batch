import { Link } from "react-router"
import { useSampleContext } from "../context/SampleContext"
import { useEffect, useState } from "react"

// Mounting, Updating, Unmounting -> 3 stages -> life cycle

//  Mounting -> called after the first render
//  Updating -> state or props changes
//  Unmounting -> when the component is removed from the dom

const Dynamic2 = () => {

    const { counter, setCounter } = useSampleContext()
    const [timer, setTimer] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(timer => timer + 1)
        }, 1000) // 1000ms -> 1s
        return () => {
            clearInterval(interval)
        }
    }, [counter])

    return <div>
        <h1>Dynamic 2</h1>
        <h1>{timer}</h1>
        <h1>{counter}</h1>
        <button onClick={() => setCounter(counter + 1)}>Update</button>
        <Link to={"/dynamic"} className="btn btn-primary mt-3">Go to Dynamic Page</Link>
    </div>
}

export default Dynamic2