import express from 'express';

import { httpAddNewProduct, httpGetAllProducts } from './product.controller.js';

const productsRouter = express.Router();

productsRouter.post('/addNewProduct', httpAddNewProduct);
productsRouter.get('/getAllProducts', httpGetAllProducts);

export {
    productsRouter
}