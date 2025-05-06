import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state, action) => {
            state.value = state.value + action.payload.number
        },
        decrement: (state, action) => {
            state.value = state.value - action.payload.number
        }
    }
})

export const { increment, decrement } = counterSlice.actions;
export const { reducer: counterReducer } = counterSlice