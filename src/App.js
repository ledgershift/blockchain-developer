import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import "./styles/global.css";

const App = () => (
  <div>
    <Navbar />
    <Hero />
    <About />
    <Services />
    <Contact />
  </div>
);
export default App;