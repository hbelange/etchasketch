const container = document.querySelector('.container'); // selects the body
container.style.cssText = 'border: 2px solid black; display: inline-block'

// Loop for creating 16x16 div grid
for (i = 0; i < 16; i++){
    const row = document.createElement('div');
    row.style.display = 'flex';
    for (j = 0; j < 16; j++){
        const square = document.createElement('div');
        square.classList.add("square");
        square.style.cssText = "border: 1px solid black; height: 50px; width: 50px";
        row.appendChild(square)
    }
    container.appendChild(row);
}

// Creating the event listener for the hover effect,turns colour red
const squares = document.querySelectorAll('.square'); // node list for all squares
squares.forEach(square => square.addEventListener("mouseover", function (e){
    e.target.classList.add("hover");
}))

