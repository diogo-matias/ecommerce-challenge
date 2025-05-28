import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { StateType } from "./types";

export const getAllProducts = createAsyncThunk(
    "@ecommerce/getAllProducts",
    async (payload: { page: string; category: strring }) => {
        const { page, category } = payload;

        const res = await fetch(
            `/api/products?itemsPerPage=9&page=${page}&category=${category}`
        );
        const data = await res.json();
        console.log("REDUX DATA no async thunk", data);

        return data;
    }
);

const initialState: StateType = {
    products: [],
    currentPage: 1,
    totalPages: 0,
    totalItems: 0,
    category: "",
    filter: {
        filters: {
            category: "",
            max_price: 0,
            min_price: 0,
            title: "",
        },
    },
};

const EcommerceSlice = createSlice({
    name: "@products",
    initialState: initialState,
    reducers: {
        filter(state, action) {},
    },
    extraReducers: ({ addCase }) => {
        addCase(getAllProducts.fulfilled, (state, { payload }) => {
            console.log("REDUX DATA", payload);
            state.products = payload?.products;
            state.paginationInfo = {
                currentPage: payload.currentPage,
                totalItems: payload?.totalItems,
                totalPages: payload?.totalPages,
            };

            state.category = payload?.category;
        });
        // addCase(getOneProducts.fulfilled, (state, { payload }) => {
        //     state.selectedProduct = payload;
        // });
    },
});

export const EcommerceActions = {
    ...EcommerceSlice.actions,
    getAllProducts,
};

export default EcommerceSlice.reducer;
