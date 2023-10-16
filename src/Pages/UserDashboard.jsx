import React from "react";
import Card from "../Components/Card"
const UserDashboard = () => {
  const cardData = [
    {
      imageUrl: "https://via.placeholder.com/300x200",
      title: "Dynamic Card Title",
      description: "This card was populated with dynamic data.",
    },
    {
      imageUrl: "https://via.placeholder.com/300x200",
      title: "Dynamic Card Title",
      description: "This card was populated with dynamic data.",
    },
    {
      imageUrl: "https://via.placeholder.com/300x200",
      title: "Dynamic Card Title",
      description: "This card was populated with dynamic data.",
    },
    {
      imageUrl: "https://via.placeholder.com/300x200",
      title: "Dynamic Card Title",
      description: "This card was populated with dynamic data.",
    },
  ];
  return (
    <div className="min-h-screen flex items-center gap-5 justify-center">
      {cardData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default UserDashboard;
