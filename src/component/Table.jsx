import React from "react";
import Tiles from "./Tiles";

const Table = ({tiles, onClick}) => {
    console.log(tiles)
    <div>
        {tiles.map((tiles, i) => (
			<Tiles key={i} value={tiles} onClick={() => onClick(i)} />
		))}
    </div>   
}

export default Table;