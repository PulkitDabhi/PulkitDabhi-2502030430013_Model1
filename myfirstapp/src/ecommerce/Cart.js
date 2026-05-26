function Cart({ cartItems, onUpdateQty, onRemove, onContinueShopping }) {
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const delivery = subtotal > 0 ? 499 : 0;
  const grandTotal = subtotal + delivery;

  return (
    <section className="page-section cart-page">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Your Cart</p>
          <h2>Review your electronics before checkout</h2>
        </div>
        <p>Fast delivery, easy returns, and secure checkout for every purchase.</p>
      </div>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <h3>Your cart is empty</h3>
          <p>Add a few essentials from the product listing to get started.</p>
          <button type="button" className="primary-btn" onClick={onContinueShopping}>
            Browse products
          </button>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-icon" aria-hidden="true">
                  {item.icon}
                </div>
                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p>{item.category}</p>
                  <p>₹{item.price.toLocaleString()} each</p>
                </div>
                <div className="cart-quantity-controls">
                  <button type="button" onClick={() => onUpdateQty(item.id, item.quantity - 1)}>
                    −
                  </button>
                  <span>{item.quantity}</span>
                  <button type="button" onClick={() => onUpdateQty(item.id, item.quantity + 1)}>
                    +
                  </button>
                </div>
                <div className="cart-item-total">
                  <strong>₹{(item.price * item.quantity).toLocaleString()}</strong>
                  <button type="button" onClick={() => onRemove(item.id)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <aside className="cart-summary">
            <h3>Order Summary</h3>
            <div>
              <span>Subtotal</span>
              <strong>₹{subtotal.toLocaleString()}</strong>
            </div>
            <div>
              <span>Delivery</span>
              <strong>₹{delivery.toLocaleString()}</strong>
            </div>
            <div className="summary-total">
              <span>Total</span>
              <strong>₹{grandTotal.toLocaleString()}</strong>
            </div>
            <button type="button" className="primary-btn">
              Proceed to Checkout
            </button>
          </aside>
        </div>
      )}
    </section>
  );
}

export default Cart;
