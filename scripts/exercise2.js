function printNumbers(startNumber, endNumber) {
    for (let start = startNumber; start<(endNumber + 1); start++) {
        console.log(start);
    }
}

// printNumbers(1, 10);

function printSquare(size) {
    // prints the the *** string size times
    for (let i = 0; i<size; i++) {
        let emptyString = "";
        // creates the * string to print
        for (let j = 0; j<size; j++) {
            emptyString += "*";
        }
        console.log(emptyString);
    }
}

// printSquare(6);

function printBox(width, height) {
    let emptyString = "";
    // creates top and bottom parts of box made of *
    for (let i = 0; i<width; i++) {
        emptyString += "*";
    }
    // prints top * of the box
    console.log(emptyString);
    // prints middle lines of box
    for (let j = 0; j<(height - 2); j++) {
        // starts the * with an initial star
        let middleString = "*";
        // adds the correct amount of empty space
        for (let h = 0; h<width - 2; h++) {
            middleString += " ";
        }
        // adds the last * on the far side
        middleString += "*";
        // prints the actual middle line each time
        console.log(middleString);
    }
    // prints the bottom * of the box
    console.log(emptyString);
}

// printBox(6, 4);

function printBanner(text) {
    let topBanner = "";
    // creates top banner length + 4 due to the spaces and * on each side
    for (let asteriskNumber = 0; asteriskNumber<(text.length + 4); asteriskNumber++) {
        topBanner += "*";
    }
    console.log(topBanner);
    console.log(`* ${text} *`);
    console.log(topBanner);
}

// printBanner('Welcome to DigitalCrafts');

function factors(number) {
    const newArray = []
    for (let factor = 1; factor < (number + 1); factor++) {
        if (number % factor === 0) {
            newArray.push(factor);
        }
    }
    return newArray;
}

// to find the factors of 120, I first start at 1, then I divide 120 by 1. If it is divisible by 1, I add 1 to the list. Then I go to 2. If 120 divided by number has no remainder, then I ........
// console.log(factors(120));

function cipher(string, offset) {
    let cleanString = string.toLowerCase();
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let newString = "";
    for (let character of cleanString) {
        if (character === " ") {
            newString += " ";
        } else {
            newString += alphabet[(alphabet.indexOf(character) + offset) % 26];
        }
    }
    return newString;
}

// console.log(cipher('Genius without education is like silver in the mine', 13))

// console.log(cipher('travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar', 13))

function leetspeak(string) {
    string = string.toUpperCase();
    let leetString = "";
    for (let character of string) {
        if (character === "A") {
            leetString += "4";
        } else if (character === "E") {
            leetString += "3";
        } else if (character === "G") {
            leetString += "6";
        } else if (character === "I") {
            leetString += "1";
        } else if (character === "O") {
            leetString += "0";
        } else if (character === "S") {
            leetString += "5";
        } else if (character === "T") {
            leetString += "7";
        } else {
            leetString += character;
        }
    }
    return leetString
}

// console.log(leetspeak("this is a sentence of random letters"));