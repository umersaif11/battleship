// ship.test.js
import {ship} from "../factories/ship"
test("How many times ship's been hit?", () => {
    const myship = ship();
    expect(myship.timesHit()).toBe(0);
    myship.hit();
    expect(myship.timesHit()).toBe(1);
})
test("Is ship sunk?", () => {
    const myship = ship(2);
    expect(myship.isSunk()).toBe(false);
    myship.hit();
    myship.hit();
    expect(myship.isSunk()).toBe(true);
})