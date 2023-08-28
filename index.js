const container = document.querySelector('.container'); // selects the body
container.style.cssText = 'height: 900px; width: 900px; border: 2px solid black; display: flex; flex-wrap: wrap'

// Clears every single square, removing its div element
function clearGrid(){
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => square.remove());
}

// Loop for creating 16x16 div grid
function createGrid(size){
    clearGrid();
    for (i = 0; i < size*size; i++){
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.cssText = `border: 1px solid black; height: ${(900-2-(size-1)*2)/size}px; width: ${(900-2-(size-1)*2)/size}px`; // (900 - 2x1 - 15x2)/16
        container.appendChild(square);

        // Creating the event listener for the hover effect,turns colour red
        square.addEventListener('mouseover', function(e){
            e.target.classList.add('hover');
        })
    }
}

// Button logic
const button = document.querySelector('button');
button.addEventListener("click", () => {
    const size = Number(prompt("Size of new grid:"));
    createGrid(size);
})

// Initial grid creation
createGrid(16);
