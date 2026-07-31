import { useEffect, useState } from "react";
import "../../css/adminOrders.css";

const API_URL = "https://server-production-3d329.up.railway.app";

function AdminOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    try {
      const response = await fetch(`${API_URL}/api/orders`);
      const data = await response.json();

      if (response.ok && data.success) {
        setOrders(data.orders);
      } else {
        alert(data.message || "Failed to load orders.");
      }
    } catch (error) {
      console.error(error);
      alert("Unable to connect to server.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const updateStatus = async (id, status) => {
    try {
      const response = await fetch(
        `${API_URL}/api/orders/${id}/status`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status }),
        }
      );

      const data = await response.json();

      if (data.success) {
        setOrders((prev) =>
          prev.map((order) =>
            order._id === id
              ? { ...order, orderStatus: status }
              : order
          )
        );
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Failed to update status.");
    }
  };

  const deleteOrder = async (id) => {
    if (!window.confirm("Delete this order?")) return;

    try {
      const response = await fetch(
        `${API_URL}/api/orders/${id}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      if (data.success) {
        setOrders((prev) =>
          prev.filter((order) => order._id !== id)
        );
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Delete failed.");
    }
  };

  if (loading) {
    return (
      <div className="admin-orders">
        <h2>Loading Orders...</h2>
      </div>
    );
  }

  return (
    <div className="admin-orders">
      <h1>Customer Orders</h1>

      {orders.length === 0 ? (
        <h2>No Orders Found</h2>
      ) : (
        orders.map((order) => (
          <div className="order-card" key={order._id}>
            <h2>Order #{order._id}</h2>

            <p>
              <strong>Date:</strong>{" "}
              {new Date(order.createdAt).toLocaleString()}
            </p>

            <hr />

            <h3>Customer Information</h3>

            <p>
              <strong>Name:</strong>{" "}
              {order.customer?.name}
            </p>

            <p>
              <strong>Phone:</strong>{" "}
              {order.customer?.phone}
            </p>

            <p>
              <strong>Email:</strong>{" "}
              {order.customer?.email || "N/A"}
            </p>

            <p>
              <strong>City:</strong>{" "}
              {order.customer?.city}
            </p>

            <p>
              <strong>Address:</strong>{" "}
              {order.customer?.address}
            </p>
<a
  href={`https://www.google.com/maps?q=${order.customer.latitude},${order.customer.longitude}`}
  target="_blank"
  rel="noreferrer"
>
  📍 Open Customer Location
</a>
 <hr />



            <h3>Delivery Information</h3>

<p>
  <strong>Delivery Method:</strong>{" "}
  {order.deliveryType || "Home Delivery"}
</p>

{order.deliveryType === "Shop Pickup" && (
  <div className="pickup-box">
    <p>
      <strong>Customer will collect from shop.</strong>
    </p>

    <p>
      Please confirm order before pickup.
    </p>
  </div>
)}

            
            <hr />

            <h3>Ordered Products</h3>

            {order.items.map((item, index) => (
              <div key={index} className="product-item">
                <p>
                  <strong>{item.name}</strong>
                </p>

                <p>Price: Rs. {item.price}</p>

                <p>Quantity: {item.quantity}</p>

                <p>
                  Subtotal: Rs.{" "}
                  {(item.price * item.quantity).toLocaleString()}
                </p>

                <hr />
              </div>
            ))}

            <h2>
              Total Amount: Rs.{" "}
              {order.totalAmount?.toLocaleString()}
            </h2>

            <hr />

            <h3>Payment Details</h3>

            <p>
              <strong>Method:</strong>{" "}
              {order.paymentMethod}
            </p>

            {order.paymentMethod === "EasyPaisa" && (
              <>
                <p>
                  <strong>Transaction ID:</strong>{" "}
                  {order.transactionId || "N/A"}
                </p>

                {order.paymentScreenshot && (
                  <div className="payment-proof">
                    <p>
                      <strong>Payment Screenshot</strong>
                    </p>

                    {order.paymentScreenshot && (
  <img
    src={`https://server-production-3d329.up.railway.app/uploads/${order.paymentScreenshot}`}
    alt="Payment Screenshot"
    width="250"
  />


)}
                  </div>
                )}
              </>
            )}

            <hr />

            <p>
              <strong>Status:</strong>{" "}
              {order.orderStatus}
            </p>

            <select
              value={order.orderStatus}
              onChange={(e) =>
                updateStatus(
                  order._id,
                  e.target.value
                )
              }
            >
              <option value="Pending">
                Pending
              </option>

              <option value="Confirmed">
                Confirmed
              </option>

              <option value="Packed">
                Packed
              </option>

              <option value="Shipped">
                Shipped
              </option>

              <option value="Delivered">
                Delivered
              </option>

              <option value="Cancelled">
                Cancelled
              </option>
            </select>

            <br />
            <br />

            <button
              className="delete-btn"
              onClick={() =>
                deleteOrder(order._id)
              }
            >
              Delete Order
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default AdminOrders;
