import {
    createSlice
} from '@reduxjs/toolkit'

import {
    getProductsRedux
} from '../actions/productAction';

const initialState = {
    loading: false,
    products: [],
    oneProduct: {}
}

export const productSlice = createSlice({
    name: 'products',
    initialState,

    extraReducers: (builder) => {
        //getProductsRedux
        builder.addCase(getProductsRedux.pending, (state) => {
            state.loading = true
        });

        builder.addCase(getProductsRedux.fulfilled, (state, action) => {
            state.loading = false;
            //Api cavab

            state.products = action.payload
            //   console.log(action.payload, "payloadd")
        });
        builder.addCase(getProductsRedux.rejected, (state, action) => {
            state.loading = false;
            //Api cavab error
            console.log(action.payload)
        });



    }

})

export const productReducer = productSlice.reducer