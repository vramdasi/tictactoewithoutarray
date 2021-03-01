import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [block0, setBlock0] = useState("");
  const [block1, setBlock1] = useState("");
  const [block2, setBlock2] = useState("");
  const [block3, setBlock3] = useState("");
  const [block4, setBlock4] = useState("");
  const [block5, setBlock5] = useState("");
  const [block6, setBlock6] = useState("");
  const [block7, setBlock7] = useState("");
  const [block8, setBlock8] = useState("");

  const [currentPlayer, setCurrentPlayer] = useState("O");

  const [winner, setWinner] = useState("no-winner");
  const [boardfull, setBoardFull] = useState(false);

  useEffect(() => {
    calculateWinner();
    isBoardFull();
    switchPlayer();
  }, [block0, block1, block2, block3, block4, block5, block6, block7, block8]);

  const calculateWinner = () => {
    if (
      (block0 === block3 &&
        block0 === block6 &&
        (block0 === "X" || block0 === "O")) ||
      (block1 === block4 &&
        block1 === block7 &&
        (block1 === "X" || block1 === "O")) ||
      (block2 === block5 &&
        block2 === block8 &&
        (block2 === "X" || block2 === "O"))
    ) {
      alert("player " + currentPlayer + " won!!!!");
      setWinner(currentPlayer);
    }

    if (
      (block0 === block1 &&
        block0 === block2 &&
        (block0 === "X" || block0 === "O")) ||
      (block3 === block4 &&
        block3 === block5 &&
        (block3 === "X" || block3 === "O")) ||
      (block6 === block7 &&
        block6 === block8 &&
        (block6 === "X" || block6 === "O"))
    ) {
      alert("player " + currentPlayer + " won!!!!");
      setWinner(currentPlayer);
    }

    if (
      (block0 === block4 &&
        block0 === block8 &&
        (block0 === "X" || block0 === "O")) ||
      (block2 === block4 &&
        block2 === block6 &&
        (block2 === "X" || block2 === "O"))
    ) {
      alert("player " + currentPlayer + " won!!!!");
      setWinner(currentPlayer);
    }
  };

  const isBoardFull = () => {
    if(block0 != "" && block1 != "" && block2 != "" && block3 != "" && block4 != "" && block5 != "" && block6 != "" && block7 != "" && block8 != "" && winner === "no-winner"){
      setBoardFull(true);
    }
  }
  
  const switchPlayer = () => {
    console.log("winner is ", winner);
    if (winner === "no-winner" && boardfull === false) {
      if (currentPlayer === "X") setCurrentPlayer("O");
      else setCurrentPlayer("X");
    }
  };

  function toggleMark(event, key) {
    console.log("key ", key);
    console.log("currentPlayer ", currentPlayer); 
    
    if (winner === "no-winner") {
      if (key === 0 && block0 === "") {
        setBlock0(currentPlayer);
      }

      if (key === 1 && block1 === "") {
        setBlock1(currentPlayer);
      }

      if (key === 2 && block2 === "") {
        setBlock2(currentPlayer);
      }

      if (key === 3 && block3 === "") {
        setBlock3(currentPlayer);
      }

      if (key === 4 && block4 === "") {
        setBlock4(currentPlayer);
      }

      if (key === 5 && block5 === "") {
        setBlock5(currentPlayer);
      }

      if (key === 6 && block6 === "") {
        setBlock6(currentPlayer);
      }

      if (key === 7 && block7 === "") {
        setBlock7(currentPlayer);
      }

      if (key === 8 && block8 === "") {
        setBlock8(currentPlayer);
      }
    } else alert("Match Over. Winner is " + winner);
  }

  return (
    <div className="App">
      <h2>Tic-Tac-Toe</h2>
      <div className="">
        
        {boardfull === true ? <h2>Match is draw</h2> : null}
    
        {winner === "no-winner" && currentPlayer === "X" ? (
          <h3>Current Player : X &nbsp;&nbsp;&nbsp; Current Player : O</h3>
        ) : null}

        {winner === "no-winner" && currentPlayer === "O" ? (
          <h3>Current Player : O &nbsp;&nbsp;&nbsp; Current Player : X</h3>
        ) : null}

        {winner !== "no-winner" ? <h2>Winner is {winner}</h2> : null}
      </div>
      <div className="grid-container">
        <div className="grid-item" onClick={(event) => toggleMark(event, 0)}>
          {block0}
        </div>
        <div className="grid-item" onClick={(event) => toggleMark(event, 1)}>
          {block1}
        </div>
        <div className="grid-item" onClick={(event) => toggleMark(event, 2)}>
          {block2}
        </div>
        <div className="grid-item" onClick={(event) => toggleMark(event, 3)}>
          {block3}
        </div>
        <div className="grid-item" onClick={(event) => toggleMark(event, 4)}>
          {block4}
        </div>
        <div className="grid-item" onClick={(event) => toggleMark(event, 5)}>
          {block5}
        </div>
        <div className="grid-item" onClick={(event) => toggleMark(event, 6)}>
          {block6}
        </div>
        <div className="grid-item" onClick={(event) => toggleMark(event, 7)}>
          {block7}
        </div>
        <div className="grid-item" onClick={(event) => toggleMark(event, 8)}>
          {block8}
        </div>
      </div>
    </div>
  );
}

export default App;
