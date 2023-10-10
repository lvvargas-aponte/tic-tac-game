import React, { useState, useE } from "react";
import Table from "./component/Table";
import GameOver from "./component/GameOver";

const Game = () => {
  const [table, setTable] = useState(Array(9).fill(null));
  const [xIsNext, setxIxNext] = useState(true);
  const [winner, setWinner] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleClick = (index) => {
    const newTable = [...table];
    if (winner) {
      return;
    }
    newTable[index] = xIsNext ? "X" : "O";
    setTable(newTable);
    setxIxNext(!xIsNext);
    const gameWinner = calcWinner(newTable);
    if (gameWinner) {
      handleWinEvent(gameWinner);
    } else if (!newTable.includes(null)) {
      handleWinEvent("Draw");
    }
  };

  const calcWinner = (tiles) => {
    const tableTiles = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    

    for (let i = 0; i < tableTiles.length; i++) {
      const [a, b, c] = tableTiles[i];
      if (tiles[a] && tiles[a] === tiles[b] && tiles[a] === tiles[c]) {
        return tiles[a];
        
      }
    }


    return null;
  };


  const handleWinEvent = (result) => {
    setWinner(result);
    setShowModal(true);
  };

  const handleReset = () => {
    setTable(Array(9).fill(null));
    setWinner('');
    setShowModal(false);
    setxIxNext(true);
  };

  const currPlayer = xIsNext ? "X" : "O";

  return (
    <div className="main">
      <h1>Tic Tac Toe</h1>
      <p>{`Current Player ${currPlayer}`}</p>
      <Table tiles={table} onClick={handleClick} />
        <GameOver winner={winner} onReset={handleReset} show={showModal} />
    </div>
  );
};

export default Game;
