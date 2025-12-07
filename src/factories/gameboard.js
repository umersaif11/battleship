//gameboard.js
import {ship} from "../factories/ship"
function gameboard() {
    let shipsWithPositions = [];
    const areArraysEqual = (arr1, arr2) => {
        if (arr1.length !== arr2.length) {
            return false;
        }
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
            return false;
            }
        }
        return true;
    }
    const placeShip = (coordinates, length) => {
        const myship = ship(length);

        if(shipsWithPositions.length === 0) {
            shipsWithPositions.push({
                    myship,
                    shiplength: myship.shipLength(),
                    shipcoordinates: []
                })   
        }
        for(let ship of shipsWithPositions) {
            if(ship.shiplength === length) {
                ship.shipcoordinates.push(coordinates)
            } else {
                shipsWithPositions.push({
                    myship,
                    shiplength: myship.shipLength(),
                    shipcoordinates: []
                })
            }
        }
  
    }
    const receiveAttack = (attackCoordinates) => {
        for(let ship of shipsWithPositions) {
            for(let coordinate of ship.shipcoordinates) {
                if(areArraysEqual(coordinate, attackCoordinates)) {
                    return true;
                }
            }
        }
        return false;
    }
    return {
        placeShip,
        receiveAttack
    }
}
export {gameboard}