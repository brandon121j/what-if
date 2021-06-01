const prompt = require('prompt-sync')();
const weight = prompt('Enter Earth Weight ');
const planet = prompt('Enter Planet Number ')


if (planet == 1) {
    console.log("The relative gravity of Venus would bring your weight to ", (weight * 0.78))
}

if (planet == 2) {
    console.log("The relative gravity of Mars would bring your weight to ", (weight * 0.39))
}

if (planet == 3) {
    console.log("The relative gravity of Jupiter would bring your weight to ", (weight * 2.65))
}

if (planet == 4) {
    console.log("The relative gravity of Saturn would bring your weight to ", (weight * 1.17))
}

if (planet == 5) {
    console.log("The relative gravity of Uranus would bring your weight to ", (weight * 1.05))
}

if (planet == 6) {
    console.log("The relative gravity of Neptune would bring your weight to ", (weight * 1.23))
}

if (planet > 6) {
    console.log("Planet must be a numeric value 1-6")
}

if (isNaN(planet)) {
    console.log("Planet must be a numeric value 1-6")
}

if (isNaN(weight)) {
    console.log("Weight must be a numberic value")
}