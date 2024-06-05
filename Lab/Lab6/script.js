// TASK 4
const countButton = document.getElementById('countButton');
        countButton.addEventListener('click', countCategories);

        function countCategories() {
            const categories = document.querySelectorAll('#categories .item');
            console.log(`Total Categories: ${categories.length}`);

            categories.forEach(category => {
                const categoryName = category.querySelector('h2').textContent;
                const categoryItems = category.querySelectorAll('ul li');
                console.log(`Category: ${categoryName}, Items: ${categoryItems.length}`);
            });
        }
// TASK 5
        const loginForm = document.querySelector('.login-form');
        const submitButton = document.getElementById('submitButton');

        submitButton.addEventListener('click', function(event) {
            event.preventDefault(); // Щоб сторінка не перезавантажувалася при відправці форми

            const emailInput = loginForm.elements['email'];
            const passwordInput = loginForm.elements['password'];

            const emailValue = emailInput.value.trim();
            const passwordValue = passwordInput.value.trim();

            if (!emailValue || !passwordValue) {
                alert('All form fields must be filled in');
            } else {
                const formData = {
                    email: emailValue,
                    password: passwordValue
                };

                console.log(formData);
                loginForm.reset();
            }
        });
    
// TASK 6
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

const colorSpan = document.querySelector('.color');
const changeColorButton = document.querySelector('.change-color');
const resetColorButton = document.querySelector('.reset-color');

changeColorButton.addEventListener('click', function() {
    const randomHexColor = getRandomHexColor();
    const rgbColor = hexToRgb(randomHexColor);
    document.body.style.backgroundColor = rgbColor;
    colorSpan.textContent = rgbColor;
});

resetColorButton.addEventListener('click', function() {
    document.body.style.backgroundColor = '';
    colorSpan.textContent = '-';
});

function hexToRgb(hex) {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgb(${r}, ${g}, ${b})`;
}

// TASK 7
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

const controls = document.getElementById('controls');
const createButton = controls.querySelector('[data-create]');
const destroyButton = controls.querySelector('[data-destroy]');
const boxesContainer = document.getElementById('boxes');

createButton.addEventListener('click', createBoxes);
destroyButton.addEventListener('click', destroyBoxes);

function createBoxes() {
    const amountInput = controls.querySelector('input[type="number"]');
    const amount = parseInt(amountInput.value);

    if (amount >= 1 && amount <= 100) {
        const fragment = document.createDocumentFragment();

        for (let i = 0; i < amount; i++) {
            const box = document.createElement('div');
            const size = 30 + i * 10;
            box.style.width = `${size}px`;
            box.style.height = `${size}px`;
            box.style.backgroundColor = getRandomHexColor();
            box.style.marginBottom = '10px';
            fragment.appendChild(box);
        }

        boxesContainer.innerHTML = '';
        boxesContainer.appendChild(fragment);

        amountInput.value = '';
    } else {
        alert('Please enter a number between 1 and 100.');
    }
}

function destroyBoxes() {
    boxesContainer.innerHTML = '';
}