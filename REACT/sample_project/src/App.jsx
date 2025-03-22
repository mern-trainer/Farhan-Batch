
// Fragment -> used to wrap multiple elements

// camelCase -> firstName
// PascalCase -> FirstName
// snake_case -> first_name

import { Fragment } from "react"

export const App = () => {

    const a = "Hello World!" 

    const handleClick = (temp) => {
        console.log("Button Clicked");
    }

    return <Fragment>
        <div>
            Hello
        </div>
        <div>
            Hey
        </div>
        <h1>{a}</h1>
        <button onClick={() => {
            handleClick("hello")
        }}>Click Here</button>
    </Fragment>
}
