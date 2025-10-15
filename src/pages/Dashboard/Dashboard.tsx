import React from "react";
import { FaUser, FaShoppingCart, FaDollarSign, FaBoxOpen, FaUsers } from "react-icons/fa";
import "./Dashboard.css"

export default function Dashboard() {
  
  const cards = [
    { title: "Users", value: 120, icon: <FaUser size={30} />, color: "bg-blue-500" },
    { title: "Orders", value: 75, icon: <FaShoppingCart size={30} />, color: "bg-green-500" },
    { title: "Revenue", value: "$4,500", icon: <FaDollarSign size={30} />, color: "bg-yellow-500" },
    { title: "Products", value: 50, icon: <FaBoxOpen size={30} />, color: "bg-purple-500" },
    { title: "Visitors", value: 300, icon: <FaUsers size={30} />, color: "bg-pink-500" },
  ];

  const handleClick = (title: string) => {
    alert(`Clicked on ${title} card!`);
  };
  
  return (
    <>
    <div className="p-6 bg-gray-100 min-h-screen main-dashboard">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            onClick={() => handleClick(card.title)}
            className={`cursor-pointer ${card.color} text-white p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl`}
          >
            <div className="flex items-center mb-4">
              <div className="mr-4">{card.icon}</div>
              <h2 className="text-xl font-semibold">{card.title}</h2>
            </div>
            <p className="text-3xl font-bold">{card.value}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
