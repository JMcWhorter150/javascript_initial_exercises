// 1. Map: Translate from one array to another

// JavaScript "dictionaries" are key value pairs surrounded by curly braces
const recipes = {
    // key and values are seperated by a colon
    "🐮": "🍔", // keys are surrounded by quotes
    "🥔": "🍟",
    "🐔": "🍗",
    "🌽": "🍿",
    // if you're not using emojis or other special characters, the key doesn't need the quotes! Unless your keys have dashes, dots, anything not valid as a variable name.
    cow: "burger",
    potato: "fries",
    chicken: "fried chicken",
    corn: "popcorn",
    "alienFood": {
        "rice": "🍚",
        "beans": "🌶",
    },
};

const ingredients = [
    "🐮",
    "🥔",
    "🐔",
    "🌽"
];

// Note! The order of your key/value pairs is never guaranteed. The language and your browser will optimize how it's storing that information.

// To retrieve a value, you can:
// 1. use square brackets and specify the name of the key

// Key names are __ALWAYS__ strings whether you choose to put quotes around them or not.
// recipesObj["potato"];
const anIngredient = "cow";
// recipesObj[anIngredient];
// You will use square brackets when your key name is in a variable.
// 2. use the dot notation
recipes.chicken;

// Nested retrieval:
recipes.alienFood.beans;
recipes["alienFood"]["beans"];
recipes.alienFood["beans"];
recipes["alienFood"].beans;
recipes.alienFood.beans;
// all mean the same thing


// Use Object.keys() to get an array of key names
for (let ingredient of Object.keys(recipes)) {
    // Use the bracket syntax when your key name is a variable
    console.log(ingredient);
    console.log(recipes[ingredient]);
}

// To update a spot in an object, just reassign that spot.

recipes.potato = "potato salad";
recipes["potato"] = "baked potato";

// If a key doesn't exist yet, it adds a new key value pair to the object
recipes["🌾"] = "🍺";

recipes.wheat = "🍺";

delete recipes.potato;

function isVegetarian(item) {
    const animals = ["🐔", "🐮", "cow", "chicken"];
    return (!(animals.includes(item)))
}

const ingredientsArray = [
    "🐮",
    "🥔",
    "🐔",
    "🌽",
];

function cook(ingredient) {
    const recipes = {
        "🐮": "🍔",
        "🥔": "🍟",
        "🐔": "🍗",
        "🌽": "🍿",
    };
    return recipes[ingredient];
}


// doesn't work for some unknown reason
// nevermind, changed in to includes and changed some things around. Works now
let vegetarianRecipes = Object.keys(recipes).filter(isVegetarian);

const foods = ingredientsArray.map(cook);