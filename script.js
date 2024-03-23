const canvas = document.getElementById('canvas');
const setSizeButton = document.getElementById('sizeSetter');
const resetButton = document.getElementById('reset');
const blackButton = document.getElementById('black');
const randomButton = document.getElementById('random');
const eraser = document.getElementById('eraser');

let isRandomColorEnabled = false; //if true when randomButton works
let selectedColor = 'black'; // default color

setSizeButton.addEventListener('click', function() {
    const widthHeightCanvas = document.getElementById('widthHeight').value;
    
    //Clear the existing canvas
    canvas.innerHTML = "";

    createGrid (widthHeightCanvas); 
})

//Creating the canvas
function createGrid (widthHeightCanvas) {
    for (let i = 0; i < widthHeightCanvas; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < widthHeightCanvas; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.style.border = "1px solid black"

            square.addEventListener('mouseover', function() {
                if (isRandomColorEnabled) {
                    //Set random color on hover if randomButton was clicked
                    square.style.backgroundColor = hexRandom(); 
                } else {
                    //Set selected color on hover if randomButton was not clicked
                    square.style.backgroundColor = selectedColor; 
                }
            });
            
            row.appendChild(square);
        }
        canvas.appendChild(row);
    }
}

//Button that clears the existing button
resetButton.addEventListener('click', function () {
    canvas.innerHTML = "";
})

//Button to draw with black color only
blackButton.addEventListener('click', function() {
    selectedColor = 'black';
    isRandomColorEnabled = false;
});

//Button to use eraser (basicly just white color)
eraser.addEventListener('click', function() {
    selectedColor = 'white';
    isRandomColorEnabled = false;
});

//Button to draw with random colors
randomButton.addEventListener('click', function() {
    isRandomColorEnabled = true;
});

//Adds random color to background
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
function hexRandom () {
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomColor()];
    }
    return hexColor;
}
function getRandomColor() {
    return Math.floor(Math.random() * hex.length)
}