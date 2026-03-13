import { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import { useCart } from "../context/CartContext";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState("grid");
  const [search, setSearch] = useState("");
  const {cart, addToCart} = useCart();

const filteredProducts = products.filter((p) =>
  p.title.toLowerCase().includes(search.toLowerCase())
);

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

      {/*Search Bar*/}
      <div style={{marginBottom:"15px"}}>
        <SearchBar search={search}setSearch={setSearch}/>
      </div>

      {/*View Buttons*/}
      <div>
        <button onClick={()=> setView("grid")}>
          Grid View
        </button>

        <button
         onClick={()=> setView("list")}
         style={{marginLeft:"10px"}}
        >
          List View
        </button>
      </div>
      
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
