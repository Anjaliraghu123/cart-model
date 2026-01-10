const ProductCard = ({ product, addToCart }) => {
return (
<div className="border rounded-lg p-4 shadow">
<img src={product.image} alt={product.title} className="h-40 mx-auto" />
<h2 className="text-sm font-semibold mt-2">{product.title}</h2>
<p className="font-bold">₹ {product.price}</p>
<button
onClick={() => addToCart(product)}
className="mt-2 w-full bg-blue-500 text-white py-1 rounded"
>
Add to Cart
</button>
</div>
);
};


export default ProductCard;