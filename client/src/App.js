import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <section className="App">
      <Routes>
        {/* home or root page */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        {/* not found page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
}

export default App;
