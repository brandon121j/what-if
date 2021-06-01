const prompt = require('prompt-sync')();
const day = prompt('Enter Day of Week in Number Format ');
const numberDay = Number(day);
Mon = "Monday";
Tue = "Tuesday";
Wed = "Wednesday";
Thu = "Thursday";
Fri = "Friday";
Sat = "Saturday"
Sun = "Sunday";
Oth = "Must be a numeric value between 1-7";

if (numberDay == 1) {
    console.log(Mon);
}
if (numberDay == 2) {
    console.log(Tue);
}
if (numberDay == 3) {
    console.log(Wed);
}
if (numberDay == 4) {
    console.log(Thu);
}
if (numberDay == 5) {
    console.log(Fri)
}
if (numberDay == 6) {
    console.log(Sat)
}
if (numberDay == 7) {
    console.log(Sun)
}
if (isNaN(numberDay)) {
    console.log(Oth);
}
if (numberDay > 7) {
    console.log("Not a valid day of the week")
}
