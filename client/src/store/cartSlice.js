import {
    createSlice
} from "@reduxjs/toolkit";
import {
    toast
} from 'react-toastify';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [], // item: {name, img, totalPrice, price, quantity, }
        cartTotalQuantity: 0,
        cartTotalPrice: 0
    },
    reducers: {
        addToCart(state, action) {
            const itemToBeAdded = action.payload;
            const existingItem = state.cartItems.find(cartItem => cartItem.id === itemToBeAdded.id);

            state.cartTotalQuantity++;
            state.cartTotalPrice += itemToBeAdded.price;
            if (existingItem) {
                existingItem.quantity++;
                existingItem.totalPrice += itemToBeAdded.price
                toast.success(`${itemToBeAdded.name} quantity increased in cart to ${existingItem.quantity}!`, {
                    position: 'bottom-left'
                })
            } else {
                state.cartItems.push({
                    id: itemToBeAdded.id,
                    name: itemToBeAdded.name,
                    img: itemToBeAdded.img,
                    price: itemToBeAdded.price,
                    quantity: 1,
                    totalPrice: itemToBeAdded.price
                });
                toast.success(`${itemToBeAdded.name} Added To Cart`, {
                    position: 'bottom-left'
                })
            }
        }
    }
})

const cartActions = cartSlice.actions;

export {
    cartActions
}

export default cartSlice;