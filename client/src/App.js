import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import Reset from "./pages/Reset";

function App() {
  return (
    <section className="App">
      <Routes>
        {/* home or root pages */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        {/* cart based pages */}
        <Route path="/cart" element={<Cart />} />

        {/* authentications pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/register" element={<Register />} />

        {/* not found page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
}

export default App;
