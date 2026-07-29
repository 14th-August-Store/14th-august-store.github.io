import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext";
import Footer from "../components/Footer";
import "../css/cart.css";

function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
    <Navbar/>
      <div className="cart-page">
        <h1>🛒 Your Shopping Cart</h1>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <h2>Your cart is empty 😔</h2>
            <p>Add some patriotic products to celebrate 14 August!</p>

            <Link to="/shop">
              <button className="continue-shopping">
                Continue Shopping
              </button>
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item) => (
                <div className="cart-item" key={item.id}>
                  <img
                    src={item.image}
                    alt={item.name}
                  />

                  <div className="cart-details">
                    <h3>{item.name}</h3>

                    <p>Price: Rs. {item.price}</p>

                    <div className="quantity">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                      >
                        -
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        onClick={() => increaseQuantity(item.id)}
                      >
                        +
                      </button>
                    </div>

                    <p>
                      <strong>
                        Subtotal: Rs. {item.price * item.quantity}
                      </strong>
                    </p>

                    <button
                      className="remove"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h2>Total: Rs. {total.toLocaleString()}</h2>

              <Link to="/checkout">
                <button className="checkout">
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </>
        )}
      </div>

      <Footer />
    </>
  );
}

export default Cart;