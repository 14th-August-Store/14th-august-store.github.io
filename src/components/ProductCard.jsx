import "../css/product.css";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";


function ProductCard({ product }) {

  const { addToCart } = useCart();


  return (

    <div className="product-card">

      <img 
        src={product.image}
        alt={product.name}
      />


      <h3>
        {product.name}
      </h3>


      <p>
        Rs. {product.price}
      </p>


<button
  onClick={() => {

    addToCart(product);

    alert(`${product.name} added to cart 🛒`);

  }}
>
  Add to Cart
</button>


      <Link to={`/product/${product.id}`}>
        <button className="details-btn">
          View Details
        </button>
      </Link>


    </div>

  );

}


export default ProductCard;