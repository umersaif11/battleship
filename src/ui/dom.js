//dom.js
function renderBoard(htmlId, gameboardObject) {
    const container = document.getElementById(`${htmlId}`);

    for(let i = 0; i < 10; i++) {
        for(let j = 0; j < 10; j++) {
            const div = document.createElement("div");
            div.classList.add('grid-square');
            if(!htmlId.includes('computer')) {
                gameboardObject.shipsWithPositions.forEach(ship => {
                    ship.shipcoordinates.forEach(coordinate => {
                        if(gameboardObject.areArraysEqual(coordinate, [i, j])) {
                            div.classList.add('ship');
                        }
                    })
                })
            }
            container.appendChild(div);
        }
    }
}
export {renderBoard}