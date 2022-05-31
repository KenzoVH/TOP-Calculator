// Declaration of functions
const add = function(a, b) {
    return a + b;
};

const subtract = function(a, b) {
    return a - b;
};

const multiply = function(a, b) {
    return a * b;
};

const divide = function(a, b) {
    return a / b;
};

const operate = function(operator, a, b) {
    // Added if statement to make sure only an operator can be passed
    if (
        operator === add ||
        operator === subtract ||
        operator === multiply ||
        operator === divide 
    ) {
        return operator(a, b);
    }
    return "INVALID SELECTION"
};

// Variable to store display numbers
const display = document.querySelector("#display");

// Functions for buttons
const writeToDisplay = function(value) {
    display.textContent += value;
};

const clearDisplay = function() {
    display.textContent = "";
};

// Add events to buttons
const numberButtons = document.querySelectorAll('#number');
numberButtons.forEach(button => {
    const dataValue = button.getAttribute('data-key');
    button.addEventListener('click', () => {
        if (
            display.textContent === "+" ||
            display.textContent === "-" ||
            display.textContent === "*" ||
            display.textContent === "/"
        ) {
            clearDisplay();
        }
        writeToDisplay(dataValue);
    });
});

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', clearDisplay);

const equalsButton = document.querySelector('#equals');
clearButton.addEventListener('click', () => {
    const result = operate(operator, a, b);
    writeToDisplay(result);
});

const operatorButtons = document.querySelectorAll('#operator');
operatorButtons.forEach(button => {
    const operatorValue = button.getAttribute('data-key');
    const textValue = button.textContent;
    button.addEventListener('click', () => {
        clearDisplay();
        writeToDisplay(textValue);
    });
});