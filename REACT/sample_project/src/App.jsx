// state -> An object that stores the current state of the component
// Hooks -> Function that let you use state and other React features without writing a class
// functional components and class components

import { useState } from "react";

const App = () => {
    
    const [password, setPassword] = useState("")
    const [passwordHostory, setPasswordHistory] = useState([])

    const handleGeneratePassword = () => {
        const charecters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+"
        let i = 0
        const limit = 16
        let pass = ""
        while (i <= limit) {
            const randomIndex = Math.floor(Math.random() * charecters.length)
            const randomCharecter = charecters[randomIndex]
            pass += randomCharecter
            i++
        }
        setPassword(pass)
        setPasswordHistory(passwords => [pass, ...passwords])
    }
    
    return <div>
        <div>{password}</div>
        <button onClick={handleGeneratePassword}>Generate Random Password</button>
        <div>
            {passwordHostory.join(", ")}
        </div>
    </div>
}

export default App