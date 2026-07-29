import { useParams } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/CartContext";
import "../css/productDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h1>Product Not Found</h1>;
  }

  const handleAddToCart = () => {
    addToCart(product);
    alert(`${product.name} has been added to your cart!`);
  };

  return (
    <div className="details">
      <img
        src={product.image}
        alt={product.name}
      />

      <div className="info">
        <h1>{product.name}</h1>

        <h2>Rs. {product.price}</h2>

        <p>
          Premium quality Independence Day product.
          <br />
          Perfect for celebrating 14 August with pride 🇵🇰
        </p>

        <button onClick={handleAddToCart}>
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;