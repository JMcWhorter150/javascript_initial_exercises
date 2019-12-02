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
    // since I don't have uppercase and lowercase in my alphabet, this makes the string all lowercase
    let cleanString = string.toLowerCase();
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let newString = "";
    for (let character of cleanString) {
        // could be changed to see if character is in alphabet. If so, then do the offsetting. Else, return the character. Catches more errors
        if (character === " ") {
            newString += " ";
        } else {
            // from inside out, finds the alphabet index of the character in the string, adds the offset amount, converts this new number to a number inside the range of the alphabet ( % 26), then finds what new letter in the alphabet is at that position, then adds it to the new string.
            newString += alphabet[(alphabet.indexOf(character) + offset) % 26];
        }
    }
    return newString;
}

// console.log(cipher('Genius without education is like silver in the mine', 13))

// console.log(cipher('travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar', 13))

function leetspeak(string) {
    // cleans the string so that it is all uppercase
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
            // catches errors since all other characters just get added back to the new leetString
            leetString += character;
        }
    }
    return leetString
}

// console.log(leetspeak("this is a sentence of random letters"));

function longVowels(string) {
    // makes string lowerCase
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    string = string.toLowerCase();
    let newString = string
    // if there are multiple vowels in a row, this removes them
    for (let index = 0; index<string.length; index++) {
        if (vowels.includes(string[index]) && (string[index] === string[index+1])) {
            newString = string.replace(string[index], (string[index] + string[index] + string[index] + string[index]));
        }
    }
    return newString;
}

// console.log(longVowels('cheese'));
// console.log(longVowels('man'));


    // All the below was unnecessary to solve the problem. It makes each vowel 5 times.
//     let longString = "";
//     for (let character of string) {
//         // checks to make sure character is a vowel
//         if (vowels.includes(character)) {
//             // adds 5 vowels. Change 5 to a variable, and the function can change the number of vowels to any amount
//             for (let i = 0; i < 5; i++) {
//                 longString += character;
//             }
//         } else {
//             longString += character;
//         }
//     }
//     return longString;
// }

// console.log(longVowels('college'));
// console.log(longVowels('cheese'));
function sumNumbers(array) {
    let sum = 0;
    for (let number of array) {
        sum += number;
    }
    return sum;
}

// console.log(sumNumbers([1, 4, 8]))

function positiveNumbers(array) {
    newArray = [];
    for (let number of array) {
        if (number >= 0) {
            newArray.push(number);
        }
    }
    return newArray;
}

// console.log(positiveNumbers([1, -3, 5, -3, 0]));
// console.log(positiveNumbers([1, 2, 3]));
// console.log(positiveNumbers([-1, -2, -3]));

function matrixAdd(matrix1, matrix2) {
    let newMatrix = [[], []];
    // sets i to the row number
    for (let i=0; i<matrix1.length; i++) {
        // sets j to the column (or array index) number
        for (let j=0; j<matrix1[0].length; j++) {
            // from inside out, gets the value at each spot in matrix1, starting at the top left, and adds it to the value at the same position in matrix 2. Then it adds this value to the correct place in newMatrix
            newMatrix[i].push(matrix1[i][j] + matrix2[i][j]);
        }
    }
    return newMatrix;
}

// console.log(matrixAdd([[1, 3], [2, 4]], [[5, 2], [1, 0]]));

function matrixMultiply(matrix1, matrix2) {
    let newMatrix = [[], []];
    for (let i=0; i<matrix1.length; i++) {
        for (let j=0; j<matrix1[0].length; j++) {
            newMatrix[i].push(matrix1[i][0] * matrix2[0][j] + matrix1[i][1] * matrix2[1][j]);
        }
    }
    return newMatrix;
}

// console.log(matrixMultiply([[1, 7], [2, 4]], [[3, 3], [5, 2]]))
// console.log(matrixMultiply([[2, 4], [3, 4]], [[5, 2], [3, 1]]))

function rockPaperScissors(throw1, throw2) {
    const throwList = ['rock', 'paper', 'scissors'];
    const throwList2 = ['paper', 'scissors', 'rock']
    if (throwList.indexOf(throw1) === throwList.indexOf(throw2)) {
        return "draw";
    } else if (throwList.indexOf(throw1) === throwList2.indexOf(throw2)) {
        return "player2";
    } else {
        return "player1";
    }
}

// console.log(rockPaperScissors('rock', 'scissors'));
// console.log(rockPaperScissors('rock', 'paper'));
// console.log(rockPaperScissors('paper', 'paper'));

function ticTacToe(matrix) {
    const players = ["X", "O"];
    // check columns
    // check rows
    for (let player of players) {
        for (let i=0; i<3; i++) {
            //check row
            if ((matrix[i][0] === player) && (matrix[i][1] === player) && (matrix[i][2] === player)) {
                return player;
                //check column
            } else if ((matrix[0][i] === player) && (matrix[1][i] === player) && (matrix[2][i] === player)) {
                return player;
            }
        }
        // right diagonal
        if ((matrix[2][0] === player) && (matrix[1][1] === player) && (matrix[0][2] === player)) {
            return player;
        // left diagonal
        } else if ((matrix[0][0] === player) && (matrix[1][1] === player) && (matrix[2][2] === player)) {
            return player;
        }
    }
    return "null";
}
console.log(ticTacToe([
    ['O', 'O', 'O'],
    ['X', null, 'X'],
    [null, 'X', null]
    ]));
console.log(ticTacToe([
    ['O', 'X', 'O'],
    ['O', 'X', null],
    [null, 'X', null]
    ]));
console.log(ticTacToe([
    ['O', 'X', 'O'],
    ['O', 'O', null],
    [null, 'X', 'X']
    ]));

console.log(ticTacToe([
    ['O', 'X', 'O'],
    ['O', 'O', "X"],
    [null, 'X', 'O']
    ]));