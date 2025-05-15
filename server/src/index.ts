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
    const category = req.query.category as string; // Values from req.query are strings or arrays of strings
    const limitString = req.query.limit as string;
    const searchTerm = req.query.search === "null" ? null : req.query.search as string;
    
    
    
    console.log(`
        category: ${category}
        limitString: ${limitString}
        searchTerm: ${searchTerm}
        `);
    
    let filteredProducts = [...products]


    if (category) {
        console.log(`filtering category on ${category}`);
        filteredProducts = filteredProducts.filter(p => p.category.toLowerCase() == category.toLowerCase());
    }

    if (searchTerm) {
        console.log(`filtering search term on ${searchTerm}`)
        filteredProducts = filteredProducts.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    if (limitString) {
        console.log(`limiting results to ${limitString}`)
        filteredProducts = filteredProducts.slice(0,parseInt(limitString));
    }
    
    res.json(filteredProducts);
    console.log(filteredProducts);
    return;
    
});



app.listen(PORT, () => {
    console.log('Server is running on port ', PORT);
});