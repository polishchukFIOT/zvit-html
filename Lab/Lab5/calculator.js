// Функція для додавання символу до відображення
function addToDisplay(value) {
    document.getElementById('display').value += value;
}

// Функція для обчислення виразу
function calculate() {
    let expression = document.getElementById('display').value;
    let result = eval(expression); // Використовуємо eval для обчислення виразу (враховуйте потенційні безпекові ризики)
    document.getElementById('display').value = result;
}

// Функція для очищення відображення
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Функція для взяття квадратного кореня
function sqrt() {
    let currentValue = parseFloat(document.getElementById('display').value);
    let result = Math.sqrt(currentValue);
    document.getElementById('display').value = result;
}

// Функція для піднесення до степеня
function power() {
    let currentValue = parseFloat(document.getElementById('display').value);
    let exponent = prompt("Enter the exponent:");
    let result = Math.pow(currentValue, exponent);
    document.getElementById('display').value = result;
}
