import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="flex bg-slate-600 text-white items-center gap-x-6 h-10 p-2 w-full justify-center">
      <Link to={'/'}>Home</Link>
      <Link to={'/products'}>Products</Link>
      <Link to={'/cart'}>Cart</Link>
    </div>
  )
}
