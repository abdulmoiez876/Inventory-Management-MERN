import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import { productsRouter } from './routes/products/product.router.js';
import { usersRouter } from './routes/users/users.router.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('short'));

app.use(productsRouter)
app.use(usersRouter)

export default app;