import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import Navbar from './Navbar';

function CartItem({ onNavigate }) {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // price x quantity for one plant
  const itemTotal = (item) => item.cost * item.quantity;

  // whole cart
  const cartTotal = () =>
    items.reduce((sum, item) => sum + itemTotal(item), 0);

  const plus = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const minus = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      // 1 -> 0 just removes it
      dispatch(removeItem(item.name));
    }
  };

  const remove = (item) => {
    dispatch(removeItem(item.name));
  };

  const checkout = () => {
    alert('Checkout: Coming Soon!');
  };

  return (
    <div className="page">
      <Navbar current="cart" onNavigate={onNavigate} />

      <main className="cart">
        <h2 className="cart-total-amount">
          Total Cart Amount: ${cartTotal()}
        </h2>

        {items.length === 0 ? (
          <p className="cart-empty">Your cart is empty. Add some plants to get started.</p>
        ) : (
          <div className="cart-list">
            {items.map((item) => (
              <div className="cart-item" key={item.name}>
                <img className="cart-item-image" src={item.image} alt={item.name} />
                <div className="cart-item-details">
                  <h3 className="cart-item-name">{item.name}</h3>
                  <p className="cart-item-unit">Unit price: ${item.cost}</p>
                  <div className="cart-item-quantity">
                    <button
                      className="qty-btn"
                      onClick={() => minus(item)}
                      aria-label={`Decrease ${item.name} quantity`}
                    >
                      −
                    </button>
                    <span className="qty-value">{item.quantity}</span>
                    <button
                      className="qty-btn"
                      onClick={() => plus(item)}
                      aria-label={`Increase ${item.name} quantity`}
                    >
                      +
                    </button>
                  </div>
                  <p className="cart-item-total">
                    Total: ${itemTotal(item)}
                  </p>
                </div>
                <button
                  className="delete-btn"
                  onClick={() => remove(item)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="cart-actions">
          <button className="continue-btn" onClick={() => onNavigate('plants')}>
            Continue Shopping
          </button>
          <button className="checkout-btn" onClick={checkout}>
            Checkout
          </button>
        </div>
      </main>
    </div>
  );
}

export default CartItem;
