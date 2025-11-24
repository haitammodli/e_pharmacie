import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{padding: "10px", background: "#1e90ff", color: "white"}}>
      <Link to="/" style={{marginRight: 15, color: "white"}}>Home</Link>
      <Link to="/products" style={{marginRight: 15, color: "white"}}>Products</Link>
      <Link to="/order" style={{marginRight: 15, color: "white"}}>Create Order</Link>
      <Link to="/delivery" style={{color: "white"}}>Delivery</Link>
    </nav>
  );
}
