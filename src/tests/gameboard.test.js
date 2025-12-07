//gameboard.test.js
import {gameboard} from "../factories/gameboard"

test('Did ship receive attack?', () => {
    const mygameboard = gameboard();
    mygameboard.placeShip([0,3], 2);
    expect(mygameboard.receiveAttack([0,3])).toBe(true);
})
test('Can place multiple ships?', () => {
    const mygameboard = gameboard();
    mygameboard.placeShip([0, 0], 3);
    mygameboard.placeShip([0, 4], 3);
    expect(mygameboard.receiveAttack([0, 0])).toBe(true);
})