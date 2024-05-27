import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CartProvider } from './CartContext'
import Cart from './Cart'


const initialData = [
  {
    id: 1,
    name: "Images Book",
    price: 10,
    quantity: 1,
    image: "https://m.media-amazon.com/images/I/91G0AgHxa9L._AC_UY218_.jpg ",
  },
  {
    id: 2,
    name: "Harry Potter",
    price: 15,
    quantity: 2,
    image: "https://m.media-amazon.com/images/I/81q77Q39nEL._AC_UY218_.jpg ",
  },
];

const App = () => {
  return (
    <CartProvider>
      <Cart initialData={initialData} />
    </CartProvider>
  );
};

export default App;