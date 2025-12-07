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
