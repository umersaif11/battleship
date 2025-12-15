//gamecontroller.js
import {player} from "../factories/player"

function startGame() {
    const human = player('real');
    const computer = player('computer');
    
    const shipsLength = [5, 4, 3, 3, 2];
    shipsLength.forEach(length => {
        let placed = false;
        while(!placed) {
            const randomX = Math.floor(Math.random() * 10);
            const randomY = Math.floor(Math.random() * 10);
            const randomAxis = Math.random() < 0.5 ? 'x' : 'y';

            if(computer.gameboard.placeShip([randomX, randomY], length, randomAxis)) {
                placed = true;
            }
        }
    })
    return {
        human,
        computer
    }
}
export {startGame}