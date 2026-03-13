import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  if (cart.length === 0) {
    return (
      <div style={{ padding: "20px" }}>
        <h2 style={{color:"black"}}>Your Cart is Empty<br /> 🙂</h2>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{color:"black"}}>Your Cart</h2>

      {cart.map((item) => (
        <div
          key={item.id}
          style={{
            color: "black",
            display: "flex",
            alignItems: "center",
            gap: "20px",
            border: "1px solid #ddd",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "8px",
          }}
        >
          <img src={item.thumbnail} alt={item.title} width="80" />

          <div style={{ flex: 1 }}>
            <h4 style={{color:"Black",margin:0}}>
                {item.title}
            </h4>
            <p>${item.price}</p>
          </div>

          <button
            onClick={() => removeFromCart(item.id)}
            style={{
              background: "black",
              color: "white",
              border: "none",
              padding: "6px 10px",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}