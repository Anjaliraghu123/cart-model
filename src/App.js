import { useEffect, useState } from "react";
import Navbar from "./Component/Navbar";
import Productlist from "./Component/Productlist";
import Cartmodel from "./Component/Cartmodel";

import "./App.css"

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  // Fetch products
  useEffect(() => {
 fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  // Add to cart
  const addToCart = (product) => {
    const exists = cart.find(item => item.id === product.id);
    if (exists) {
      alert("Item already added to the cart");
      return;
    }
    setCart([...cart, product]);
  };

  // Remove from cart
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <>
      <Navbar cartCount={cart.length} openCart={() => setIsOpen(true)}  />
      <Productlist products={products} addToCart={addToCart} />
      <Cartmodel   
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        cart={cart}
        removeFromCart={removeFromCart}
      />
    </>
  );
}

export default App;
