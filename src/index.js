// index.js
import "./styles.css";
import {startGame} from "./controller/gamecontroller"
import {renderBoard} from "./ui/dom"

function main() {
    const players = startGame();
    const renderUI = () => {
        renderBoard('human-board', players.human.gameboard);
        renderBoard('computer-board', players.computer.gameboard, (coordinates) => {
            console.log("Attack recieved at:", coordinates);
        });
    }

    renderUI();
}
main();


  