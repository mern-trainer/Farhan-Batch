import { Link } from "react-router"
import { useSampleContext } from "../context/SampleContext"
import { useEffect, useState } from "react"
import { FaDollarSign, FaShoppingCart, FaStar } from "react-icons/fa"

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
        <div className="d-flex justify-content-center gap-2 p-2 flex-wrap">
            {
                products.map((product) => {
                    const discountPrice = (product.price - (product.price - product.discountPercentage * product.price / 100)).toFixed(2)
                    return <div key={product.id} className="bg-light position-relative rounded p-1" style={{ width: "15rem"}}> 
                        <p className="position-absolute p-1 fs-6 text-success top-0 end-0">-{product.discountPercentage}%</p>
                        <img src={product.images?.[0]} alt={product.title} className="w-100 object-fit-contain" style={{ height: "15rem" }} />
                        <h3 className="text-truncate">{product.title}</h3>
                        <div className="d-flex justify-content-between">
                            <div><FaStar color={`${product.rating < 2 ? "red" : product.rating < 4 && product.rating >=2 ? "yellow" : "green"}`} /> {product.rating}</div>
                            <div className="d-flex gap-2 align-items-center">
                                <s className="text-secondary">${product.price.toFixed(2)}</s>
                                <span>${discountPrice}</span>
                            </div>
                        </div>
                        <div className="d-flex gap-1">
                            <button className="d-flex justify-content-center align-items-center p-1 w-100 btn btn-success mt-2"><FaShoppingCart /> Add To Cart</button>
                            <button className="d-flex justify-content-center align-items-center p-1 w-100 btn btn-danger mt-2"><FaDollarSign /> Buy Now</button>
                        </div>
                    </div>
                })
            }
        </div>
    </div>
}

export default Dynamic2