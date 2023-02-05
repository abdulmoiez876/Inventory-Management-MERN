import express from 'express';

import { httpGetAllProducts } from './product.controller.js';

const productsRouter = express.Router();

productsRouter.get('/getAllProducts', httpGetAllProducts);

export {
    productsRouter
}