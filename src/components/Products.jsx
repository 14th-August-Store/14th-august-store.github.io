import products from "../data/products";
import ProductCard from "./ProductCard";
import "../css/product.css";

function Products({ category }) {
  const filteredProducts = category
    ? products.filter((product) => product.category === category)
    : products;

  return (
    <div className="products-grid">
      {filteredProducts.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
}

export default Products;