import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./styles/index.css";
import Navigation from "./components/Navigation";
import AddVessel from "./pages/AddVessel";

function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/api/boats" element={<Home />} />
        <Route path="/add-vessel" element={<AddVessel />} />
      </Routes>
    </>
  );
}

export default App;
