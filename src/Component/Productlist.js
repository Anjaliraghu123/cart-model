import ProductCard from "./Productcard";
const Productlist = ({ products, addToCart }) => {
  return (
    <div className="app">
      <div className="product-container">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Productlist;
