import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

import { uiActions } from "./uiSlice";

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        isLoaded: false
    },
    reducers: {
        replaceProducts(state, action) {
            state.products = action.payload.products;
        }
    }
})

const productActions = productsSlice.actions;

const getAllProducts = () => {
    return async (dispatch) => {
        dispatch(uiActions.startLoading());
        console.log('Fetching Products from API...');
        try {
            await axios.get('http://localhost:8000/getAllProducts').then((response) => {
                // console.log(response.data);
                dispatch(productActions.replaceProducts({products: response.data}));
                console.log('Products fetched successfully!');
            }).catch((err) => {
                console.log("error fetching products");
                console.log(err);
            })
            dispatch(uiActions.stopLoading());
        }
        catch (err) {
            console.log(err);
            dispatch(uiActions.stopLoading());
        }
    }
}

export {
    productActions,
    getAllProducts
} 
export default productsSlice;