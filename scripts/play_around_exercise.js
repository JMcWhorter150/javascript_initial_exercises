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

// how to transform one array into a corresponding array

// 1. Write a function that describes how to transform one, single item
function discountExpense(singleExpense) {
    debugger;
    return singleExpense * 0.9;
}

// 2. Declare a variable to hold the new array
// 3. Take your original array, call its .map method
// When using debugger, put it into the function that modifies one, single item (this helps you see what is going on)
// let updatedExpenses = expenses.map(discountExpense);

function main() {
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
    // console.log(sumExpensesOver20(expenses));
    // console.log(sumExpenses(expenses));
    // console.log(getDiscountedList(expenses));
    let updatedExpenses = expenses.map(discountExpense);
}

main();

