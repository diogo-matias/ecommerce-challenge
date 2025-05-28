import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StateType } from "./types";
import { Product } from "@/pages/api/product-model";

export const getAllProducts = createAsyncThunk(
    "@ecommerce/getAllProducts",
    async (payload: { page: string; category: string }) => {
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
    filteredProductList: [],
    paginationInfo: {
        currentPage: 0,
        totalPages: 0,
        totalItems: 0,
    },
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
        filterByName(state, action: PayloadAction<string>) {
            const search = action.payload.toLowerCase();
            state.filteredProductList = state.products.filter(
                (product: Product) =>
                    product.name.toLowerCase().includes(search)
            );
        },
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

            state.filteredProductList = payload?.products;
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
