import React, { useState, useEffect } from "react";
import Square from "./Square";

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [scoreX, setScoreX] = useState(0);
  const [scoreO, setScoreO] = useState(0);
  const [Winner, setWinner] = useState(null);
  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }

    return false;
  };

  useEffect(() => {
    if (Winner) {
      setTimeout(() => {
        handleReset();
      }, 2000); 
    }
  }, [Winner]);

  const isWinner = checkWinner();

  const handleClick = (index) => {
    if (state[index] !== null) {
      return;
    }
    const copyState = [...state];

    copyState[index] = isXTurn ? "✘" : "◯";
    setState(copyState);
    setIsXTurn(!isXTurn);
    };

    const handleReset = () => {
        setState(Array(9).fill(null));
    };
    const reset=()=>{
        setState(Array(9).fill(null)); 
    };
    
    let cntx=0;
    let cnto=0
    const count = () => {
        if (isWinner === "✘") {
          setScoreX(scoreX + 1);
        } else if (isWinner === "◯") {
          setScoreO(scoreO + 1);
        }
        else{
            reset();
        }
    };
    const resetScore = () => {
        setScoreX(0);
        setScoreO(0);
        setState(Array(9).fill(null));
        setIsXTurn(null);
        setIsXTurn(true); 
    };
    const winend =()=>{
        if(isWinner == "✘"){
            reset();
        }
    };
    return (
        <div className="board-container"  content="width=device-width, initial-scale=1.0">
        {/* {isWinner ? ( */}
            {/* <>
            {isWinner} won the game&nbsp;{" "}
            <button onClick={handleReset}>Play Again</button> */}
            {/* </> */}{
        (
            <>
            <h1 align="center">Tic Tac Toe: The game</h1>
            <h2 align="center">Alert: <u>{isXTurn ? "Player 1" : "Player 2"}</u> please move</h2>
            <div className="board-row">
                <Square onClick={() => handleClick(0)} value={state[0]} />
                <Square onClick={() => handleClick(1)} value={state[1]} />
                <Square onClick={() => handleClick(2)} value={state[2]} />
            </div>
            <div className="board-row">
                <Square onClick={() => handleClick(3)} value={state[3]} />
                <Square onClick={() => handleClick(4)} value={state[4]} />
                <Square onClick={() => handleClick(5)} value={state[5]} />
            </div>
            <div className="board-row">
                <Square onClick={() => handleClick(6)} value={state[6]} />
                <Square onClick={() => handleClick(7)} value={state[7]} />
                <Square onClick={() => handleClick(8)} value={state[8]} />
            </div><br/>
            _{isWinner}_ won the game&nbsp;<br/><br/>
            <b>if its a tie press this button:&nbsp;</b>
            <button onClick={reset}>reset</button><br/>
            
            <p>Player 1 (X) Score: {scoreX}</p>
            <button onClick={count}>score</button>
                <p>Player 2 (O) Score: {scoreO}</p><br></br>
                <div style={{ display: "flex", justifyContent: "center"}}>
                <button className="end" onClick={resetScore}>close</button>
                </div>
            </>
            
        )}<br/>
        
        </div>
        
    );
};

export default Board;