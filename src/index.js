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
       if(players.computer.gameboard.allShipsSunk()) {
        console.log('Human wins!');
        return;
       }
       let XrandomNumber = Math.floor(Math.random() * 10);
       let YrandomNumber = Math.floor(Math.random() * 10);
       players.human.gameboard.receiveAttack([XrandomNumber, YrandomNumber]);
       renderUI();
       if(players.human.gameboard.allShipsSunk()) {
        console.log('Computer wins!');
        return;
       }
    }

    renderUI();
}
main();


  