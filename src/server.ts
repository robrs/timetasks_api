import express from 'express';
import cors from 'cors';
import { router } from './routes';

const app = express();

app.use(express.json());
app.use(router);

app.use(cors({
    origin: '*'
}));

app.listen(3333);