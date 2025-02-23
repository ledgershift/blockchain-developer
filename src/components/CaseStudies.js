import React, { useState } from "react";
import "../styles/CaseStudies.css";

const caseStudies = [
  {
    title: "Supply Chain Transparency",
    industry: "Logistics",
    description:
      "Hyperledger Fabric ensures real-time tracking of goods, reducing fraud and improving efficiency.",
    icon: "📦",
  },
  {
    title: "Secure Healthcare Records",
    industry: "Healthcare",
    description:
      "Blockchain encrypts patient records, ensuring privacy while allowing authorized access.",
    icon: "🏥",
  },
  {
    title: "Cross-Border Payments",
    industry: "Finance",
    description:
      "Ethereum smart contracts automate international transactions, reducing delays and costs.",
    icon: "💰",
  },
  {
    title: "NFT & Digital Ownership",
    industry: "Entertainment",
    description:
      "Blockchain verifies ownership of digital assets, ensuring transparency in NFT marketplaces.",
    icon: "🎨",
  },
  {
    title: "Decentralized Identity",
    industry: "Cybersecurity",
    description:
      "Self-sovereign identity (SSI) solutions allow users to control their personal data securely.",
    icon: "🔐",
  },
  {
    title: "Blockchain Voting System",
    industry: "Governance",
    description:
      "A decentralized voting system enhances security and eliminates fraud in elections.",
    icon: "🗳️",
  },
];

const CaseStudies = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="case-studies">
      <h2>Blockchain Use Cases</h2>
      <div className="case-container">
        {caseStudies.map((caseStudy, index) => (
          <div
            key={index}
            className={`case-card ${hoveredIndex === index ? "hovered" : ""}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <span className="case-icon">{caseStudy.icon}</span>
            <h3>{caseStudy.title}</h3>
            <h4>{caseStudy.industry}</h4>
            <p className="case-description">{caseStudy.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;