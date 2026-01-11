const CartModal = ({ cart, closeModal, removeFromCart }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      
      <div className="bg-white w-11/12 md:w-1/2 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-center">
          Cart Items
        </h2>

        {cart.length === 0 && (
          <p className="text-center text-gray-500">
            No items in cart
          </p>
        )}

        {cart.map(item => (
          <div
            key={item.id}
            className="flex justify-between items-center mb-3 border-b pb-2"
          >
            <div>
              <p className="text-sm font-semibold">{item.title}</p>
              <p className="text-sm text-gray-600">₹ {item.price}</p>
            </div>

            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        ))}

        <div className="flex justify-center mt-4">
          <button
            onClick={closeModal}
            className="bg-gray-700 text-white px-6 py-2 rounded hover:bg-gray-800"
          >
            Close
          </button>
        </div>
      </div>

    </div>
  );
};

export default CartModal;
