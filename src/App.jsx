import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import TracksLanding from "./components/TracksLanding/TracksLanding";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tracks" element={<TracksLanding />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
