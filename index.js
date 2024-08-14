let memory = 0;

function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function backspace() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function storeInMemory() {
    const display = document.getElementById('display');
    memory = eval(display.value) || 0;
    clearDisplay();
}

function recallFromMemory() {
    const display = document.getElementById('display');
    display.value += memory;
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Keyboard Support
document.addEventListener('keydown', function (event) {
    const key = event.key;
    if (key >= 0 && key <= 9 || key === '.' || key === '+' || key === '-' || key === '*' || key === '/') {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        backspace();
    } else if (key === 'Escape') {
        clearDisplay();
    }
});
