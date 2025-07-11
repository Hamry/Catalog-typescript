import { useState, useEffect } from "react";
import { Grid, TextInput } from "@Mantine/core";
import { ProductCard } from "./components/ProductCard";
import "./App.css";

interface Product {
  id: string;
  name: string;
  price: number;
  description?: string;
  imageUrl: string;
  category: string;
}

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string | null>(null);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/api/products?search=${searchTerm}`
        );
        if (!response.ok) {
          throw new Error(`HTTP status error: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (e: any) {
        setError(e.message);
        console.error(`Failed to fetch products: `, e);
      }
    };

    fetchProducts();
  }, [searchTerm]);

  if (error) {
    return <div className="App">Error Fetching products: {error}</div>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Product Catalog</h1>
        <TextInput
          mt="sm"
          label="Input label"
          placeholder="Input placeholder"
          onChange={(event) => {
            if (event.currentTarget.value) {
              setSearchTerm(event.currentTarget.value);
            } else {
              setSearchTerm(null);
            }
            console.log(event.currentTarget.value);
          }}
        />

        {products.length > 0 ? (
          <Grid>
            {products.map((product) => {
              return (
                <Grid.Col span={4} key={product.id}>
                  <ProductCard product={product} />
                </Grid.Col>
              );
            })}
          </Grid>
        ) : (
          <div>Loading products ...</div>
        )}
      </header>
    </div>
  );
}

export default App;
