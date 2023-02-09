import React from 'react'
import { useDispatch } from 'react-redux'

import { cartActions } from '../../../store/cartSlice'

export default function CartItem(props) {
    const dispatch = useDispatch()

    const incrementQuantityHandler = () => {
        dispatch(cartActions.incrementProductQuantity(props.id))
    }

    const decrementQuantityHandler = () => {
        dispatch(cartActions.decrementProductQuantity(props.id))
    }

    return (
        <div className={`grid grid-cols-5 w-full my-4 p-3 items-center gap-y-20 shadow-xl`}>
            <div className="flex gap-x-4 items-center col-span-2">
                <img src={props.img} alt={props.name} height='100' width='100' />
                <div className="flex flex-col items-start">
                    <h4 className='font-bold text-2xl'>{props.name}</h4>
                    <h4 className='text-sm'>{props.description}</h4>
                </div>
            </div>  
            <h4 className='text-xl font-bold'>{props.price}</h4>
            <div className="flex items-center w-16 justify-around">
                <button className='bg-slate-500 p-2 rounded w-10 mx-2 h-8' onClick={incrementQuantityHandler}>+</button>
                <h4 className='text-xl font-bold'>{props.quantity}</h4>
                <button className='bg-slate-500 p-2 rounded w-10 mx-2 h-8' onClick={decrementQuantityHandler}>-</button>
            </div>
            <h4 className='text-xl font-bold'>{props.totalPrice}</h4>
        </div>
    )
}
