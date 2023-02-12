import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'

import CartItem from './cartItem/CartItem';
import { cartActions } from '../../store/cartSlice';

export default function Cart() {
  const cart = useSelector(state => state.cart);
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const redirectToProducts = () => {
    navigate('/products');
  }

  const clearCartHandler = () => {
    dispatch(cartActions.clearCart());
  }

  return (
    <>
      {
        cart.cartItems.length <= 0
          ?
          <div className='flex flex-col items-center'>
            <h1 className='font-bold text-3xl text-center m-8'>No Items found in cart</h1>
            <button className='bg-slate-500 p-4 rounded hover:bg-slate-600 ease-in-out duration-200' onClick={redirectToProducts}>Continue Shopping</button>
          </div>
          :
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
              <div className='flex flex-col items-end bg-slate-100 gap-y-4'>
                <div className='w-full flex items-center justify-end gap-x-4'>
                  <h4 className='font-bold text-3xl'>Grand Total: </h4>
                  <h3 className='font-bold text-3xl'>{cart.cartTotalPrice}</h3>
                </div>
                <button className='bg-red-500 p-4 rounded hover:bg-red-600 ease-in-out duration-200 w-1/6' onClick={clearCartHandler}>Clear Cart</button>
                <button className='bg-green-500 p-4 rounded hover:bg-green-600 ease-in-out duration-200 w-1/6' onClick={redirectToProducts}>Continue Shopping</button>
                {
                  auth.isAuthenticated
                  ?
                  <button className='bg-blue-500 p-4 rounded hover:bg-blue-600 ease-in-out duration-200 w-1/6' onClick={redirectToProducts}>Checkout</button>
                  :
                  <Link to='/login' className='bg-blue-500 p-4 rounded hover:bg-blue-600 ease-in-out duration-200 w-1/6 text-center' onClick={redirectToProducts}>Login To Checkout</Link>
                }
              </div>
            </div>
          </div>
      }
    </>
  )
}
