import { Fragment } from "react"
import { useNavigate, useParams } from "react-router"
import { useSampleContext } from "../context/SampleContext"

const Dynamic = () => {

    const { counter } = useSampleContext()

    const { id } = useParams()
    const is_authenticated = true

    const navigate = useNavigate()

    const handleNavigation = () => {
        if (is_authenticated) {
            navigate("/dynamic2")
        } else {
            alert("Please login first")
        }
    }

    // if (id == 1) { // conditional rendering
    //     return <div>
    //         <h1>Dynamic 1</h1>
    //     </div>
    // }

    // if (id == 2) {
    //     return <div>
    //         <h1>Dynamic 2</h1>
    //     </div>
    // }


    return <Fragment>
        {/* {
            id == 1 && <div>
                <h1>Dynamic 1</h1>
            </div>
        }
        {
            id == 2 && <div>
                <h1>Dynamic 2</h1>
            </div>
        }
        {
            id != 1 && id != 2 && <div>
                <h1>Dynamic 3</h1>
                <button onClick={handleNavigation}>Go to Dynamic 2</button>
            </div>
        } */}
        {
            id == 1 ? <div>
                <h1>Dynamic 1</h1>
            </div> : id == 2 ? <div>
                <h1>Dynamic 2</h1>
            </div> : <div>
                <h1>Dynamic 3</h1>
                <button onClick={handleNavigation}>Go to Dynamic 2</button>
            </div>
        }
        <div>Value from context: {counter}</div>
    </Fragment>
}

export default Dynamic