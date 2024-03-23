const canvas = document.getElementById('canvas');
const setSizeButton = document.getElementById('sizeSetter');
const resetButton = document.getElementById('reset');

setSizeButton.addEventListener('click', function() {
    const widthHeightCanvas = document.getElementById('widthHeight').value;
    
    // Clear the existing canvas
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
            row.appendChild(square);
        }
        canvas.appendChild(row);
    }
}

//Button that clears the existing button
resetButton.addEventListener('click', function () {
    canvas.innerHTML = "";
})


