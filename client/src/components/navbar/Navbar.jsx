import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';

import { authActions } from '../../store/authSlice';

export default function Navbar() {
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const cart = useSelector(state => state.cart);
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    setShowUserDropdown(false);
    dispatch(authActions.logout());
  }

  const toggleUserDropdown = () => {
    setShowUserDropdown(!showUserDropdown);
  }

  return (
    <>
      <div className="flex bg-slate-600 text-white items-center gap-x-6 h-14 p-2 w-full justify-between">
        <Link to={'/'}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
          </svg>
        </Link>

        <div className='flex items-center gap-x-2'>
          <Link to={'/cart'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.374L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
          </Link>
          <h2>{cart.cartTotalQuantity}</h2>
        </div>

        <div className='flex items-center gap-x-2'>
          {
            auth.isAuthenticated
              ?
              <div onClick={toggleUserDropdown} className='cursor-pointer'>
                <h2>{auth.name}</h2>
              </div>
              :
              <>
                <Link to='/login' className="p-3 hover:bg-green-700 rounded-md ease-in-out duration-100">Login</Link>
                <Link to='/signup' className="p-3 hover:bg-green-700 rounded-md ease-in-out duration-100">Register</Link>
              </>
          }
        </div>
      </div>
      {
        showUserDropdown &&
        <div className="flex flex-col items-start absolute bg-slate-600 right-4 w-72 p-4 rounded-md top-16 gap-y-4">
          <div className="flex items-center justify-between w-full">
            <h2>Email: </h2>
            <h2>{auth.email}</h2>
          </div>
          <button className="w-full p-3 bg-red-600 hover:bg-red-700 rounded-md ease-in-out duration-100" onClick={logoutHandler}>Logout</button>
        </div>
      }
    </>
  )
}
