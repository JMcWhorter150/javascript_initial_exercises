function hello(name="world") {
    console.log(`Hello, ${name}!`);
}
console.log(hello("Mustache"));
console.log(hello());

function madlib(name, subject) {
    return `${name}'s favorite subject in school is ${subject}.`;
}

console.log(madlib("Joe", "math"));

function tipAmount(billAmount, levelOfService) {
    if (levelOfService === "good") {
        return billAmount * 0.20;
    } else if (levelOfService === "fair") {
        return billAmount * 0.15;
    } else {
        return billAmount * 0.10;
    }
}

console.log(tipAmount(100, 'good'));
console.log(tipAmount(100, 'fair'));
console.log(tipAmount("stuff", 'good'));

function totalAmount(billAmount, levelOfService) {
    if (levelOfService === "good") {
        return billAmount * 0.20 + billAmount;
    } else if (levelOfService === "fair") {
        return billAmount * 0.15 + billAmount;
    } else {
        return billAmount * 0.10 + billAmount;
    }
}

console.log(totalAmount(100, 'good'));
console.log(totalAmount(40, 'fair'));

function splitAmount(billAmount, levelOfService, numberOfPeople) {
    if (levelOfService === "good") {
        return (billAmount * 0.20 + billAmount)/numberOfPeople;
    } else if (levelOfService === "fair") {
        return (billAmount * 0.15 + billAmount)/numberOfPeople;
    } else {
        return (billAmount * 0.10 + billAmount)/numberOfPeople;
    }
}

console.log(splitAmount(100, 'good', 5));
console.log(splitAmount(40, 'fair', 2));