//dom.js
function renderBoard(htmlId, gameboardObject, clickCallback) {
    const container = document.getElementById(`${htmlId}`);
    container.innerHTML = '';
    for(let i = 0; i < 10; i++) {
        for(let j = 0; j < 10; j++) {
            const div = document.createElement("div");
            div.classList.add('grid-square');
            div.innerText = `${j}, ${i}`;
            if(!htmlId.includes('computer')) {
                gameboardObject.shipsWithPositions.forEach(ship => {
                    ship.shipcoordinates.forEach(coordinate => {
                        if(gameboardObject.areArraysEqual(coordinate, [j, i])) {
                            div.classList.add('ship');
                        }
                    })
                })
            } else {
                div.addEventListener('click', () => {
                    if(clickCallback) {
                        clickCallback([j, i]);
                    }
                })
            }
            container.appendChild(div);
        }
    }
}
export {renderBoard}