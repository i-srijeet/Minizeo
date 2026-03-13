import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Header from "./components/Header";
import Cart from "./pages/Cart";

function App() {
  return (
    <BrowserRouter>
     {/* HEADER HERE*/}
     <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart"element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;