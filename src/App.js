import { useEffect } from "react";
import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Admin from "./pages/Admin";
import Cart from "./pages/Cart";

function App() {
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('card'));
    if (!data) {
      console.log('settiing');
      localStorage.setItem('card', JSON.stringify([]));
    }
  }, []);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
