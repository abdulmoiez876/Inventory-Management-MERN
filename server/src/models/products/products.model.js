const products = [{
        id: 1,
        name: 'Product 1',
        description: 'this is the product description 1',
        price: 100,
        img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204'
    },
    {
        id: 2,
        name: 'Product 2',
        description: 'this is the product description 2',
        price: 200,
        img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204'
    },
    {
        id: 3,
        name: 'Product 3',
        description: 'this is the product description 3',
        price: 300,
        img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204'
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