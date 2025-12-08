//player.test.js
import {player} from "../factories/player"
test('Create real player', () => {
    const myPlayer = player('real');
    expect(myPlayer.type).toBe('real');
})
test('Create computer player', () => {
    const computerPlayer = player('computer');
    expect(computerPlayer.type).toBe('computer');
})
test('Is gameboard on player func defined and has all its functions?', () => {
    const myPlayer = player('real');
    expect(myPlayer.gameboard).toBeDefined();
    expect(myPlayer.gameboard).toHaveProperty('placeShip');
})