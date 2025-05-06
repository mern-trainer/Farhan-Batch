import { createSlice } from "@reduxjs/toolkit";

const nameSlice = createSlice({
    name: "name",
    initialState: {
        name: ""
    },
    reducers: {
        setName: (state, action) => {

        },
        removeName: (state, action) => {
            
        }
    }
})

export const { setName, removeName } = nameSlice.actions;
export const { reducer: nameReducer } = nameSlice