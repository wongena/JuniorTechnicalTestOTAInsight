const squareContainer = document.querySelector('.squareContainer');

const addSquare = () => {
    const square = document.createElement('div');
    square.classList.add('addedSquare', 'square');
    squareContainer.insertBefore(square, squareContainer.firstChild);
}