import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function OrderSuccess() {
  return (
<>
<Navbar/>
    <div style={{ textAlign: "center", marginTop: "100px", marginBottom:"100px", }}>
      <h1>🎉 Thank You!</h1>
      <h3>Your order has been placed successfully.</h3>
      <p>We will contact you soon.</p>
    </div>
<Footer/>
</>
  );
}

export default OrderSuccess;