export interface Product {
  id: string;
  name: string;
  price: number;
  description?: string;
  imageUrl: string;
  category: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Laptop Pro",
    price: 1200,
    imageUrl: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png",
    category: "Electronics",
    description: "A powerful laptop for professionals.",
  },
  {
    id: "2",
    name: "Wireless Mouse",
    price: 25,
    imageUrl: "https://via.placeholder.com/150",
    category: "Electronics",
    description: "Ergonomic wireless mouse.",
  },
  {
    id: "3",
    name: "React T-Shirt",
    price: 20,
    imageUrl: "https://via.placeholder.com/150",
    category: "Apparel",
    description: "Show your love for React.",
  },
];
