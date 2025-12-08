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