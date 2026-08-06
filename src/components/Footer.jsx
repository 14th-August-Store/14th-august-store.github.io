import { Link } from "react-router-dom";
import { FaShoppingCart, FaHome, FaStore, FaPhoneAlt,FaMapMarkerAlt,FaEnvelope} from "react-icons/fa";
import "../css/footer.css";

function Footer() {

  return (

    <footer className="footer">

      <div className="footer-container">


        <div className="footer-box">

          <h2>
            14th August Store
          </h2>

          <p>
            Celebrate Pakistan's Independence with
            quality products and special offers.
          </p>
<Link to="/shop">
      <button className="sale-btn">
        Shop Now 🛍️
      </button>
      </Link>
        </div>



        <div className="footer-box">

          <h3>
            Quick Links
          </h3>


          <Link to="/">
            <FaHome /> Home
          </Link>


          <Link to="/shop">
           <FaStore /> Shop
          </Link>


          <Link to="/cart">
           <FaShoppingCart /> Cart
          </Link>


          <Link to="/contact">
           <FaPhoneAlt /> Contact
          </Link>


        </div>




        <div className="footer-box">

          <h3>
            Contact
          </h3>

         
            <FaMapMarkerAlt /> QAMAR BOOK POINT
          Shop 12, Al-Hamra Avenue Opp.Bara Market Sector 5K, North Karachi.
          

          <a href="tel:+923312465075"><FaPhoneAlt />    +92 331 2465075</a>

          
            <a href="mailto:rizwanchandna6@gmail.com"><FaEnvelope />   rizwanchandna6@gmail.com</a>
          

        </div>


      </div>



      <div className="footer-bottom">

        © 2026 14th August Store

      </div>


    </footer>

  );

}


export default Footer;
