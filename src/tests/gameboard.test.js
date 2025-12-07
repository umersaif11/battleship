//gameboard.test.js
import {gameboard} from "../factories/gameboard"

test('Did ship receive attack?', () => {
    const mygameboard = gameboard();
    mygameboard.placeShip([0,3]);
    expect(mygameboard.receiveAttack([0,3])).toBe(true);
})