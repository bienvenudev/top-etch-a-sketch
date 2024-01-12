const container = document.querySelector('.container');
const choiceBtn = document.querySelector('.choice-btn');

createGrid();

function createGrid(num = 16) {
	const totalSquares = num * num;
  const squaresGrid = 500 / num; // 500(container's width) / by squares provided to get the width and height of the new Div

	for (let i = 0; i < totalSquares; i++) {
		const newDiv = document.createElement('div');
		
		newDiv.setAttribute('class', 'grid-element');

		newDiv.style.height = `${squaresGrid}px`;
		newDiv.style.width = `${squaresGrid}px`;
		
		container.appendChild(newDiv);

		};

		document.querySelectorAll('.grid-element').forEach((grid) => {
			grid.addEventListener('mouseenter', function() {
				grid.style.background = 'black';
			})
	})
}

function removeItem() {
	document.querySelectorAll('.grid-element').forEach((item) => {
		item.remove();
	});
}

choiceBtn.addEventListener('click', function() {
		
	const numOfSquare = +prompt('Enter the number of squares per side?');

	if (numOfSquare > 64) {
					alert(`You can't exceed 64 squares!`);
					return;
		}

	removeItem();
	
	createGrid(numOfSquare);

});
