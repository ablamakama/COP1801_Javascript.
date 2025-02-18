// JavaScript Program to demonstrate variable creation, storing values, and determining data types

// Prompt the user for their first name and store it in a variable
let Fname = prompt("Enter your first name:");

// Display a welcome message with the user's name
alert("Hello " + Fname + "! Welcome to our webpage.");

// Create a constant to store the value of Pi to 7 significant digits
const piValue = 3.1415926;

// Prompt the user for their favorite number and store it in a variable
let myFavNum = parseFloat(prompt("Enter your favorite number:"));

// Calculate the area of a circle using the user's favorite number as the radius
let myArea = piValue * myFavNum * myFavNum;

// Display the variables and their values in a message on the webpage
document.write(
    "Hello " + Fname + ", you entered " + myFavNum + " as your favorite number. " +
    "If that was the radius of a circle, the circle’s area would be " + myArea.toFixed(6) + "."
);

