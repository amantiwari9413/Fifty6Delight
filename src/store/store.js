import { configureStore } from "@reduxjs/toolkit";
import addToCartSlice from "../feature/addCartSlice";

export const store = configureStore({
    reducer:addToCartSlice
})