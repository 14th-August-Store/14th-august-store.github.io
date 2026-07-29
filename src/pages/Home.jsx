import { useState } from "react";
import "../css/home.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Countdown from "../components/Countdown";
import Products from "../components/Products";
import Category from "../components/Category";
import Footer from "../components/Footer";


function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <Countdown />

      <Category/>
    
      <section className="offer">
        <h2>🇵🇰 14 August Mega Sale</h2>
        <p>
          Enjoy up to <strong>70% OFF</strong> on selected products.
        </p>
        <h3>
          Use Coupon: <span>AZADI14</span>
        </h3>
      </section>

      <section className="why-us">
        <h2>Why Shop With Us?</h2>

        <div className="features">
          <div className="feature">
            <h3>💳 Secure Payment</h3>
            <p>Safe and trusted payment methods.</p>
          </div>

          <div className="feature">
            <h3>⭐ Quality Products</h3>
            <p>Premium products at affordable prices.</p>
          </div>

          <div className="feature">
            <h3>🚚 Fast Delivery</h3>
            <p>Quick and reliable shipping to your doorstep.</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;