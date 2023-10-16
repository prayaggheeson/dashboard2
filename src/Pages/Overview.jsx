import React from "react";
import Card from "../Components/Card";
import SmallCards from "../Components/SmallCards";
import Chart from "../Components/Chart";

const Overview = () => {
  const cardData = [
    {
      imageUrl: "https://via.placeholder.com/300x200",
      title: "Stakes",
      description: "Stake Tokens and receive rewards",
    },
    {
      imageUrl: "https://via.placeholder.com/300x200",
      title: "Rewards",
      description: "Claim your rewards in BS token",
    },
    {
      imageUrl: "https://via.placeholder.com/300x200",
      title: "Total Stake",
      description: "Total Amount of Contracts Staked",
    },
  ];
  const cards = [
    { title: "Card 1", desc: "description of the card" },
    { title: "Card 2", desc: "description of the card" },
    { title: "Card 3", desc: "description of the card" },
    
  ];
  return (
    <>
      <div className="">
        <div className="mt-10 flex items-center justify-center">
          {cardData.map((card, index) => (
            <Card key={index} {...card} />
          ))}
          
        </div>
        <div className="grid gap-3 p-10 md:grid-cols-2">
            <div className="md:order-first"><Chart/></div>
            <div className="md:order-last">
              <div className="grid grid-rows-1 md:grid-rows-3 gap-2 ">
                {cards.map((card, index) => (
                  <SmallCards key={index} title={card.title} desc={card.desc} />
                ))}
              </div>
            </div>
          </div>
      </div>
    </>
  );
};

export default Overview;
