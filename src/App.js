import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import Portfolio from "./pages/Portfolio";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/Home" element={<Home />}></Route>
        </Routes>
        <Routes>
          <Route path="/AboutUs" element={<AboutUs />}></Route>
        </Routes>
        <Routes>
          <Route path="/Services" element={<Services />}></Route>
        </Routes>
        <Routes>
          <Route path="/Pricing" element={<Pricing />}></Route>
        </Routes>
        <Routes>
          <Route path="/Portfolio" element={<Portfolio />}></Route>
        </Routes>
        <Routes>
          <Route path="/ContactUs" element={<ContactUs />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
