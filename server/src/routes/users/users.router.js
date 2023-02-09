import express from 'express';

import { httpAddNewUser } from './users.controller.js';

const usersRouter = express.Router();

usersRouter.post('/addNewUser', httpAddNewUser)

export {
    usersRouter
}