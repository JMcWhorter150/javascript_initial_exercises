function min(a, b) {
    return (a<b) ? a : b;
}

// console.log(min(3, 14));
// console.log(min(14, 3));
// console.log(min(100, -14));

function checkMin(a, b) {
    return (a < b) || false;
}

// console.log(checkMin(1, 4));
// console.log(checkMin(5, 4));

function pow(num, exp) {
    let sum = num;
    for (let i=1; i<exp; i++) {
        sum *= num
    }
    return sum
}
// let userNumber = prompt("Enter a number. ")
// let userExponent = prompt("Enter the power you want to raise it to. ")

const listOfExpenses = [
    1234.56,
    89.42,
    9797.10,
    88.88,
    3.14
];
function sumExpenses(listOfExpenses) {
    let sum = 0;
    for (let expense of listOfExpenses) {
        sum += expense;
    }
    return sum;
}

// console.log(sumExpenses(listOfExpenses));

function sumExpensesOver20(listOfExpenses) {
    let sum = 0;
    for (let expense of listOfExpenses) {
        if (expense >=20) {
            sum += expense;
        }
    }
    return sum;
}

function getDiscountedList(listOfExpenses) {
    // setup, create base thing to add things to
    const discountedList = [];
    for (let expense of listOfExpenses) {
        if (expense >= 100) {
            discountedList.push(expense * 0.9);
        } else {
            discountedList.push(expense);
        }
    }
    return discountedList;
}

function alwaysDiscount(expenseArray) {
    let newArray = [];

    for (let cost of expenseArray) {
        cost = cost * 0.9;
        newArray.push(cost);
    }

    return newArray;
}

const expenses = [
    1234.56,
    89.42,
    9797.10,
    88.88,
    3.14,
    30.99,
    10.74,
    0.99,
    42.39,
    19.24,
    8.49,
    21.30,
    1.00,
    30.00
    ];

// how to transform one array into a corresponding array

// 1. Write a function that describes how to transform one, single item
function discountExpense(singleExpense) {
    // debugger;
    return singleExpense * 0.9;
}

// 2. Declare a variable to hold the new array
// 3. Take your original array, call its .map method
// When using debugger, put it into the function that modifies one, single item (this helps you see what is going on)
// let updatedExpenses = expenses.map(discountExpense);
// Why do you not have to call the function when using it to map
// If you weren't using a function, what happens?

function onlyOverTwentyDollars(expenseArray) {
    let newArray = [];

    for (let cost of expenseArray) {
        if (cost >= 20) {
            newArray.push(cost)
        }
    }

    return newArray;
}



// To use the filter method
// 1. Write the helper function that knows if one single element should be allowed or not
// "Gandolf function"
function isOverTwentyDollars(cost) {
    if (cost >= 20) {
        return true;
    } else {
        return false;
    }
}

// 2. Declare a variable to hold our new, unfiltered array.
let highExpenses = expenses.filter(isOverTwentyDollars);


// console.log(sumExpensesOver20(expenses));
// console.log(sumExpenses(expenses));
// console.log(getDiscountedList(expenses));
let updatedExpenses = expenses.map(discountExpense);

let filteredExpenses = onlyOverTwentyDollars(expenses);

// how to filter out certain items.


function add(n1, n2) {
    return n1 + n2;
}

function myReduce(anArray, helperFn, starterValue) {
    // 0. Expect to receive a starter value OR set the starter value to the [0] item of the array, and start the loop at [1]

    // 1. Create a variable that we'll use to store our work
    let cumulativeResult = starterValue; // undefined is the value of a variable that was never assigned.

    // 2. Iterate through the array that was passed in
    for (let item of myArray) {
        // 3. Apply the helperFn to the item
        cumulativeResult = helperFn(cumulativeResult, item);

        // 4. ???
        // There is no step 4!
    }
}

let result1 = myReduce(expenses, add, 0);
let result2 = expenses.reduce(add, 0);