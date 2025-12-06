//ship.js
function ship(length = 1) {
    let shipHitTimes = 0;
    const timesHit = () => shipHitTimes;
    const hit = () => shipHitTimes++;
    const isSunk = () => {
        if(shipHitTimes >= length){
            return true;
        }
        return false;
    }
    return {
        hit,
        timesHit,
        isSunk
    }
}
export {ship}