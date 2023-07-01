const body = document.querySelector('body');

const header = document.createElement('div');
header.classList.add('header');

const original_container = document.createElement('div');
original_container.classList.add('original_container');

//Make a button that draws a grid.
const button = document.createElement('button');
button.classList.add('button');
button.innerText = 'SET GRID';

//Make a button that paints the grid.
const paintbutton = document.createElement('button');
paintbutton.classList.add('button');
paintbutton.innerText = 'PAINT';

//Make a button that erases the paint.
const erasebutton = document.createElement('button');
erasebutton.classList.add('button');
erasebutton.innerText = 'ERASE';

//set mode variable
let mode = 'default';

body.appendChild(header);
body.appendChild(original_container);
header.appendChild(button);
header.appendChild(paintbutton);
header.appendChild(erasebutton);

button.addEventListener('click',function setGrid(e){
    
    let number = 0;

    while (true) {

        number = prompt("Enter grid: ");
        if (number >= 1 && number <= 100) {

            break;
        } else {
            alert("Has to be between 1 and 100");
        }

    }

    eraseGrid();
    drawGrid(number);
});

erasebutton.addEventListener('click',() => {
    mode = 'erase';
    alert("The mode set to 'ERASE'");
})

paintbutton.addEventListener('click',() => {
    mode = 'default';
    alert("The mode set to 'PAINT'");
})




function drawGrid(number=16) {
        //Now I need to make the container 15 more times.
    for (let i=1; i <=number; i++) {
        const column_container = document.createElement('div');
        column_container.classList.add('column_container');
        original_container.appendChild(column_container);

            //I need to first add 16 boxes(divs) to "column_container".
        for (let i=1; i <= number; i++) {

            const column = document.createElement('div');
            column.classList.add("column");
            column_container.appendChild(column);
            column.innerText = i;
            column.addEventListener("mouseover", changeColor);
        }

    }

}

function eraseGrid() {

    const column_container = document.querySelectorAll('.column_container');
    
    for (const column of column_container) {
        original_container.removeChild(column);
    }
    
    
}


function changeColor(){

    if (mode === "default") {
        this.style.background = 'red';
    } 
    else if (mode === "erase") {
        this.style.background = 'white';
    }
    
}

// function resetColor() {
//     this.style.background = 'white';
// }

drawGrid();