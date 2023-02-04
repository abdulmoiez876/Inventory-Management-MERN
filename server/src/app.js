import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('short'));

app.use(express.Router().get('/', (req, res) => {
    res.status(200).send('hehe')
}))

export default app;