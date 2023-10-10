import React from "react";

const GameOver = ({ winner, onReset, show }) => {
  const modalStyle = {
    display: show ? "block" : "none",
  };

  return (
    <div className="modal" style={modalStyle}>
        <div className="modal-content">
          {winner ? <p>{`Winner: ${winner}`}</p> : <p>{`It's a DRAW`}</p>}
          <button className="button-6" type="button" onClick={onReset}>
            New Game?
          </button>
      </div>
    </div>
  );
};

export default GameOver;
