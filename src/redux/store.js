import { configureStore } from "@reduxjs/toolkit";
import { circleReducer } from "./reducer/circle";


export const store = configureStore({
    reducer:{
        [circleReducer.name]:circleReducer.reducer
    }
})