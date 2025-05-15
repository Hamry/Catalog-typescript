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
    imageUrl: "https://via.placeholder.com/150/0000FF/808080?Text=WirelessMouse",
    category: "Electronics",
    description: "Ergonomic wireless mouse.",
  },
  {
    id: "3",
    name: "React T-Shirt",
    price: 20,
    imageUrl: "https://via.placeholder.com/150/FF0000/FFFFFF?Text=ReactT-Shirt",
    category: "Apparel",
    description: "Show your love for React.",
  },
  {
    id: "4",
    name: "Coffee Mug - Code Brew",
    price: 15,
    imageUrl: "https://via.placeholder.com/150/654321/FFFFFF?Text=CoffeeMug",
    category: "Home Goods",
    description: "The perfect mug for your morning coding session.",
  },
  {
    id: "5",
    name: "Mechanical Keyboard",
    price: 150,
    imageUrl: "https://via.placeholder.com/150/333333/FFFFFF?Text=MechanicalKeyboard",
    category: "Electronics",
    description: "Clicky and satisfying mechanical keyboard for developers.",
  },
  {
    id: "6",
    name: "JavaScript Hoodie",
    price: 45,
    imageUrl: "https://via.placeholder.com/150/F7DF1E/000000?Text=JSHoodie",
    category: "Apparel",
    description: "Stay warm and stylish with this JavaScript hoodie.",
  },
  {
    id: "7",
    name: "Standing Desk Converter",
    price: 250,
    imageUrl: "https://via.placeholder.com/150/A9A9A9/000000?Text=StandingDesk",
    category: "Office",
    description: "Improve your posture with this adjustable standing desk converter.",
  },
  {
    id: "8",
    name: "Smart Water Bottle",
    price: 30,
    imageUrl: "https://via.placeholder.com/150/00BFFF/FFFFFF?Text=SmartBottle",
    category: "Gadgets",
    description: "Stay hydrated with this smart water bottle that tracks your intake.",
  },
  {
    id: "9",
    name: "Webcam HD Pro",
    price: 60,
    imageUrl: "https://via.placeholder.com/150/2F4F4F/FFFFFF?Text=WebcamPro",
    category: "Electronics",
    description: "High-definition webcam for clear video calls and streaming.",
  },
  {
    id: "10",
    name: "Node.js Socks",
    price: 12,
    imageUrl: "https://via.placeholder.com/150/3C873A/FFFFFF?Text=NodeSocks",
    category: "Apparel",
    description: "Comfortable and nerdy Node.js themed socks.",
  },
  {
    id: "11",
    name: "Ergonomic Chair",
    price: 350,
    imageUrl: "https://via.placeholder.com/150/556B2F/FFFFFF?Text=ErgoChair",
    category: "Office",
    description: "Supportive and comfortable chair for long working hours.",
  },
  {
    id: "12",
    name: "Portable SSD 1TB",
    price: 120,
    imageUrl: "https://via.placeholder.com/150/FFD700/000000?Text=PortableSSD",
    category: "Electronics",
    description: "Fast and reliable portable storage for your files.",
  },
  {
    id: "13",
    name: "Vue.js Cap",
    price: 18,
    imageUrl: "https://via.placeholder.com/150/4FC08D/FFFFFF?Text=VueCap",
    category: "Apparel",
    description: "A cool cap for Vue.js enthusiasts.",
  },
  {
    id: "14",
    name: "Desk Plant - Succulent",
    price: 10,
    imageUrl: "https://via.placeholder.com/150/228B22/FFFFFF?Text=DeskPlant",
    category: "Home Goods",
    description: "Add a touch of green to your workspace.",
  },
  {
    id: "15",
    name: "Noise Cancelling Headphones",
    price: 200,
    imageUrl: "https://via.placeholder.com/150/B0C4DE/000000?Text=Headphones",
    category: "Electronics",
    description: "Immerse yourself in your work or music without distractions.",
  }
];