import { useState } from "react";
import Products from "../components/Products";
import "../css/home.css";
 
import flag from "../images/flags.jfif";
import tshirt from "../images/tshirt.jpg";
import cap from "../images/caps.jpg";
import badge from "../images/circlebadge.jfif";
import baja from "../images/baja.webp";
import baloons from "../images/baloons.webp";
import glasses from "../images/glasses3.png";
import bracelet from "../images/bracelet.png";
import earring from "../images/earrings.png";
import band from "../images/band.webp";
import mask from "../images/mask.webp"; 
import bangle from "../images/bangles.jpg";
 
 function Category() {
     const [selectedCategory, setSelectedCategory] = useState("");

  const categories = [
    {
      name: "Flags",
      image: flag,
    },
    {
      name: "Badges",
      image: badge,
    },
    {
      name: "Balloons",
      image: baloons,
    },
    {
      name: "T-Shirts",
      image: tshirt,
    },
 
    {
      name: "Bands",
      image: band,
    },

    {
      name: "Ear Rings",
      image: earring,
    },
    {
      name: "Caps",
      image: cap,
    },
    {
      name: "Bracelets",
      image: bracelet,
    },

    {
      name: "Baja",
      image: baja,
    },
    {
      name: "Glasses",
      image: glasses,
    },
    {
      name: "Masks",
      image: mask,
    },
     {
      name: "Churiyan",
      image: bangle,
    }
  ];

  return (
    <>

     {/* Categories */}
      <section className="categories">
        <h2>Shop by Category</h2>

       <div className="category-grid">
  {categories.map((category) => (
    <div
      key={category.name}
      className={`category-item ${
        selectedCategory === category.name ? "active" : ""
      }`}
    >
      <div
        className="category-card"
        onClick={() =>
          setSelectedCategory(
            selectedCategory === category.name ? "" : category.name
          )
        }
      >
        <img src={category.image} alt={category.name} />
        <h3>{category.name}</h3>
      </div>

      {selectedCategory === category.name && (
        <Products category={category.name} />
      )}
    </div>
  ))}
</div>
      </section>
      </>
  );}
  export default Category;
