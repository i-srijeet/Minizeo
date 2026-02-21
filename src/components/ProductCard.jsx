import { Link } from "react-router-dom";

export default function ProductCard({ product, view }) {
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