function printNumbers(startNumber, endNumber) {
    for (let start = startNumber; start<(endNumber + 1); start++) {
        console.log(start);
    }
}

// printNumbers(1, 10);

function printSquare(size) {
    for (let i = 0; i<size; i++) {
        let emptyString = ""
        for (let j = 0; j<size; j++) {
            emptyString += "*"
        }
        console.log(emptyString);
    }
}

// printSquare(6);