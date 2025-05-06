// Redux -> Javascript library for managing state in a predictable way.

import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "../Redux/counter.slice"

// state, context api

// state -> an object that stores the state of the component
// useState -> Hook that allows us to use state in a functional component

// context api -> a way to share data between components without having to pass props through every level of the component tree.

// Redux -> Global state management library for Javascript applications.

// Installation -> react-redux, @reduxjs/toolkit

// redux principles ->

// 1. Action -> an object that describes what happened.
// 2. Reducer -> a function that takes the current state and an action, and returns a new state.
// 3. Store -> a single object that holds the entire state of your application.
//              Centralized state management.

// Working

// UI -> Action -> reducer function -> response (state update) -> store -> UI

const Redux = () => {

    const { value } = useSelector(state => state.counter)
    const dispatch = useDispatch()

    return <div className="d-flex flex-column align-items-center mt-3">
        <h1>{value}</h1>
        <div className="d-flex gap-2">
            <button className="btn btn-success" onClick={() => dispatch(increment(10))}>Increment</button>
            <button className="btn btn-danger" onClick={() => dispatch(decrement(5))}>Decrement</button>
        </div>
    </div>
}

export default Redux