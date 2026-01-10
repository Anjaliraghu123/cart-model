const Navbar = ({ cartCount, openCart }) => {
return (
<div className="flex justify-between items-center p-4 bg-blue-600 text-white">
<h1 className="text-xl font-bold">Fake Store</h1>
<button onClick={openCart} className="relative">
Cart 🛒
<span className="ml-2 bg-red-500 px-2 rounded-full">{cartCount}</span>
</button>
</div>
);
};


export default Navbar;