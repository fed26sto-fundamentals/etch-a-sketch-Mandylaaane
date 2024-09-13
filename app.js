//global variables
let color = "black";



//Create a webpage with a 16x16 grid of square divs.
function populateBoard(size) {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}  , 1fr)`;

    let amount = size * size
    for (let i = 0; i < amount; i++) {
        let square = document.createElement('div');
        square.addEventListener("mouseover", colorSquare);
        square.style.backgroundColor = 'orange';
        board.insertAdjacentElement("beforeend", square);
    }
}

populateBoard(16);

//Set up a “hover” effect so that colors change when mouse hover. (line: 12)
function changeSize(input) {
    if (input >=2 && input <=100 ) {
        populateBoard(input);
    }
    else {
        console.log("too many squares");
    }
}

function colorSquare() {
    if(color === 'random'){
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
        this.style.backgroundColor = color;
    }
}

function changeColor(choice) {
    color = choice;
}

function resetBoard() {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());
}

//Add a button on the top of the screen that will send the user a popup asking for the number of squares per side for the new grid. 