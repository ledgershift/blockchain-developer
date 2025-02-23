// import React from "react";
import "../styles/BlockchainServices.css";
import ethereumLogo from "../images/ethereum-eth-logo.png";
import hyperledgerLogo from "../images/hlf.png";
import cordaLogo from "../images/r3_img.png";
import React, { useState } from "react";
const services = [
  {
    name: "Ethereum",
    logo: ethereumLogo,
    description:
      "Ethereum is a decentralized platform for smart contracts and DApps, offering scalability and security.",
  },
  {
    name: "Hyperledger Fabric",
    logo: hyperledgerLogo,
    description:
      "Hyperledger Fabric is an enterprise-grade, permissioned blockchain framework tailored for businesses.",
  },
  {
    name: "R3 Corda",
    logo: cordaLogo,
    description:
      "Corda is designed for secure and efficient business transactions, ensuring privacy and trust.",
  },
];

const BlockchainServices = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="blockchain-services">
      <h2>Our Blockchain Services</h2>
      <div className="blockchain-container">
        {services.map((service, index) => (
          <div
            key={index}
            className={`blockchain-card ${hoveredIndex === index ? "hovered" : ""}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img src={service.logo} alt={service.name} className="blockchain-logo" />
            <h3>{service.name}</h3>
            <p className="blockchain-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlockchainServices;