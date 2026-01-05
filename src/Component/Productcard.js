const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.title}
        className="product-image"
      />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <button className="add" onClick={() => addToCart(product)}>
        Add to Cart 
      </button>
    </div>
  );
};

export default ProductCard;
