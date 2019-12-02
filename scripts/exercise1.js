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
        return billAmount * 0.20 + billAmount;
    } else if (levelOfService === "fair") {
        return billAmount * 0.15 + billAmount;
    } else {
        return billAmount * 0.10 + billAmount;
    }
}

console.log(tipAmount(100, 'good'));
console.log(tipAmount(100, 'fair'));
console.log(tipAmount("stuff", 'good'));