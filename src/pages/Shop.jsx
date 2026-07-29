import { useState } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import products from "../data/products";
import Footer from "../components/Footer";
import "../css/shop.css";

function Shop() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
    <Navbar/>
      <div className="shop">
        <h1>🇵🇰 14 August Collection 🇵🇰</h1>
        <p className="shop-subtitle">
          Celebrate Pakistan's Independence Day with exclusive patriotic
          products.
        </p>

        <div className="shop-controls">
          <input
            type="text"
            placeholder="🔍 Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="All">All Categories</option>
            <option value="Flags">Flags</option>
            <option value="Clothing">Clothing</option>
            <option value="Accessories">Accessories</option>
            <option value="Decor">Decor</option>
          </select>
        </div>

        <p className="product-count">
          {filteredProducts.length} Product
          {filteredProducts.length !== 1 ? "s" : ""} Found
        </p>

        <div className="product-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))
          ) : (
            <div className="no-products">
              <h2>😔 No products found</h2>
              <p>Try another search or select a different category.</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Shop;