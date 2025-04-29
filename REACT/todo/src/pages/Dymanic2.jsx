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
    const [products, setProducts] = useState([])

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(timer => timer + 1)
        }, 1000) // 1000ms -> 1s
        return () => {
            clearInterval(interval)
        }
    }, [counter])

    const getProducts = async () => {
        try{ 
            const response = await fetch('https://dummyjson.com/products')
            const data = await response.json()
            setProducts(data.products)
        } catch (error){
            return console.log(error);
        }
    }

    useEffect(() => {
        getProducts()
    }, [])

    return <div>
        {/* <h1>Dynamic 2</h1>
        <h1>{timer}</h1>
        <h1>{counter}</h1>
        <button onClick={() => setCounter(counter + 1)}>Update</button>
        <Link to={"/dynamic"} className="btn btn-primary mt-3">Go to Dynamic Page</Link> */}
        <div>
            {
                products.map((product) => {
                    return <div key={product.id}> 
                        <img src={product.thumbnail} alt={product.title} />
                        <h1>{product.title}</h1>
                        <p>{product.description}</p>
                    </div>
                })
            }
        </div>
    </div>
}

export default Dynamic2