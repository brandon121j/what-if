const prompt = require('prompt-sync')();
const student = prompt('Enter Amount of Students ');
const numberStudent = Number(student);
// const groups = 3;
const left = numberStudent % 3;

if (left === 0) {
    const got = numberStudent / 3;
    console.log("Groups of three: ", got);
    console.log("Groups of two: ", 0);
}

else if (left === 1) {
    const got = (numberStudent - 4) / 3;
    console.log("Groups of three ", got);
    console.log("Groups of two ", 2);
}

else {
    const got = (numberStudent - 2) / 3;
    console.log("Groups of three ", got);
    console.log("Groups of two ", 1);
}
