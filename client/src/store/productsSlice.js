import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        isLoaded: false
    },
    reducers: {
        replaceProducts(state, action) {
            state.products = action.payload.products;
            state.isLoaded = true;
        }
    }
})

const productActions = productsSlice.actions;

const getAllProducts = () => {
    return async (dispatch) => {
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
        }
        catch (err) {
            console.log(err);
        }
    }
}

export {
    productActions,
    getAllProducts
} 
export default productsSlice;