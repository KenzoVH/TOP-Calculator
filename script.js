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
}

// Variable to store display numbers