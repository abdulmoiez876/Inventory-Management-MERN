import React from 'react'
import { useSelector } from 'react-redux'

import CartItem from './cartItem/CartItem';

export default function Cart() {
  const cart = useSelector(state => state.cart);

  return (
    <>
      {
        cart.cartItems.length <= 0 ?
          <h1 className='font-bold text-3xl text-center m-8'>No Items found in cart</h1> :

          <div>
            <h1 className='p-2 font-bold text-5xl w-full text-center'>Cart</h1>

            <div className={`b-slate-600 m-4 p-6`}>
              <div className={`grid bg-slate-500 grid-cols-5 w-full p-3 my-4 rounded-sm font-bold text-xl text-white `}>
                <h3 className='col-span-2'>Product</h3>
                <h3>Price</h3>
                <h3>Quantity</h3>
                <h3>Total</h3>
              </div>
              {
                cart.cartItems.map(item => <CartItem
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  img={item.img}
                  price={item.price}
                  quantity={item.quantity}
                  totalPrice={item.totalPrice}
                  description={item.description}
                />)
              }
              <div className='w-full flex items-center justify-end gap-x-4'>
                <h4 className='font-bold text-3xl'>Grand Total: </h4>
                <h3 className='font-bold text-3xl'>{cart.cartTotalPrice}</h3>
              </div>
            </div>
          </div>
      }
    </>
  )
}
