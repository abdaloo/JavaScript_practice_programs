// Problem: Store your birth year and current year. Calculate and log your age.

let birthYear = 2003;
let currentYear = new Date;

let currentAge = currentYear.getFullYear() - birthYear;

console.log("My age is: " + currentAge)