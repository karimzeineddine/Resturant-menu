let sandwiches = [
    {
        name: "Classic Club burger",
        price: 6,
        details: "Layers of turkey, ham, crispy bacon, lettuce, tomato, and mayonnaise on toasted multigrain bread. Served with a side of chips.",
        imageSrc: "images/homemade-burgers-on-white-background-600nw-2252720711.webp"
    },
    {
        name: "Classic Tawouk sandwich ",
        price: 5,
        details: "Grilled chicken breast served with a side of roasted vegetables and seasoned with a light garlic herb sauce. Accompanied by a serving of wild rice and a wedge of lemon for a refreshing zest.",
        imageSrc: "images/shawarma.jpg"
    },
    {
        name: "Classic Cripsy plate ",
        price: 9.99,
        details: "8 pieces of our freshly prepared Extra Crispy Tenders served with 4 dipping sauces.",
        imageSrc: "images/Fried-Crunchy-Chicken-PNG-Download-Image.png"
    },
    {
        name: "Grilled Chicken",
        price: 11.99,
        details: "2 garlic sauce + 1 mexican sauce + 2 pickles",
        imageSrc: "images/Farouj.jpg"
    },
    {
        name: "Falefel",
        price: 2.99,
        details: " warm pita bread stuffed with crispy hot falafel balls, surrounded by cool and crunchy diced tomatoes, cucumbers, and onions, and drenched with nutty tahini sauce.",
        imageSrc: "images/Falefel.webp"
    },
    {
        name: "Borito",
        price: 6.99,
        details: "tortilla wrapped around a mixed filling of such ingredients as meat, cheese, beans, and vegetables.",
        imageSrc: "images/borito.jfif"
    }
];
let drinks = [
    {
        name: "Pepsi",
        price: 0.99,
        details: "1 can",
        imageSrc: "images/pepsi.png"
    },
    {
        name: "7-up",
        price: 0.99,
        details: "1 can",
        imageSrc: "images/7-up.jpg"
    },
    {
        name: "Water",
        price: 0.49,
        details: "1 bottle",
        imageSrc: "images/Water.avif"
    },
    {
        name: "Redbull",
        price: 2.99,
        details: "1 can",
        imageSrc: "images/redbull.jfif"
    },
    {
        name: "Fresh juice",
        price: 1.49,
        details: "1 glass",
        imageSrc: "images/fresh juice.png"
    },
    {
        name: "Lemonade",
        price: 1.99,
        details: "1 drink",
        imageSrc: "images/lemonade.jfif"
    },
];


let form = document.querySelector(".add-item-container");
let category = document.getElementById("category");
let image = document.getElementById("image");
let name = document.getElementById("name");
let price = document.getElementById("price");
let details = document.getElementById("details");
let errorMessageDiv = document.getElementById("error");


let sandwichItems = document.getElementById("sandwich-items");
let drinkItems = document.getElementById("drink-items");


function renderItems() {
    sandwichItems.innerHTML = '';
    sandwiches.forEach((sandwich, index) => {
        sandwichItems.innerHTML += `
            <div class="item" data-index="${index}">
                <p class="close-item" onclick="removeSandwich(${index})">X</p>
                <div class="hello">
                    <img src="${sandwich.imageSrc}" alt="${sandwich.name}">
                </div>
                <h2>${sandwich.name}</h2>
                <p class="price">$${sandwich.price}</p>
                <p class="details">${sandwich.details}</p>
            </div>
        `;
    });

    drinkItems.innerHTML = '';
    drinks.forEach((drink, index) => {
        drinkItems.innerHTML += `
            <div class="item" data-index="${index}">
                <p class="close-item" onclick="removeDrink(${index})">X</p>
                <div class="hello">
                    <img src="${drink.imageSrc}" alt="${drink.name}">
                </div>
                <h2>${drink.name}</h2>
                <p class="price">$${drink.price}</p>
                <p class="details">${drink.details}</p>
            </div>
        `;
    });
}

// Function to remove a sandwich
function removeSandwich(index) {
    sandwiches.splice(index, 1);  // Remove the sandwich at the given index
    renderItems();  // Re-render the items after removal
}

// Function to remove a drink
function removeDrink(index) {
    drinks.splice(index, 1);  // Remove the drink at the given index
    renderItems();  // Re-render the items after removal
}



function remove() {
    form.classList.add('hidden');
}

function add() {
    main.s
    form.classList.remove('hidden');
}

// Validate input fields
function validateInputs() {
    let isValid = true;
    errorMessageDiv.innerHTML = '';

    if (name.value.trim() === '') {
        isValid = false;
        errorMessageDiv.innerHTML += '<p>Please enter product name.</p>';
    }
    if (price.value.trim() === '') {
        isValid = false;
        errorMessageDiv.innerHTML += '<p>Please enter product price.</p>';
    }
    if (details.value.trim() === '') {
        isValid = false;
        errorMessageDiv.innerHTML += '<p>Please enter product details.</p>';
    }
    if (image.files.length === 0) {
        isValid = false;
        errorMessageDiv.innerHTML += '<p>Please select an image.</p>';
    }
    if (category.value === '') {
        isValid = false;
        errorMessageDiv.innerHTML += '<p>Please select a category.</p>';
    }

    if (errorMessageDiv.innerHTML) {
        errorMessageDiv.style.display = 'block';
    } else {
        errorMessageDiv.style.display = 'none';
    }

    return isValid;
}

function addItemToArray(imageSrc, name, price, details, category) {
    let newItem = {
        name: name,
        price: parseFloat(price), 
        details: details,
        imageSrc: imageSrc
    };

    if (category === 'sandwiches') {
        sandwiches.push(newItem);
    } else if (category === 'drinks') {
        drinks.push(newItem);
    }

    renderItems();  
}


document.querySelector(".add-item-form").addEventListener("submit", function (event) {
    event.preventDefault();

    if (validateInputs()) {
        // Create a local URL for the image
        let imageURL = URL.createObjectURL(image.files[0]);

        // Add the new item to the corresponding array
        addItemToArray(imageURL, name.value, price.value, details.value, category.value);

        // Clear the form and hide it
        form.reset();
        remove();
    }
});

// Initial render of items (which will be empty at first)
renderItems();
