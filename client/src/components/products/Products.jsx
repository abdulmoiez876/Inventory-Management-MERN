import React from 'react'
import { useSelector } from 'react-redux'

import Product from './product/product'

export default function Products() {
    const products = useSelector(state => state.products.products)

    return (
        <div className={`flex w-full items-center space-x-28 justify-center flex-wrap`}>
            {products.map((product) =>
                <Product
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                />
            )}
        </div>
    )
}
