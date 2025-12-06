//ship.js
function ship() {
    let shipHitTimes = 0;
    const timesHit = () => shipHitTimes;
    const hit = () => shipHitTimes++;
    return {
        hit,
        timesHit
    }
}
export {ship}