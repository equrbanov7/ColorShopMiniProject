import {
    configureStore
} from "@reduxjs/toolkit";
import {
    productReducer
} from "./reducers/productReducer";
import {
    categoryReducer
} from "./reducers/categoryReducer";


export const store = configureStore({
    reducer: {
        products: productReducer,
        categories: categoryReducer
    }
});