import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counter.slice";
import { nameReducer } from "./name.slice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        name: nameReducer
    }
})