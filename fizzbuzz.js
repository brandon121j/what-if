const prompt = require('prompt-sync')();
const fizz = prompt('Enter a number ');
const numberFizz = Number(fizz);

if (numberFizz % 15 === 0) {
    console.log("FizzBuzz")
}

else if (numberFizz % 3 == 0) {
    console.log("Fizz")
}

else if (numberFizz % 5 == 0) {
    console.log("Buzz")
}