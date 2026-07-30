import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";
import AddProduct from "./pages/AddProduct";
import OrderSuccess  from "./pages/OrderSuccess";
import AdminOrders from "./pages/admin/AdminOrders";


function App() {
  return (
    <HashRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/shop" element={<Shop />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/product/:id" element={<ProductDetails />}/>
        
        <Route path="/checkout" element={<Checkout />}/>
        
        <Route path="/add-product" element={<AddProduct />} />

        <Route path="/order-success" element={<OrderSuccess />} />

      <Route path="/admin/orders" element={<AdminOrders />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
