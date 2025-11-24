import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import CreateOrder from "./pages/CreateOrder";
import Delivery from "./pages/Delivery";
import './styles.css';

export default function App() {
  return (
    <BrowserRouter>
  <Navbar />

  <div className="content">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/order" element={<CreateOrder />} />
      <Route path="/delivery" element={<Delivery />} />
    </Routes>
  </div>
</BrowserRouter>
  );
}
