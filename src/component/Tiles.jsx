import React from "react";

const Tiles = ({ value, onClick }) => {
  return (
    <button className="tile" onClick={onClick}>
      {value}
    </button>
  );
};

export default Tiles;
