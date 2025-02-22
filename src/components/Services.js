// Services.js
import React from 'react';
import '../styles/services.css';
import { FaEthereum, FaLaptopCode, FaCubes, FaShieldAlt } from 'react-icons/fa';

const Services = () => {
  return (
    <section className="services" id="services">
      <h2 className="services-title">My Services</h2>
      <div className="services-container">
        <div className="service-card">
          <FaEthereum className="service-icon" />
          <h3 className="service-title">Smart Contract Development</h3>
          <p className="service-description">
            Secure and efficient smart contract development on Ethereum and other blockchain platforms.
          </p>
        </div>
        <div className="service-card">
          <FaLaptopCode className="service-icon" />
          <h3 className="service-title">DApp Development</h3>
          <p className="service-description">
            Custom decentralized applications (DApps) using Solidity, Web3.js, and modern frameworks.
          </p>
        </div>
        <div className="service-card">
          <FaCubes className="service-icon" />
          <h3 className="service-title">Blockchain Integration</h3>
          <p className="service-description">
            Integrate blockchain technology into existing systems for security, transparency, and efficiency.
          </p>
        </div>
        <div className="service-card">
          <FaShieldAlt className="service-icon" />
          <h3 className="service-title">Blockchain Security Audit</h3>
          <p className="service-description">
            Ensure the security of your blockchain applications with professional security audits and assessments.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;