import React from "react";
import Tiles from "./Tiles";

const Table = ({ tiles, onClick }) => {
  return (
    <div className="table">
      {tiles.map((tile, i) => (
        <Tiles key={i} value={tile} onClick={() => onClick(i)} />
      ))}
    </div>
  );
};

export default Table;
