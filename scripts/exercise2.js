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
    for (let asteriskNumber = 0; asteriskNumber<(text.length + 4); asteriskNumber++) {
        topBanner += "*";
    }
    console.log(topBanner);
    console.log(`* ${text} *`);
    console.log(topBanner);
}

// printBanner('Welcome to DigitalCrafts');