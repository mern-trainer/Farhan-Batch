import { useContext } from "react"
import { SampleContext } from "../App"
import { Link } from "react-router"

const Dynamic2 = () => {

    const { counter, setCounter } = useContext(SampleContext)

    return <div>
        <h1>Dynamic 2</h1>
        <h1>{counter}</h1>
        <button onClick={() => setCounter(counter + 1)}>Update</button>
        <Link to={"/dynamic"} className="btn btn-primary mt-3">Go to Dynamic Page</Link>
    </div>
}

export default Dynamic2