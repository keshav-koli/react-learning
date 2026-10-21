import { configureStore } from "@reduxjs/toolkit";
import reducer from "./TodoSlice";


export const MyStore = configureStore({
    reducer: reducer
})
