import "./App.css";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About.js";
import Location from "./Pages/Location/Location.js";
import Franchise from "./Pages/Franchise/Franchise.js";
import Loyalty from "./Pages/Loyalty/Loyalty.js";
import Careers from "./Pages/Careers/Careers.js";
import Navbar from "././Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/location" element={<Location />} />
          <Route path="/franchise" element={<Franchise />} />
          <Route path="/loyalty" element={<Loyalty />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
