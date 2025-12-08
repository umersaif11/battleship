//gameboard.test.js
import {gameboard} from "../factories/gameboard"

test('Did receiveAttack() receive attack?', () => {
    const mygameboard = gameboard();
    mygameboard.placeShip([0,3], 2);
    expect(mygameboard.receiveAttack([0,3])).toBe(true);
})
test('Can placeShip() place multiple ships?', () => {
    const mygameboard = gameboard();
    mygameboard.placeShip([0, 0], 3);
    mygameboard.placeShip([0, 4], 4);
    expect(mygameboard.receiveAttack([0, 0])).toBe(true);
})
test('Can placeShip() place two ships of same length?', () => {
    const mygameboard = gameboard();
    mygameboard.placeShip([0, 0], 3);
    mygameboard.placeShip([0, 4], 3);
    expect(mygameboard.shipsWithPositions.length).toBe(2);
})
test('Can placeShip() calculates next coordinates?', () => {
    const mygameboard = gameboard();
    mygameboard.placeShip([0, 0], 3);
    expect(mygameboard.shipsWithPositions[0].shipcoordinates.length).toBe(3);
})
test("Can placeShip() calculates next coordinates's direction?", () => {
    const mygameboard = gameboard();
    mygameboard.placeShip([0, 0], 3, 'y');
    expect(mygameboard.shipsWithPositions[0].shipcoordinates[2]).toEqual([0,2]);
})
test('Can receiveAttack() determine which specific ship is hit?', () => {
    const mygameboard = gameboard();
    mygameboard.placeShip([0, 0], 3);
    mygameboard.receiveAttack([2, 0]);
    expect(mygameboard.shipsWithPositions[0].myship.timesHit()).toBe(1);
})
test('Can receiveAttack() records the coordinates of missed shots?', () => {
    const mygameboard = gameboard();
    mygameboard.placeShip([0, 0], 3);
    mygameboard.receiveAttack([3, 3]);
    expect(mygameboard.missingShots[0]).toEqual([3, 3]);
})
test('Have all the ships been sunk?', () => {
    const mygameboard = gameboard();
    //place two ships
    mygameboard.placeShip([0, 0], 1);
    mygameboard.placeShip([1, 0], 1);
    //sink first one
    mygameboard.receiveAttack([0, 0]);
    //expect allShipsSunk() to be false
    expect(mygameboard.allShipsSunk()).toBe(false);
    //now sink second one
    mygameboard.receiveAttack([1, 0]);
    expect(mygameboard.allShipsSunk()).toBe(true);  
})
