// Components/DataCard.jsx
import React from "react";

const DataCard = ({ item }) => {
  return (
    <div className="bg-indigo-400 text-white text-center space-y-2 p-4 rounded shadow-md">
      <h2 className="text-xl font-semibold">{item.id}</h2>
      <h2 className="text-xl font-semibold">{item.title}</h2>
      <p className="">{item.directo}</p>
      <p className="">{item.artist}</p>
      <p className="font-bold">{item.release_date}</p>
    </div>
  );
};

export default DataCard;
