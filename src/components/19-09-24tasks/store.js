import { configureStore } from "@reduxjs/toolkit";
import toyRedux from "./toycomponents/toyslice"
import cardRedux from "./cardscomponents/cardSlice"
import productRedux from "./productscomponts/productSlice"

export const reduxStore=configureStore({
    reducer:{
        toyData:toyRedux,
        cardData:cardRedux,
        productsData:productRedux
    }
})