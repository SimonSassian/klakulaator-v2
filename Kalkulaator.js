// Initialize the calculator display
let displayValue = '';

// Function to append characters to the display
function appendToDisplay(value) {
    displayValue += value;
    updateDisplay();
}

// Function to clear the display
function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

// Function to evaluate and display the result
function calculate() {
    try {
        const result = eval(displayValue);
        displayValue = result.toString();
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}

// Function to update the display
function updateDisplay() {
    document.getElementById('display').value = displayValue;
}
