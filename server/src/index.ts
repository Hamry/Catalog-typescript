import express, { Request, Response } from 'express';
import {products, Product} from './dummy-data';
const app = express();

const PORT = process.env.PORT || 3001;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.header('Access-Control-Allow-Header', 'Origin, X-Requested-With, Content-Type, Accept');
    next()

})

app.use(express.json());

app.get('/api/hello', (req: Request, res: Response) => {
    res.json({ message: 'Hello from BFF!'});
});

app.get('/api/products', (req: Request, res: Response) => {
    res.json(products);
});


app.listen(PORT, () => {
    console.log('Server is running on port ', PORT);
});