const container = document.querySelector('.container'); // selects the body
container.style.cssText = 'height: 900px; width: 900px; border: 2px solid black; display: flex; flex-wrap: wrap'

// Loop for creating 16x16 div grid
for (i = 0; i < 256; i++){
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.cssText = "border: 1px solid black; height: 54.25px; width: 54.25px"; // (900 - 2x1 - 15x2)/16
    container.appendChild(square);
}

// Creating the event listener for the hover effect,turns colour red
const squares = document.querySelectorAll('.square'); // node list for all squares
squares.forEach(square => square.addEventListener("mouseover", function (e){
    e.target.classList.add("hover");
}))

