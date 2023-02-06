import React from 'react'
import { useSelector } from 'react-redux'

import CartItem from './cartItem/CartItem';

export default function Cart() {
  const cart = useSelector(state => state.cart);

  return (
    <div>
      {
        cart.cartItems.map(item => <CartItem/>)
      }
    </div>
  )
}
