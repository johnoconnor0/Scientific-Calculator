// Helper function to convert degrees to radians
function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}

// Helper function to convert radians to degrees
function toDegrees(radians) {
    return radians * (180 / Math.PI);
}

// Calculate factorial of a number
function factorial(n) {
    if (n < 0) return NaN; // Factorial is undefined for negative numbers
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Trigonometric functions that respect degree/radian toggle
function calculateTrig(func, value, isRadians = true) {
    const input = isRadians ? value : toRadians(value);
    return Math[func](input);
}

// Attach functions to the global namespace
window.mathUtils = {
    toRadians,
    toDegrees,
    factorial,
    calculateTrig,
};
