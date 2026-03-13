import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../services/api";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductById(id)
      .then(data => setProduct(data))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <h2>Loading...</h2>;
  if (!product) return <h2>Product not found</h2>;

  return (
    <div style={{color:"#000", padding: "20px" }}>
      <img src={product.thumbnail} alt={product.title} width="200" />
      <h1>{product.title}</h1>
      <h3>${product.price}</h3>
      <p><strong>Stock:</strong> {product.stock}</p>
      <p>{product.description}</p>
    </div>
  );
}