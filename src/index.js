// index.js
import "./styles.css";
import {startGame} from "./controller/gamecontroller"
import {renderBoard} from "./ui/dom"

const players = startGame();

renderBoard('human-board', players.human.gameboard);
renderBoard('computer-board', players.computer.gameboard, (coordinates) => {
    console.log("Attack recieved at:", coordinates);
});


  