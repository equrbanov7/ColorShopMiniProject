import {
    createSlice
} from '@reduxjs/toolkit'

import {
    getProductsRedux,
    getOneProductRedux,
    postOneProductRedux
} from '../actions/productAction';

const initialState = {
    loading: false,
    products: [],
    oneProduct: {},
}

export const productSlice = createSlice({
    name: 'products',
    initialState,

    // reducers: {
    //     increment: (state, action) => {
    //         const { productId } = action.payload;
    //         console.log(productId, "actii", state.products )

    //         const product = state.products.find(p => p.id === productId);
    //         if (product) {
    //             product.count += 1;
    //         }
    //     },
    // },

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

        // getOneProduct
        builder.addCase(getOneProductRedux.pending, (state) => {
            state.loading = true
        });

        builder.addCase(getOneProductRedux.fulfilled, (state, action) => {
            state.loading = false;
            //Api cavab

            state.oneProduct = action.payload
            //   console.log(action.payload, "payloadd")
        });
        builder.addCase(getOneProductRedux.rejected, (state, action) => {
            state.loading = false;
            //Api cavab error
            console.log(action.payload)
        });

        // postOneProduct
        builder.addCase(postOneProductRedux.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(postOneProductRedux.fulfilled, (state, action) => {
            state.loading = false;
            state.products.push(action.payload);
        });
        builder.addCase(postOneProductRedux.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });

    }

})

export const {
    increment
} = productSlice.actions;
export const productReducer = productSlice.reducer