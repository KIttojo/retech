import { useState, useEffect } from "react";
import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Admin from "./pages/Admin";
import Cart from "./pages/Cart";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('card'));
    if (!data) {
      console.log('settiing');
      localStorage.setItem('card', JSON.stringify([]));
    }
  }, []);

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem('logged'));
    if (storage == true) setIsSignedIn(true);
    console.log('LOG CHANGED');
  }, [isSignedIn]);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login setIsSignedIn={setIsSignedIn}/>} />

        {isSignedIn && <Route path="/admin" element={<Admin setIsSignedIn={setIsSignedIn}/>} />}
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
