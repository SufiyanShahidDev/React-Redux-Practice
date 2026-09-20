import { createSlice } from '@reduxjs/toolkit'

const initialState = { value: 0 }

const counter = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: () => {},
        decrement: () => {},
        reset: () => {}
    }
})

export const {increment,decrement,reset} = counter.actions

export default counter.reducers