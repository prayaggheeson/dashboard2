import React from "react";

const SmallCards = ({ title, desc }) => {
  return (
    <div className="bg-white bg-opacity-30 p-4 rounded-lg  shadow-md">
      <h2 className="text-lg font-medium">{title}</h2>
      <p className="mt-2 text-gray-600">{desc}</p>
    </div>
  );
};

export default SmallCards;