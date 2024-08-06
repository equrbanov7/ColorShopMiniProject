import {
    configureStore
} from "@reduxjs/toolkit";
import {
    productReducer
} from "./reducers/productReducer";
import {
    categoryReducer
} from "./reducers/categoryReducer";
import { userReducer } from "./reducers/userReducer";


export const store = configureStore({
    reducer: {
        products: productReducer,
        categories: categoryReducer,
        users: userReducer
    }
}); 