import Joi from 'joi';

import products from './products.mongo.js';

const productSchema = Joi.object({
    id: Joi.number().integer().required(),
    name: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required(),
    img: Joi.string().required()
})

const addNewProduct = async (productData) => {
    try {
        const { error } = productSchema.validate(productData);

        if(error) {
            return {
                code: 400,
                status: false,
                message: error.details[0].message
            }
        }
        else {
            const existingProduct = await products.findOne({name: productData.name});

            if(existingProduct) {
                return {
                    code: 400,
                    status: false,
                    message: 'Product already exists'
                }
            }
            else {
                const newProduct = await products.create(productData);

                if(newProduct) {
                    return {
                        code: 201,
                        status: true,
                        message: 'Product added successfully'
                    }
                }
                else {
                    return {
                        code: 500,
                        status: false,
                        message: 'Something went wrong'
                    }
                }
            }
        }
    }
    catch (error) {
        return {
            code: 500,
            status: false,
            message: 'Something went wrong'
        }
    }
}

const getAllProducts = async () => {
    try {
        // await sleep(5000);
        return await products.find({});
    } catch (err) {
        console.log(err)
    }
}

export {
    addNewProduct,
    getAllProducts
}