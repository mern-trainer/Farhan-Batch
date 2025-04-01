import Header from "./components/Header"
import Hero from "./components/Hero"
import "./main.css"

const styles = {
    container: { color: "red", backgroundColor: "black", padding: "20px" },
    heading: { color: "green", fontSize: "50px" },
    click: {backgroundColor: "blue", color: "white", padding: "10px", borderRadius: "10px"}
}

import { Fragment } from "react"

export const App = () => {

    const a = "Hello World!" 

    const handleClick = (temp) => {
        console.log("Button Clicked");
    }

    // return <Fragment>
    //     <div style={styles.container}>
    //         Hello
    //     </div>
    //     <div className="heading">
    //         Hey skldflsdf
    //     </div>
    //     <h1 style={styles.heading}>{a}</h1>
    //     <button style={styles.click} onClick={() => {
    //         handleClick("hello")
    //     }}>Click Here</button>
    // </Fragment>
    return <Fragment>
        {/* <Header /> */}
        <Hero />
    </Fragment>
}
