import { Link } from "react-router-dom";
import "../css/hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <h1>
         Happy Independence Day 
        </h1>

        <p>
          Celebrate Pakistan's 79th Independence with Amazing Deals!
        </p>

        <Link to="/shop">
          <button>
            Shop Now 🛍️
          </button>
        </Link>

      </div>

    </section>
  );
}

export default Hero;