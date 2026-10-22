import { configureStore } from "@reduxjs/toolkit";
import reducer from "./counter";

export let myCounterStore=configureStore({
    reducer:{counter:reducer}
})