//gamecontroller.js
import {player} from "../factories/player"

function startGame() {
    const human = player('real');
    const computer = player('computer');
    
    computer.gameboard.placeShip([2, 0], 2, 'y');
    computer.gameboard.placeShip([1, 2], 2, 'x');
    return {
        human,
        computer
    }
}
export {startGame}