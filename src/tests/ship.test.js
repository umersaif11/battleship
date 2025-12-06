// ship.test.js
test('How many times ship has been hit', () => {
    const myship = ship();
    expect(myship.timesHit()).toBe(0);
    myship.hit();
    expect(myship.timesHit()).toBe(1);
})