const display = document.getElementById('display');
const errorMessage = document.getElementById('error-message');
const historyDiv = document.getElementById('history');
let memory = 0;
let isRadians = true;

// Append value to the display
function appendValue(value) {
    display.value += value;
    clearError();
}

// Clear the display
function clearDisplay() {
    display.value = '';
    clearError();
}

// Backspace
function backspace() {
    display.value = display.value.slice(0, -1);
    clearError();
}

// Clear error messages
function clearError() {
    errorMessage.textContent = '';
}

// Evaluate the expression
function calculate() {
    try {
        display.value = eval(display.value);
        addToHistory(display.value);
    } catch (err) {
        displayError('Invalid Expression');
    }
}

// Add to history
function addToHistory(expression) {
    const entry = document.createElement('div');
    entry.textContent = expression;
    historyDiv.appendChild(entry);
}

// Display an error
function displayError(message) {
    errorMessage.textContent = message;
}

// Memory functions
function memoryStore(value) {
    memory = parseFloat(value);
}

function memoryRecall() {
    display.value += memory;
}

function memoryClear() {
    memory = 0;
}

// Factorial function
function factorial(n) {
    return n < 0 ? NaN : n <= 1 ? 1 : n * factorial(n - 1);
}

// Toggle Degrees/Radians
document.getElementById('deg-rad-toggle').addEventListener('click', function () {
    isRadians = !isRadians;
    this.textContent = isRadians ? 'Rad' : 'Deg';
});
