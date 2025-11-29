import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import CreateOrder from "./pages/CreateOrder";
import Delivery from "./pages/Delivery";
import AddProduct from "./pages/AddProduct";
import Orders from "./pages/Orders";
import './styles.css';

export default function App() {
  return (
    <BrowserRouter>
  <Navbar />

  <div className="content">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/add-order" element={<CreateOrder />} />
      <Route path="/delivery" element={<Delivery />} />
      <Route path="/add-product" element={<AddProduct />} />
      <Route path="/orders" element={<Orders />} />

    </Routes>
  </div>
</BrowserRouter>
  );
}
