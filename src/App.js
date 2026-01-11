import { useEffect, useState } from "react";
import Navbar from "./Component/Navbar";
import CartModal from "./Component/Cartmodel";
import ProductList from "./Component/ProductList";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const addToCart = (product) => {
    const exists = cart.find(item => item.id === product.id);
    if (exists) {
      alert("Item already added to the cart");
    } else {
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <div>
      <Navbar
        cartCount={cart.length}
        openCart={() => setIsCartOpen(true)}
      />

      <ProductList
        products={products}
        addToCart={addToCart}
      />

      {isCartOpen && (
        <CartModal
          cart={cart}
          removeFromCart={removeFromCart}
          closeModal={() => setIsCartOpen(false)}
        />
      )}
    </div>
  );
}

export default App;
