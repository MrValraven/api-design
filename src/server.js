import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { json, urlencoded } from 'body-parser';

export const app = express();

app.disable('x-powered-by');

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send({ message: 'hello'})
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send({ message: 'ok'});
});

export const start = () => {
    app.listen('3000', () => {
        console.log("Server is on port 3000")
    });
};