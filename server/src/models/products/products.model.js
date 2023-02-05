const products = [{
        id: 1,
        name: 'Product 1',
        description: 'this is the product description 1',
        price: 100,
    },
    {
        id: 2,
        name: 'Product 2',
        description: 'this is the product description 2',
        price: 200,
    },
    {
        id: 3,
        name: 'Product 3',
        description: 'this is the product description 3',
        price: 300,
    }
]

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const getAllProducts = async () => {
    try {
        // await sleep(5000);
        return await products;
    } catch (err) {
        console.log(err)
    }
}

export {
    getAllProducts
}