import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Footer from "./container/Footer";
import Contact from "./container/Contact";
import "./App.scss";
import About from "./container/About";
import logo from "./assets/logo.png"
import HomeMove from "./container/HomeMove";
import OfficeMove from "./container/OfficeMove";
import HomePage from "./container/Home";
import OneItem from "./container/OneItem";
import FewItem from "./container/FewItem";
import DropOff from "./container/DropOff";
import ErrorPage from "./container/ErrorPage";



const App = () => {
  return (
    <Router>     
      <nav className="app__navbar">
        <div className="app__navbar-links">
          <Link to="/" className="app__navbar-logo">
          <img src={logo} />
          </Link>
        </div>
      </nav>
      <div>
      <Routes className="app__profiles" >
      
        <Route className="app__profiles" path="/" element={<HomePage />} />
        
        <Route className="app__profiles" path="/about" element={<About />} />

        <Route className="app__profiles" path="/contact" element={<Contact />} />

        <Route className="app__profiles" path="/footer" element={<Footer />} />

        <Route path="/homemove" element={<HomeMove />} />

        <Route path="/officemove" element={<OfficeMove />} />

        <Route path="/oneitem" element={<OneItem />} />

        <Route path="/fewitem" element={<FewItem />} />

        <Route path="/dropoff" element={<DropOff />} />

        <Route path="*" element={<ErrorPage />} />
        
      </Routes>
      <Footer/>
</div>
    </Router>
  );
};

export default App;
