//gameboard.js
import {ship} from "../factories/ship"
function gameboard() {
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
    let shipsWithPositions = [];
    const placeShip = (coordinates, length, axis = 'x') => {
        const myship = ship(length);
        let allCoordinates = [];
        for(let i = 0; i < length; i++) {
            if(axis === 'x') {
                allCoordinates.push(
                    [coordinates[0] + i, coordinates[1]]
                )
            } else if(axis === 'y') {
                allCoordinates.push(
                    [coordinates[0], coordinates[1] + i]
                )
            }
        }
        const newShipEntry = {
                    myship,
                    shiplength: myship.shipLength(),
                    shipcoordinates: allCoordinates
                }
        shipsWithPositions.push(newShipEntry);   
    }
    let missingShots = [];
    const receiveAttack = (attackCoordinates) => {
        for(let ship of shipsWithPositions) {
            for(let coordinate of ship.shipcoordinates) {
                if(areArraysEqual(coordinate, attackCoordinates)) {
                    ship.myship.hit();
                    return true;
                }
            }
        }
        missingShots.push(attackCoordinates);
        return false;
    }
    return {
        placeShip,
        receiveAttack,
        shipsWithPositions,
        missingShots
    }
}
export {gameboard}