import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import BlockchainServices from "./components/BlockchainServices";
import Contact from "./components/Contact";
import "./styles/global.css";
import CaseStudies from "./components/CaseStudies"; 

const App = () => (
  <div>
    <Navbar />
    <Hero />
    <About />
    <Services />
    <BlockchainServices />
    <CaseStudies />
    <Contact />
  </div>
);

export default App;