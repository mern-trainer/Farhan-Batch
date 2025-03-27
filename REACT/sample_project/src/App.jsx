
// Fragment -> used to wrap multiple elements

// camelCase -> firstName
// PascalCase -> FirstName
// snake_case -> first_name

// inline, external, framework

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

    return <Fragment>
        <div style={styles.container}>
            Hello
        </div>
        <div>
            Hey
        </div>
        <h1 style={styles.heading}>{a}</h1>
        <button style={styles.click} onClick={() => {
            handleClick("hello")
        }}>Click Here</button>
    </Fragment>
}
