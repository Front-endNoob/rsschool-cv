// This our elements
const numbers = document.querySelectorAll('.number');
const mathOperators = document.querySelectorAll('.operator');
const clearOperators = document.querySelectorAll(".clear-btn");
const result = document.getElementById("result");
const decimal = document.getElementById("decimal");
const display = document.getElementById("display");


// This state variables 

// If you entered a new number (after the operation sign)
let newNumber = false;

// Current entered value
let currNumber = 0;

// This variable is responsible for waiting \ saving
// the current operation
let expectationOper = '';


// Add event for numbers
numbers.forEach(el => {
	el.addEventListener('click', e => {
		if(newNumber) {
			display.value = e.target.textContent;
			newNumber = false;
		}else if(display.value === '0') {
			display.value = e.target.textContent;
		}else {
			display.value += e.target.textContent;
		}
	})
});

// Add event for Math operators
mathOperators.forEach(el => {
	el.addEventListener('click', e => {
		let memory = display.value;

		if(newNumber && expectationOper !== '=') {
			display.value = currNumber;
		}else {
			newNumber = true;
			if(expectationOper === '+') {
				currNumber += memory;
			}else if(expectationOper === '-') {
				currNumber -= memory;
			}else if(expectationOper === '*') {
				currNumber *= memory;
			}else if(expectationOper === '/') {
				currNumber /= memory;
			}else {
				currNumber = +memory;
			}
			display.value = currNumber;
			expectationOper = e.target.textContent;
		}
	})
});

// Add event for clear operators
clearOperators.forEach(el => {
	el.addEventListener('click', e => {
		if(e.target.textContent === 'ce') {
			display.value = '0';
			newNumber = true;
		}else if(e.target.textContent === 'c') {
			display.value = '0';
			newNumber = true;
			currNumber = 0;
			expectationOper = '';
		}
	})
});

// Add event for decimal
decimal.addEventListener('click', e => {
	let decMemory = display.value;

	if(newNumber) {
		decMemory = '0.';
		newNumber = false;
	}else {
		if(decMemory.indexOf('.') === -1) {
			decMemory += '.'
		}
	}
	display.value = decMemory;
})