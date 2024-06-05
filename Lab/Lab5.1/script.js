const products = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Smartphone", price: 800 },
    { id: 3, name: "Tablet", price: 400 }
];

function getProductDetails(productId, successCallback, errorCallback) {
    const product = products.find(p => p.id === productId);
    if (product) {
        successCallback(product);
    } else {
        errorCallback(`Product with ID ${productId} not found.`);
    }
}

const onSuccess = (product) => {
    document.getElementById('output').textContent = `Product Name: ${product.name}, Price: ${product.price}`;
};

const onError = (error) => {
    document.getElementById('output').textContent = error;
};

document.getElementById('getProductButton').addEventListener('click', () => {
    const productId = parseInt(prompt("Enter product ID:"));
    getProductDetails(productId, onSuccess, onError);
});

// Task 2
const concerts = {
    Київ: new Date("2020-04-01"),
    Умань: new Date("2025-07-02"),
    Вінниця: new Date("2020-04-21"),
    Одеса: new Date("2025-03-15"),
    Хмельницький: new Date("2020-04-18"),
    Харків: new Date("2025-07-10"),
};

const getFutureConcertCities = (concerts) => {
    const today = new Date();
    return Object.entries(concerts)
        .filter(([city, date]) => date > today)
        .sort((a, b) => a[1] - b[1])
        .map(([city, date]) => city);
};

document.getElementById('getConcertCitiesButton').addEventListener('click', () => {
    const futureCities = getFutureConcertCities(concerts);
    document.getElementById('output2').textContent = `Future Concert Cities: ${futureCities.join(', ')}`;
});

// Task 3
const medicines = [
    { name: "Noshpa", price: 170 },
    { name: "Analgin", price: 55 },
    { name: "Quanil", price: 310 },
    { name: "Alphacholine", price: 390 },
];

const applyDiscountAndAddId = (medicines) => {
    return medicines.map((medicine, index) => {
        const discountPrice = medicine.price > 300 ? medicine.price * 0.7 : medicine.price;
        return { id: index + 1, name: medicine.name, price: discountPrice.toFixed(2) };
    });
};

document.getElementById('applyDiscountButton').addEventListener('click', () => {
    const discountedMedicines = applyDiscountAndAddId(medicines);
    const output = discountedMedicines.map(med => `ID: ${med.id}, Name: ${med.name}, Price: ${med.price} грн`).join('<br>');
    document.getElementById('medicinesOutput').innerHTML = output;
});
// Task 4
function Storage(initialItems) {
    this.items = initialItems;
}

// отримання масиву товарів
Storage.prototype.getItems = function() {
    return this.items;
};

// додавання нового товару
Storage.prototype.addItem = function(item) {
    this.items.push(item);
};

//  видалення товару
Storage.prototype.removeItem = function(item) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
        this.items.splice(index, 1);
    }
};

const arr = ["apple", "banana", "mango"];
const storage = new Storage(arr);

// Функція для відображення товарів
const displayItems = () => {
    document.getElementById('storageOutput').textContent = `Items: ${storage.getItems().join(', ')}`;
};

document.getElementById('showItemsButton').addEventListener('click', displayItems);

document.getElementById('addItemButton').addEventListener('click', () => {
    const newItem = prompt("Enter the name of the item to add:");
    if (newItem) {
        storage.addItem(newItem);
        displayItems();
    }
});

document.getElementById('removeItemButton').addEventListener('click', () => {
    const itemToRemove = prompt("Enter the name of the item to remove:");
    if (itemToRemove) {
        storage.removeItem(itemToRemove);
        displayItems();
    }
});

// Task 5
const tweets = [
    { id: "000", likes: 5, tags: ["js", "nodejs"] },
    { id: "001", likes: 2, tags: ["html", "css"] },
    { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
    { id: "003", likes: 8, tags: ["css", "react"] },
    { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

const countTags = (tweets) => {
    return tweets
        .flatMap(tweet => tweet.tags)
        .reduce((acc, tag) => {
            acc[tag] = (acc[tag] || 0) + 1;
            return acc;
        }, {});
};

document.getElementById('countTagsButton').addEventListener('click', () => {
    const tagCounts = countTags(tweets);
    const output = JSON.stringify(tagCounts, null, 2);
    document.getElementById('tagsOutput').textContent = `Tag Counts: ${output}`;
});

// Task 6
const checkBrackets = (str) => {
    const stack = [];
    const matchingBrackets = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let char of str) {
        if (matchingBrackets[char]) {
            stack.push(char);
        } else if (Object.values(matchingBrackets).includes(char)) {
            if (char !== matchingBrackets[stack.pop()]) {
                return false;
            }
        }
    }

    return stack.length === 0;
};

document.getElementById('checkBracketsButton').addEventListener('click', () => {
    const codeToCheck = prompt("Enter the code to check:");
    const isValid = checkBrackets(codeToCheck);
    document.getElementById('bracketsOutput').textContent = `Brackets are ${isValid ? 'correct' : 'incorrect'}.`;
});
