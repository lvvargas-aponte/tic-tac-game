import React from "react";

const GameOver = ({ winner, onReset, showModal }) => {
  const modalStyle = {
    display: showModal ? "block" : "none",
  };

  return (
    <div className="modal" style={modalStyle}>
      <div className="modal-content">
        <div className="modal-body">
          {winner ? <p>{`Winner: ${winner}`}</p> : <p>{`It's a DRAW`}</p>}
          <button type="button" onClick={onReset}>
            New Game?
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameOver;
