const Navbar = ({ cartCount, openCart }) => {
  return (
    <nav className="flex justify-between items-center p-4 bg-black shadow">
      <h1 className="text-xl font-bold text-white ">Products</h1>

      <button
        onClick={openCart}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Cart ({cartCount})
      </button>
    </nav>
  );
};

export default Navbar;
