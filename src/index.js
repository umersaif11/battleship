// index.js
import "./styles.css";
import {startGame} from "./controller/gamecontroller"
import {renderBoard} from "./ui/dom"

function main() {
    const players = startGame();
    const renderUI = () => {
        renderBoard('human-board', players.human.gameboard);
        renderBoard('computer-board', players.computer.gameboard, handleAttack);
    }
    const handleAttack = (coordinates) => {
       players.computer.gameboard.receiveAttack(coordinates);
       renderUI();
    }

    renderUI();
}
main();


  