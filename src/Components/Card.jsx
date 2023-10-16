import React from 'react';

const Card = (props) => {
  const { imageUrl, title, description } = props;

  return (
    <div className="max-w-sm mx-auto bg-opacity-30  bg-white shadow-lg rounded-lg overflow-hidden">
      <img className="w-full h-40 object-cover" src={imageUrl} alt="Card Image" />
      <div className="py-4 px-6">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
      
    </div>
  );
};

export default Card;
