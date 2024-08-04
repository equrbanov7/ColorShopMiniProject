import {
    createAsyncThunk
} from "@reduxjs/toolkit";
import {
    instance
} from "../../api/index";

export const ENUMS = {
    categories: "categories"
};


export const getCategoriesRedux = createAsyncThunk(
    "categories/getCategories",
    async (_, {
        rejectWithValue
    }) => {
        try {
            const res = await instance.get(`/${ENUMS.categories}`);
            return res.data;
        } catch (error) {
            rejectWithValue(error);
        }
    }
);