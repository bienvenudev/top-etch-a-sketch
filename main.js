const container = document.querySelector('.container');
const choiceBtn = document.querySelector('.choice-btn');


choiceBtn.addEventListener('click', function() {

	numOfSquares = +prompt('Enter the number of squares per side?');

	if (document.querySelector('.grid-element')) {
	 container.removeChild('grid-element');
		// return;
	}

	if (numOfSquares > 100) {
			alert(`You can't exceed 100 squares!`);
			return;
		}

	const totalSquares = numOfSquares * numOfSquares;

	const squaresGrid = 500 / numOfSquares; 


for (let i = 0; i < totalSquares; i++) {
	const newDiv = document.createElement('div');
	
	newDiv.setAttribute('class', 'grid-element');

	newDiv.style.height = `${squaresGrid}px`;
	newDiv.style.width = `${squaresGrid}px`;
	
	container.appendChild(newDiv);

	newDiv.addEventListener('mouseenter', function() {

	newDiv.style.background = 'black';
});

}});
