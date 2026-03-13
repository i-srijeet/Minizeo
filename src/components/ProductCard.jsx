import { Link } from "react-router-dom";
import {useCart} from "../context/CartContext";

export default function ProductCard({ product, view }) {
  const{addToCart}=useCart();
  return (
  <div className="product-card-wrapper">

    {/* 👉 CLICKABLE CARD */}
    <Link
      to={`/products/${product.id}`}
      className="product-card"
      style={{
        display: view === "list" ? "flex" : "block",
        alignItems: "center",
        gap: "15px",
        border: "1px solid #000",
        borderRadius: "10px",
        padding: "10px",
        marginBottom: "10px",
        textDecoration: "none",
        color: "black"
      }}
    >
      <div className="card-image">
        <img
          src={product.thumbnail}
          alt={product.title}
          style={{ width: view === "list" ? "120px" : "100%" }}
        />
      </div>

      <div>
        <h3>{product.title}</h3>
        <p>${product.price}</p>
      </div>
    </Link>

    {/* 👉 ADD TO CART BUTTON */}
    <button
      onClick={() => addToCart(product)}
      style={{
        marginTop: "8px",
        padding: "6px 12px",
        cursor: "pointer",
        borderRadius: "6px",
        border: "none",
        background: "black",
        color: "white"
      }}
    >
      Add to Cart
    </button>

  </div>
);
  return (
    <Link
      to={`/products/${product.id}`}className="product-card"
      style={{
        display: view === "list" ? "flex" : "block",
        alignItems: "center",
        gap: "15px",
        border: "1px solid #000",
        borderRadius: "10px",
        padding: "10px",
        marginBottom: "10px",
        textDecoration: "none",
        color: "black"
      }}
    >
    <div className="card-image"></div>
      <img
        src={product.thumbnail}
        alt={product.title}
        style={{
          width: view === "list" ? "120px" : "100%",
          height: view === "list" ? "120px" : "200px",
          objectFit: "contain"
        }}
      />

      <div>
        <h3 style={{ color: "black" }}>{product.title}</h3>
        
        <p>${product.price}</p>
      </div>
    </Link>
  );
}
