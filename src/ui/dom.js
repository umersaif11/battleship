//dom.js
function renderBoard(htmlId, gameboardObject) {
    const container = document.getElementById(`${htmlId}`);
    container.innerText = '';
    for(let i = 0; i < 10; i++) {
        for(let j = 0; j < 10; j++) {
            const div = document.createElement("div");
            div.classList.add('grid-square');
            div.innerText = `${j}, ${i}`;
            if(!htmlId.includes('computer')) {
                gameboardObject.shipsWithPositions.forEach(ship => {
                    ship.shipcoordinates.forEach(coordinate => {
                        //as i is changing when moves down on screen grid
                        //so i represents y-axis as i is changing in vertical
                        //direction, so i must be placed in this bracket [] at 
                        //yth position i.e second
                        if(gameboardObject.areArraysEqual(coordinate, [j, i])) {
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