// Функція для обчислення максимального значення у масиві
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// Функція для створення масиву В
function calculateB(arr) {
    const max = findMax(arr);
    const b = [];
    for (let i = 0; i < arr.length; i++) {
        b.push(max * arr[i]);
    }
    return b;
}

// Функція для сортування масиву за зменшенням методом вставки
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] < current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
}

const outputDiv = document.getElementById('output');

// Запитуємо кількість елементів масиву А від користувача
const count = parseInt(prompt('Введіть кількість елементів масиву A:'));

// Створюємо порожній масив A
const A = [];

// Заповнюємо масив A значеннями, введеними користувачем
for (let i = 0; i < count; i++) {
    const element = parseInt(prompt(`Введіть ${i + 1}-й елемент масиву A:`));
    A.push(element);
}

// Виводимо вхідний масив
outputDiv.innerHTML += '<p>Вхідний масив A: ' + A.join(', ') + '</p>';

// Викликаємо функцію для обчислення масиву В
const B = calculateB(A);
outputDiv.innerHTML += '<p>Вихідний масив B: ' + B.join(', ') + '</p>';

// Сортуємо вихідний масив за зменшенням методом вставки
const sortedB = insertionSort([...B]); // передаємо копію масиву, оскільки insertionSort змінює початковий масив
outputDiv.innerHTML += '<p>Відсортований масив B за зменшенням: ' + sortedB.join(', ') + '</p>';
