import React, { useState } from "react";
import "../Styles/PackagePrice.css";

const packageData = [
  {
    type: "Standard",
    color: "#3da9fc",
    prices: [
      { nights: "3 Nights", single: "₹42,000", double: "₹63,000" },
      { nights: "5 Nights", single: "₹70,000", double: "₹1,05,000" },
      { nights: "7 Nights", single: "₹98,000", double: "₹1,47,000" },
      { nights: "14 Nights", single: "₹1,96,000", double: "₹2,94,000" },
      { nights: "21 Nights", single: "₹2,94,000", double: "₹4,41,000" },
      { nights: "Extra Nights", single: "₹14,000", double: "₹21,000" },
    ],
    inclusions: [
      "Breakfast included",
      "Daily Yoga Session",
      "Access to Spa",
      "Welcome Drink",
    ],
  },
  {
    type: "Deluxe",
    color: "#ff9f1c",
    prices: [
      { nights: "3 Nights", single: "₹54,000", double: "₹78,000" },
      { nights: "5 Nights", single: "₹90,000", double: "₹1,30,000" },
      { nights: "7 Nights", single: "₹1,26,000", double: "₹1,82,000" },
      { nights: "14 Nights", single: "₹2,52,000", double: "₹3,64,000" },
      { nights: "21 Nights", single: "₹3,78,000", double: "₹5,46,000" },
      { nights: "Extra Nights", single: "₹18,000", double: "₹26,000" },
    ],
    inclusions: [
      "Breakfast included",
      "Daily Yoga & Meditation",
      "Private Spa Session",
      "Welcome Drink",
    ],
  },
  {
    type: "Executive",
    color: "#ff5d8f",
    prices: [
      { nights: "3 Nights", single: "₹60,000", double: "₹84,000" },
      { nights: "5 Nights", single: "₹1,00,000", double: "₹1,40,000" },
      { nights: "7 Nights", single: "₹1,40,000", double: "₹1,96,000" },
      { nights: "14 Nights", single: "₹2,80,000", double: "₹3,92,000" },
      { nights: "21 Nights", single: "₹4,20,000", double: "₹5,88,000" },
      { nights: "Extra Nights", single: "₹20,000", double: "₹28,000" },
    ],
    inclusions: [
      "All Deluxe inclusions",
      "Private Room Yoga",
      "Special Diet Plan",
      "Evening Entertainment",
    ],
  },
  {
    type: "Luxury",
    color: "#08d9d6",
    prices: [
      { nights: "3 Nights", single: "₹66,000", double: "₹96,000" },
      { nights: "5 Nights", single: "₹1,10,000", double: "₹1,60,000" },
      { nights: "7 Nights", single: "₹1,54,000", double: "₹2,24,000" },
      { nights: "14 Nights", single: "₹3,08,000", double: "₹4,48,000" },
      { nights: "21 Nights", single: "₹4,62,000", double: "₹6,72,000" },
      { nights: "Extra Nights", single: "₹22,000", double: "₹32,000" },
    ],
    inclusions: [
      "All Executive inclusions",
      "Private Butler Service",
      "Luxury Amenities",
    ],
  },
  {
    type: "2 BHK Villa",
    color: "#ffc93c",
    prices: [
      { nights: "3 Nights", single: "₹1,08,000", double: "₹1,50,000" },
      { nights: "5 Nights", single: "₹1,80,000", double: "₹2,50,000" },
      { nights: "7 Nights", single: "₹2,45,000", double: "₹3,50,000" },
      { nights: "14 Nights", single: "₹4,90,000", double: "₹7,00,000" },
      { nights: "21 Nights", single: "₹7,35,000", double: "₹10,50,000" },
      { nights: "Extra Nights", single: "₹35,000", double: "₹50,000" },
    ],
    inclusions: [
      "All Luxury inclusions",
      "Private Pool Access",
      "Dedicated Chef",
    ],
  },
];

const PackagePrice = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleInclusions = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="package-container">
      <h2 className="package-title">Package Price</h2>
      <div className="package-table">
        <div className="tariff-column">
          <div className="tariff-header">Room Type</div>
          {packageData[0].prices.map((price, idx) => (
            <div key={idx} className="tariff-row">
              {price.nights}
            </div>
          ))}
        </div>

        {packageData.map((pkg, index) => (
          <div key={index} className="package-column" style={{ backgroundColor: pkg.color }}>
            <div className="package-header">{pkg.type}</div>
            {pkg.prices.map((price, i) => (
              <div key={i} className="package-row">
                <span>{price.single}</span> <span>{price.double}</span>
              </div>
            ))}
            <div className="inclusions-btn" onClick={() => toggleInclusions(index)}>
              Inclusions {openIndex === index ? "▲" : "▼"}
            </div>
            {openIndex === index && (
              <ul className="inclusions-list">
                {pkg.inclusions.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackagePrice;
