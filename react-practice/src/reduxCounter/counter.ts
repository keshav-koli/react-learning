import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    count: 0
}

export let MyCounter = createSlice({
    name: "Counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        incrementByNumber: (state, action) => {
            state.count += action.payload
        }
    }
})

export let { increment, decrement, incrementByNumber } = MyCounter.actions;
export default MyCounter.reducer;