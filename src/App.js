import React, { useState, useEffect } from "react";
import "/src/styles.css";

function App() {
  const [userChoice, setUserChoice] = useState("....");
  const [computerChoice, setComputerChoice] = useState("...");
  const [userPoints, setUserPoints] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const choices = ["rock", "tree", "bush"];
  const handleOnClick = (choice) => {
    setUserChoice(choice);
    generateComputerChoice();
  };
  const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
  };

  const reset = () => {
    window.location.reload(); // RELOAD THE SCREEN FUNCTION
  };

  useEffect(() => {
    if (userChoice === computerChoice) {
      setGameOver(true);
    }
    if (userChoice !== computerChoice && userChoice !== "....") {
      const updatedUserPoints = userPoints + 1;
      setUserPoints(updatedUserPoints);
    }
  }, [userChoice, computerChoice]);
  return (
    <div className="App">
      <h1 className="heading">Hide and Seek</h1>
      <div className="avatars">
        <div className="avatar-computer">
          <img
            className="computer-hand"
            src={`../images/bigWolf.jpg`}
            alt="wolf-choice"
          />
          <p>Monster</p>
        </div>
        <div className="avatar-user">
          <img className="user-hand" src={`../images/user.jpg`} alt="user" />
          <p>You</p>
        </div>
      </div>
      <div children="button-div" className="resize">
        {choices.map((choice, index) => (
          <span>
            <img src={`../images/${choice}.jpg`} alt={`${choice}`} />
            <button
              className="button"
              key={index}
              onClick={() => handleOnClick(choice)}
              disabled={gameOver}
            >
              {choice}
            </button>
          </span>
        ))}
      </div>
      <div className="results">
        <h2>Computer chooses: {computerChoice}</h2>
        <h2>User chooses: {userChoice}</h2>
      </div>
      <div className="score">
        <h3>{userPoints}</h3>
      </div>

      <div className="judgement">
        <h1>{gameOver ? "you lose!" : "You're safe!"}</h1>
      </div>
      <div className="button-div">
        {/* ONLY RENDERED WHEN THE GAME IS OVER */}
        {gameOver && (
          <button className="button" onClick={() => reset()}>
            Restart Game?
          </button>
        )}
        {/* A BIT CONFUSED ON HOW THIS SYNTAX WORKS -NEVER SEEN IT BEFORE */}
      </div>
    </div>
  );
}
export default App;
