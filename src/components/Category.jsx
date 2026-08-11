import { useState } from "react";
import Products from "../components/Products";
import "../css/home.css";
 
import flag from "../images/flags.jfif";
import cap from "../images/caps.jpg";
import badge from "../images/circlebadge.jfif";
import horn from "../images/horn.png";
import baloons from "../images/baloons.webp";
import band from "../images/band.webp";
import wristlet from "../images/wristlet.jpeg";
import wristband from "../images/wristband.jpeg";
import mask from "../images/mask.webp"; 
import headband from "../images/headband.jpeg";
import top from "../images/tops.jpeg";
import bangle from "../images/bangles.png";
import nail from "../images/nail.jpeg";
import ring from "../images/ring.jpeg";
import clip from "../images/clip.jfif";
import poni from "../images/hairtie.jpeg";
import sticker from "../images/sticker.jpeg";
import glitter from "../images/sheets/glitterbottle.jpg";

 
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
      name: "Wrist Bands",
      image: band,
    },

       {
      name: "Wristlet",
      image: wristlet,
    },
          {
      name: "Flag Band and Sleeves",
      image: wristband,
    },

    {
      name: "Horn",
      image: horn,
    },
   
    {
      name: "Masks",
      image: mask,
    },
    {
      name: "Balloons",
      image: baloons,
    },
   {
      name: "Head Bands",
      image: headband,
    },
      {
      name: "Ear Pins",
      image: top,
    },
     {
      name: "Bangles",
      image: bangle,
    },

           {
      name: "Nails And Nail Polish",
      image: nail,
    },
           {
      name: "Rings And Catcher",
      image: ring,
    },
        {
      name: "Clips",
      image: clip,
    },
     {
      name: "Hair Tie",
      image: poni,
    },
       {
      name: "Caps",
      image: cap,
    },
    {
      name: "Stickers",
      image: sticker,
    },

    {
      name: "Clay, Glitters And Sheets",
      image: glitter,
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
