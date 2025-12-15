// index.js
import "./styles.css";
import {startGame} from "./controller/gamecontroller"
import {renderBoard} from "./ui/dom"

function main() {
    let players = startGame();

    let XrandomNumber;
    let YrandomNumber;
    let isDuplicate = false;

    let axis = 'x';
    let shipLengths = [5, 4, 3, 3, 2];
    let currentShipIndex = 0;

    let isPlacementPhase = true;

    const popupDialog = document.querySelector("#winnerDialog");
    const announceWinner = document.querySelector("#announceWinner");
    const playagainButton = document.querySelector("#playagainButton");

    let rotateAxis = document.getElementById("rotate-btn");

    const renderUI = () => {
        renderBoard(
            'human-board', 
            players.human.gameboard,
            isPlacementPhase ? handlePlacement : null);
        renderBoard('computer-board', players.computer.gameboard, handleAttack);
    }

    const handleAttack = (coordinates) => {
       players.computer.gameboard.receiveAttack(coordinates);
       renderUI();
       if(players.computer.gameboard.allShipsSunk()) {
        popupDialog.showModal();
        announceWinner.textContent = "Human wins!";
        return;
       }

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
        popupDialog.showModal();
        announceWinner.textContent = "Computer wins!";
        return;
       }
    }

    playagainButton.addEventListener("click", () => {
        players = startGame();
        currentShipIndex = 0;
        isPlacementPhase = true;

        let shipharbour = document.getElementById("ship-harbor");
        shipharbour.style.display = "flex";
        let computerboard = document.getElementById("computer-board");
        computerboard.style.display = "none";

        let fleetChildren = document.getElementById("fleet").children;
        for(let child of fleetChildren) child.classList.remove("active");
        fleetChildren[0].classList.add("active");

        popupDialog.close();
        renderUI();
    })

    rotateAxis.addEventListener("click", () => {
        if(axis === 'x') {
            axis = 'y';
            rotateAxis.textContent = "Rotate Axis [Y]";
        } else {
            axis = 'x';
            rotateAxis.textContent = "Rotate Axis [X]";
        }
    })

    const handlePlacement = (coordinates) => {
        if(players.human.gameboard.placeShip(
            coordinates,
            shipLengths[currentShipIndex],
            axis
        )) {
            let fleetofships = document.getElementById("fleet");
            let fleetChildrenList = fleetofships.children;
            fleetChildrenList[currentShipIndex].classList.remove("active");
            currentShipIndex++;
            if(currentShipIndex < 5) {
                fleetChildrenList[currentShipIndex].classList.add("active");
            }
            
            if(currentShipIndex === 5) {
                let shipharbour = document.getElementById("ship-harbor");
                shipharbour.style.display = "none";
                let computerboard = document.getElementById("computer-board");
                setTimeout(() => {
                    computerboard.style.display = "grid";
                }, 2000);

                isPlacementPhase = false;
            }
            renderUI();
        }
    }

    renderUI();
}
main();


  