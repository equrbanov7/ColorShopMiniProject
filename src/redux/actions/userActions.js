import {
    createAsyncThunk
} from "@reduxjs/toolkit";
import {
    instance
} from "../../api/index";

const ENUMS = {
    users: "users",
    userId: "userId"
};

export const getUsersRedux = createAsyncThunk(
    "users/getUsers",
    async (_, {
        rejectWithValue
    }) => {
        try {
            const res = await instance.get(`/${ENUMS.users}`);
            return res.data;
        } catch (error) {
            rejectWithValue(error);
        }
    }
);
export const getOneUserRedux = createAsyncThunk(
    "user/getOneUser",
    async (userId, {
        rejectWithValue
    }) => {
        try {
            const res = await instance.get(`/${ENUMS.users}/${userId}`);
            return res.data;
        } catch (error) {
            rejectWithValue(error);
        }
    }
);

export const patchUserRedux = createAsyncThunk(
    'user/patchUser',
    async ({ userId, data }, { rejectWithValue }) => {
        try {
            const res = await instance.patch(`/users/${userId}`, data); 
            return res.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);



