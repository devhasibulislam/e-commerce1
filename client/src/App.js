import { Route, Routes } from "react-router-dom";
import "./App.css";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <section className="App">
      <Routes>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
}

export default App;
