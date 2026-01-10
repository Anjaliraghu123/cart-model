import { useEffect, useState } from "react";
import Navbar from "./Component/Navbar";
import CartModal from "./Component/Cartmodel";
import ProductList from "./ProductList";


function App() {
const [products, setProducts] = useState([]);
const [cart, setCart] = useState([]);
const [openModal, setOpenModal] = useState(false);


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
<Navbar cartCount={cart.length} openCart={() => setOpenModal(true)} />
< ProductList products={products} addToCart={addToCart} />
{openModal && (
<CartModal
cart={cart}
closeModal={() => setOpenModal(false)}
removeFromCart={removeFromCart}
/>
)}
</div>
);
}


export default App;