import React from 'react'
import { useDispatch } from 'react-redux'

import { cartActions } from '../../../store/cartSlice';

export default function Product(props) {
    const dispatch = useDispatch();

    const addToCartHandler = () => {
        dispatch(cartActions.addToCart({
            id: props.id,
            name: props.name,
            price: props.price,
            image: props.image,
        }))
    }

    return (
        <div className={`flex flex-col items-start m-4 rounded border-2 shadow-lg`}>
            <h1 className='p-4 font-bold text-2xl'>{props.name}</h1>
            <img src={props.img} alt="product" width="300" height="300" className={`my-`} />
            <div className='p-4 w-full'>
                <h5 className='font-semibold'>{props.description}</h5>
                <h4 className='font-bold text-xl'>$ {props.price}</h4>
                <button className='border-2 w-full p-2 bg-slate-500 hover:bg-slate-600 duration-300' onClick={addToCartHandler}>Add To Cart</button>
            </div>
        </div>
    )
}