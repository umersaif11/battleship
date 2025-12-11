// index.js
import "./styles.css";
import {startGame} from "./controller/gamecontroller"
import {renderBoard} from "./ui/dom"

function main() {
    let players = startGame();
    const popupDialog = document.querySelector("#winnerDialog");
    const announceWinner = document.querySelector("#announceWinner");
    const playagainButton = document.querySelector("#playagainButton");

    const renderUI = () => {
        renderBoard('human-board', players.human.gameboard);
        renderBoard('computer-board', players.computer.gameboard, handleAttack);
    }

    const handleAttack = (coordinates) => {
       players.computer.gameboard.receiveAttack(coordinates);
       renderUI();
       if(players.computer.gameboard.allShipsSunk()) {
        // players = startGame();
        // renderUI();
        popupDialog.showModal();
        announceWinner.textContent = "Human wins!";
        
        return;
       }

       let XrandomNumber;
       let YrandomNumber;
       let isDuplicate = false;
       do {
        XrandomNumber = Math.floor(Math.random() * 10);
        YrandomNumber = Math.floor(Math.random() * 10);
        let inMissingShots = players.human.gameboard.missingShots.some(missArray => {
            let condition = 
            players.human.gameboard.areArraysEqual(missArray, [XrandomNumber, YrandomNumber]);
            return condition;
        })
        let inSuccessfulShots= players.human.gameboard.successfulShots.some(hitArray => {
            let condition = 
            players.human.gameboard.areArraysEqual(hitArray, [XrandomNumber, YrandomNumber]);
            return condition;
        })
        isDuplicate = inMissingShots || inSuccessfulShots;
       } while(isDuplicate);
       
       players.human.gameboard.receiveAttack([XrandomNumber, YrandomNumber]);
       renderUI();
       if(players.human.gameboard.allShipsSunk()) {
        // players = startGame();
        // renderUI();
        popupDialog.showModal();
        announceWinner.textContent = "Computer wins!";
        return;
       }
    }

    renderUI();
}
main();


  