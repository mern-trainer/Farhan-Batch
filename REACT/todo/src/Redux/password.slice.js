import { createSlice } from "@reduxjs/toolkit";

const passwordSlice = createSlice({
    name: "password",
    initialState: {
        generatedPassword: "",
        history: []
    },
    reducers: {
        changeGeneratedPassword: (state, action) => { // {password: XXXXXX}
            state.generatedPassword = action.payload.password
            state.history = [action.payload.password, ...state.history]
        }
    }
})

export const { changeGeneratedPassword } = passwordSlice.actions;
export const { reducer: passwordReducer } = passwordSlice