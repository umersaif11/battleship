//player.js
import {gameboard} from "../factories/gameboard"
function player(playertype) {
    const type = playertype;
    return {
        type,
        gameboard: gameboard(),
    }
}

export {player}