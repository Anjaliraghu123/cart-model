


const Cartmodel = ({ isOpen, closeModal, cart, removeFromCart }) => {
  if (!isOpen) return null;

  return (
    <div>
      <div>
        <h2 >Cart Items</h2>

        {cart.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          cart.map(item => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b py-2"
            >
              <div>
                <h4 className="text-sm font-semibold">{item.title}</h4>
                <p>${item.price}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))
        )}

        <button
          onClick={closeModal}
          className="addtocart"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Cartmodel;
