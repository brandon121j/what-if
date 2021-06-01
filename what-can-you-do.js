const prompt = require('prompt-sync')();
const age = prompt('How old are you? ');
const numberAge = Number(age);
// const drive = [16, 17].includes(1);
// const vote = [18, 19, 20, 21, 22, 23, 24];

if (numberAge <= 15) {
    console.log("You can't drive")
}
if (numberAge == 16 || numberAge == 17 ) {
    console.log("You can drive but not vote")
}
if (numberAge == 18 || numberAge == 19 || numberAge == 20 || numberAge == 21 || numberAge == 22 || numberAge == 23 || numberAge == 24 ) {
    console.log("You can vote but not rent a car")
}
if (numberAge > 25) {
    console.log("You can do pretty much anything")
}
if (isNaN(numberAge)) {
    console.log ("Error")
}
