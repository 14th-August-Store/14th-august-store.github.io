import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../css/checkout.css";

function Checkout() {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    city: "",
    address: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [transactionId, setTransactionId] = useState("");
  const [paymentScreenshot, setPaymentScreenshot] = useState(null);
  const [deliveryMethod, setDeliveryMethod] = useState("Home Delivery");
  const [loading, setLoading] = useState(false);


  const [location, setLocation] = useState({
  lat: "",
  lng: "",
});

const getLocation = () => {
  if (!navigator.geolocation) {
    alert("Geolocation is not supported.");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });

      alert("Location saved successfully!");
    },
    () => {
      alert("Unable to get your location.");
    }
  );
};


  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const formattedTotal = total.toLocaleString();

  const handleChange = (e) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value,
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();

    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    if (
      !customer.name.trim() ||
      !customer.phone.trim() ||
      !customer.city.trim() ||
      !customer.address.trim()
    ) {
      alert("Please fill all customer details.");
      return;
    }

    const phoneRegex = /^03\d{9}$/;

    if (!phoneRegex.test(customer.phone)) {
      alert("Please enter a valid Pakistani mobile number.");
      return;
    }

    if (
      paymentMethod === "EasyPaisa" &&
      (!transactionId.trim() || !paymentScreenshot)
    ) {
      alert("Please provide transaction ID and payment screenshot.");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();

      formData.append("name", customer.name);
      formData.append("phone", customer.phone);
      formData.append("city", customer.city);
      formData.append("address", customer.address);
      formData.append("paymentMethod", paymentMethod);
      formData.append("transactionId", transactionId);
      formData.append("latitude", location.lat);
formData.append("longitude", location.lng);

      const orderItems = cart.map((item) => ({
        product: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      }));

      formData.append("items", JSON.stringify(orderItems));

      if (paymentScreenshot) {
        formData.append("paymentScreenshot", paymentScreenshot);
      }

      const response = await fetch(
        "http://localhost:5000/api/orders",
        {
          method: "POST",
          body: formData,
        }
      );

      let data;

      try {
        data = await response.json();
      } catch {
        data = {
          success: false,
          message: "Invalid server response.",
        };
      }

      if (response.ok && data.success) {
        alert("🎉 Order placed successfully!");

        clearCart();

        setCustomer({
          name: "",
          phone: "",
          city: "",
          address: "",
        });

        setPaymentMethod("COD");
        setTransactionId("");
        setPaymentScreenshot(null);

        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }

        navigate("/order-success");
      } else {
        alert(data.message || "Failed to place order.");
      }
    } catch (error) {
      console.error(error);
      alert("Server Error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>

      <div className="order-summary">
        <h2>Order Summary</h2>

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cart.map((item) => (
              <div
                key={item.id}
                className="summary-item"
              >
                <p>
                  <strong>{item.name}</strong>
                </p>

                <p>Qty: {item.quantity}</p>

                <p>
                  Rs.{" "}
                  {(item.price * item.quantity).toLocaleString()}
                </p>

                <hr />
              </div>
            ))}

            <h3>Total: Rs. {formattedTotal}</h3>
          </>
        )}
      </div>

      <form
        onSubmit={handleSubmit}
        className="checkout-form"
      >
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={customer.name}
          onChange={handleChange}
          disabled={loading}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="03XXXXXXXXX"
          value={customer.phone}
          onChange={handleChange}
          disabled={loading}
          required
        />

        <input
          type="text"
          name="city"
          placeholder="City"
          value={customer.city}
          onChange={handleChange}
          disabled={loading}
          required
        />

        <textarea
          name="address"
          placeholder="Complete Address"
          value={customer.address}
          onChange={handleChange}
          disabled={loading}
          required
        />
        <button type="button" onClick={getLocation}>
  📍 Share My Location
</button>

<label>Delivery Method</label>

<select
  value={deliveryMethod}
  onChange={(e) => setDeliveryMethod(e.target.value)}
>
  <option value="Home Delivery">Home Delivery</option>
  <option value="Shop Pickup">Shop Pickup</option>
</select>

{deliveryMethod === "Shop Pickup" && (
  <div className="pickup-box">
    <h3>Collect from Our Shop</h3>

    <p><strong>Shop:</strong> Your Shop Name</p>

    <p><strong>Address:</strong> Main Bazaar, Lahore</p>

    <p><strong>Phone:</strong> 03XXXXXXXXX</p>

    <p>
      Please wait until your order is confirmed before visiting the shop.
    </p>
  </div>
)}

        <label>Payment Method</label>

        <select
          value={paymentMethod}
          onChange={(e) =>
            setPaymentMethod(e.target.value)
          }
          disabled={loading}
        >
          <option value="COD">
            Cash on Delivery
          </option>

          <option value="EasyPaisa">
            EasyPaisa
          </option>
        </select>

        {paymentMethod === "EasyPaisa" && (
          <div className="payment-box">
            <h3>EasyPaisa Payment</h3>

            <p>
              <strong>Send Payment To:</strong>
            </p>

            <h2>03XXXXXXXXX</h2>

            <p>
              <strong>Amount:</strong> Rs.{" "}
              {formattedTotal}
            </p>

            <input
              type="text"
              placeholder="Transaction ID"
              value={transactionId}
              onChange={(e) =>
                setTransactionId(e.target.value)
              }
              disabled={loading}
              required={
                paymentMethod === "EasyPaisa"
              }
            />

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={(e) =>
                setPaymentScreenshot(
                  e.target.files[0]
                )
              }
              disabled={loading}
              required={
                paymentMethod === "EasyPaisa"
              }
            />
          </div>
        )}

        <button
          type="submit"
          disabled={
            loading || cart.length === 0
          }
        >
          {loading
            ? "Placing Order..."
            : "Place Order"}
        </button>
      </form>
    </div>
  );
}

export default Checkout;