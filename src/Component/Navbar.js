const Navbar = ({ cartCount, openCart }) => {
  return (
    <nav className="nav">
      <h1 className="heading">Product</h1>
      <button onClick={openCart}className="nav-btn">
        Cart ({cartCount})
      </button>
    </nav>
  );
};

export default Navbar;
