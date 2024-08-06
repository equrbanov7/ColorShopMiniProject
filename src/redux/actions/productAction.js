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

export const postOneProductRedux = createAsyncThunk(
    "product/postOneProduct",
    async (data, {
        rejectWithValue
    }) => {
        try {
            const res = await instance.post(`/${ENUMS.products}`, data);
            return res.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);
// export const postNewUser= async (data) => {
//     const res = await instance.post(`/${ENUMS.users}`, data);
//     return res.data;
// };