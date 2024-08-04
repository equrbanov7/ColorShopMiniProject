import {
    createSlice
} from '@reduxjs/toolkit'

import {
    getCategoriesRedux
} from '../actions/categoryAction';

const initialState = {
    loading: false,
    categories: [],
}

export const categorySlice = createSlice({
    name: 'categories',
    initialState,

    extraReducers: (builder) => {
        //getCategories
        builder.addCase(getCategoriesRedux.pending, (state) => {
            state.loading = true
        });

        builder.addCase(getCategoriesRedux.fulfilled, (state, action) => {
            state.loading = false;
            //Api cavab

            state.categories = action.payload
            //   console.log(action.payload, "payloadd")
        });
        builder.addCase(getCategoriesRedux.rejected, (state, action) => {
            state.loading = false;
            //Api cavab error
            console.log(action.payload)
        });



    }

})

export const categoryReducer = categorySlice.reducer