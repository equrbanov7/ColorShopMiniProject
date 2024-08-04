import {
    createAsyncThunk
} from "@reduxjs/toolkit";
import {
    instance
} from "../../api/index";

const ENUMS = {
    products: "products",
    categoryId: "category_id"
};


export const getProductsRedux = createAsyncThunk(
    "products/getProducts",
    async (_, {
        rejectWithValue
    }) => {
        try {
            const res = await instance.get(`/${ENUMS.products}`);
            return res.data;
        } catch (error) {
            rejectWithValue(error);
        }
    }
);
export const getOneProductRedux = createAsyncThunk(
    "product/getOneProduct",
    async (id, {
        rejectWithValue
    }) => {
        try {
            const res = await instance.get(`/${ENUMS.products}/${id}`);
            return res.data;
        } catch (error) {
            rejectWithValue(error);
        }
    }
);


  


// export const getOneProduct = createAsyncThunk(
//   "product/getOneProduct",
//   async (id, { rejectWithValue }) => {
//     try {


//       const res = await instance.get(
//         `/products?populate=*&[filters][id][$eq]=${id} `
//       );

//       return res.data;
//     } catch (error) {
//       rejectWithValue(error);
//     }
//   }
// );