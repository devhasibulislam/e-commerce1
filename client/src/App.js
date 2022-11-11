import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <section className="App">
      <Routes>
        {/* home or root pages */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        {/* authentications pages */}
        <Route path="/login" element={<Login />} />

        {/* not found page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
}

export default App;
