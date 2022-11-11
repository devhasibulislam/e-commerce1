import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Reset from "./pages/Reset";

function App() {
  return (
    <section className="App">
      <Routes>
        {/* home or root pages */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        {/* authentications pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/reset" element={<Reset />} />

        {/* not found page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
}

export default App;
