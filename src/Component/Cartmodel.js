const CartModal = ({ cart, closeModal, removeFromCart }) => {
return (
<div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
<div className="bg-white w-11/12 md:w-1/2 p-6 rounded">
<h2 className="text-xl font-bold mb-4">Cart Items</h2>
 

{cart.length === 0 && <p>No items in cart</p>}


{cart.map(item => (
<div key={item.id} className="flex justify-between items-center mb-3">
<span>{item.title}</span>
<button
onClick={() => removeFromCart(item.id)}
className="bg-red-500 text-white px-2 py-1 rounded"
>
Remove
</button>
</div>
))}


<button
onClick={closeModal}
className="mt-4 bg-gray-700 text-white px-4 py-2 rounded"
>
Close
</button>
</div>
</div>
);
};


export default CartModal;