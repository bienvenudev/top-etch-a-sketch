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
				//rainbow colors
				// const randomColor1 = Math.floor(Math.random() * 255) + 1;
				// const randomColor2 = Math.floor(Math.random() * 255) + 1;
				// const randomColor3 = Math.floor(Math.random() * 255) + 1;
				// grid.style.background = `rgb(${randomColor1},${randomColor2},${randomColor3})`;

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
	
	if (!Number.isInteger(numOfSquare)) {
		alert("Sorry, only numbers are allowed!");
		return;
	}

	if (numOfSquare < 1) {
		alert("Sorry, you can't enter a number less than 1!");
		return;
	}

	if (numOfSquare > 64) {
		alert(`You can't exceed 64 squares!`);
		return;
		}

	removeItem();
	
	createGrid(numOfSquare);
});
