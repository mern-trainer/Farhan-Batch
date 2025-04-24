import { useNavigate, useParams } from "react-router"

const Dynamic = () => {

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

    return <div>
        <h1>Dynamic Id: {id || "No Id"}</h1>
        <button onClick={handleNavigation}>Navigate to dynamic 2</button>
    </div>
}

export default Dynamic