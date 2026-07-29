import { Link } from "react-router-dom";
import { FaShoppingCart, FaHome, FaStore, FaPhoneAlt } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import "../css/navbar.css";
import logo from "../../public/favicon.jpg";

function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="navbar">
      <div className="logo" className="logo-link">
<Link to="/"><img src={logo} alt="14th August Store Logo" className="logo-img" /></Link>
        <h2>14th August Store</h2>
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/">
            <FaHome /> Home
          </Link>
        </li>

        <li>
          <Link to="/shop">
            <FaStore /> Shop
          </Link>
        </li>

        <li>
          <Link to="/cart" className="cart-link">
            <FaShoppingCart />
            Cart
            <span className="cart-count">{cart.length}</span>
          </Link>
        </li>

        <li>
          <Link to="/contact">
            <FaPhoneAlt /> Contact
          </Link>
        </li>
      </ul>

<Link to="/shop">
      <button className="sale-btn">
        Shop Now 🛍️
      </button>
      </Link>
    </nav>
  );
}

export default Navbar;