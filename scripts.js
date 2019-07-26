let gridSize = 16;
function createBox() {
    let container = document.querySelector('#container');
    let box = document.createElement('div');
    box.classList.add('box');
    container.appendChild(box);
}



function createGrid() {
    for (let i = 0; i < gridSize*gridSize; i++) {
        createBox();
        console.log("work");
    }
}

function deleteGrid() {
    let container = document.querySelector('#container');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}
function hover() {
    let boxes = document.querySelectorAll('.box');
    boxes.forEach(function (div) {
    
        console.log(div.id+" "+Math.random());
        div.addEventListener('mouseenter', (e) => {
            div.style.cssText = 'background-color: black';
        });
    });
    }

function reset() {
    let boxes = document.querySelectorAll('.box');
    boxes.forEach(function (div) {
       div.style.backgroundColor = "white";
    });
}

function changeGrid() {
deleteGrid();
   gridSize = prompt ("What do you want your gridsize to be?");
   /* if (typeof (gridSize) != "number") {
        changeGrid();
    } */
    let container = document.querySelector('#container');
    container.style.setProperty('grid-template-columns', "repeat(" + gridSize + ", 1fr)");
    container.style.setProperty('grid-template-rows', "repeat(" + gridSize + ", 1fr)");
    runOnStart();


}
function runOnStart() {
createGrid();
hover();
}

let resetbtn = document.querySelector('.reset');
resetbtn.addEventListener('click', (e) => {
    reset();
});

let changebtn = document.querySelector('.change');
changebtn.addEventListener('click', (e) => {
 changeGrid();
});

runOnStart();