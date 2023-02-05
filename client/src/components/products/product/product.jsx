import React from 'react'

export default function product(props) {
    return (
        <div className={`flex flex-col items-start m-4 rounded border-2 shadow-lg`}>
            <h1 className='p-4 font-bold text-2xl'>{props.name}</h1>
            <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204" alt="product" width="300" height="300" className={`my-`} />
            <div className='p-4 w-full'>
                <h5 className='font-semibold'>{props.description}</h5>
                <h4 className='font-bold text-xl'>$ {props.price}</h4>
                <button className='border-2 w-full p-2 bg-slate-500 hover:bg-slate-600 duration-300'>Add To Cart</button>
            </div>
        </div>
    )
}