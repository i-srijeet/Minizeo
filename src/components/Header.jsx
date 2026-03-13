import { useCart } from "../context/CartContext";
import {Link} from "react-router-dom";
import SearchBar from"./SearchBar";


export default function Header() {
  const { cart } = useCart();

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 25px",
        borderBottom: "1px solid #ddd",
        position: "sticky",
        top: 0,
        background: "#faf7f2",
        zIndex: 100
      }}
    >
      <Link to="/" style={{ textDecoration: "none", color: "black"}}>
       <h2 style={{color:"black", margin: 0 }}>🛍️ My Store</h2>
      </Link>
      {/* CART ICON */}
      <div style={{ position: "relative", fontSize: "24px", cursor: "pointer" }}>
        <Link to="/cart" style={{ textDecoration: "none", color: "black" }}>
        🛒
        </Link>
        {cart.length > 0 && (
          <span
            style={{
              position: "absolute",
              top: "-8px",
              right: "-10px",
              background: "red",
              color: "#fff",
              borderRadius: "50%",
              padding: "2px 6px",
              fontSize: "12px"
            }}

          >
            {cart.length}
          </span>
        )}
      </div>
    </header>
  );
}