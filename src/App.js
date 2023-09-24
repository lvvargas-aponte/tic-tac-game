import './App.css';
import React, { useState } from 'react';
//import Tiles from './component/Tiles';

function App() {

  const [, setBoard] = useState(Array(9));

  const tableBody =
    ['', '', '',
      '', '', '',
      '', '', ''];

      console.log(board);
/*   return (
/*     <div className="App">
      <div className="container table">
        <div className="row">
          <div className="col-4 p-5 tile">I'm a Space</div>
          <div className="col-4 p-5 tile">I'm a Space</div>
          <div className="col-4 p-5 tile">I'm a Space</div>
        </div>
        <div className="row">
          <div className="col-4 p-5 tile">I'm a Space</div>
          <div className="col-4 p-5 tile">I'm a Space</div>
          <div className="col-4 p-5 tile">I'm a Space</div>
        </div>
        <div className="row">
          <div className="col-4 p-5 tile">I'm a Space</div>
          <div className="col-4 p-5 tile">I'm a Space</div>
          <div className="col-4 p-5 tile">I'm a Space</div>
        </div>
      </div>
    </div> */

 /*    <>
      <Tiles value="1" onClick={() => onClick("dummy value")} />
    </> */
  
}

export default App;
