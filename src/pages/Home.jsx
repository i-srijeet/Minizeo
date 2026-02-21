import { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState("grid");

  useEffect(() => {
    getProducts()
      .then(data => setProducts(data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <h2>Loading...</h2>;

 return (
  <div className="container" style={{ padding: "20px" }}>

    {/* HEADER */}
    <div style={{ textAlign: "center", marginBottom: "30px" }}>
      <h1 style={{color:"black", marginBottom: "15px" }}>PRODUCTS</h1>

      <button onClick={() => setView("grid")}>
        Grid View
      </button>

      <button
        onClick={() => setView("list")}
        style={{ marginLeft: "10px" }}
      >
        List View
      </button>
    </div>

    {/* PRODUCT LAYOUT */}
    <div className={view === "grid" ? "grid" : "list"}>
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          view={view}
        />
      ))}
    </div>

  </div>
);
}