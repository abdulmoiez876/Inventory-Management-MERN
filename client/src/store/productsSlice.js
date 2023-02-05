import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: []
    },
    reducers: {

    }
})

export const productAction = productsSlice.actions;
export default productsSlice;