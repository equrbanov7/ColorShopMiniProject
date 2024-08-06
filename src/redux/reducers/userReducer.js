import {
    createSlice
} from '@reduxjs/toolkit';
import {
    getOneUserRedux,
    getUsersRedux,
    patchUserRedux
} from '../actions/userActions';

const initialState = {
    loading: false,
    users: [],
    user: {},
    error: null,
};

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addToBasket(state, action) {
            const {
                productId,
                count
            } = action.payload;
            const existingItem = state.user.basket.find(item => item.productId == productId);

            if (existingItem) {
                existingItem.count = count;
            } else {
                state.user.basket.push({
                    productId,
                    count
                });
            }


        },

        increment(state, action) {
            const {
                productId
            } = action.payload;
            const item = state.user.basket.find(item => item.productId == productId);
            
            if (item) {
                item.count = item.count+ 1;
            }

        },

        decrement(state, action) {
            const {
                productId
            } = action.payload;
            const item = state.user.basket.find(item => item.productId == productId);
            if (item && item.count > 1) {
                item.count -= 1;

            }

        },
    },
    extraReducers: (builder) => {
        builder.addCase(getUsersRedux.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getUsersRedux.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
        });
        builder.addCase(getUsersRedux.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });

        builder.addCase(getOneUserRedux.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getOneUserRedux.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
        });
        builder.addCase(getOneUserRedux.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });

        builder.addCase(patchUserRedux.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(patchUserRedux.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
        });
        builder.addCase(patchUserRedux.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
});

export const {
    addToBasket,
    increment,
    decrement
} = userSlice.actions;
export const userReducer = userSlice.reducer;