//"C:\Users\delig\Desktop\ZAIO INSTITUTE\Javascript Project 1\javascript_Project1"
const prompt = require("prompt-sync")();

// Question 1

let score = 85;  // Value can  be changed  to test

// Switch statement for grading
let grade;

switch (true) {
    case (score >= 90 && score <= 100):
        grade = "A";
        break;
    case (score >= 80 && score <= 89):
        grade = "B";
        break;
    case (score >= 70 && score <= 79):
        grade = "C";
        break;
    case (score >= 60 && score <= 69):
        grade = "D";
        break;
    default:
        grade = "F";
}

console.log("Grade:", grade);

// Ternary operator to check pass/fail
let result = score >= 60 ? "Passed" : "Failed";
console.log(result);

// Question 2

let strNumber = "25";
let convertedNumber = Number(strNumber);
console.log("Converted Number:", convertedNumber);

// Values to test
let values = [0, "", "hello", null, undefined, NaN];

values.forEach(value => {
    if (value) {
        console.log(value, "is truthy");
    } else {
        console.log(value, "is falsy");
    }
});


// Question 3

function greetingBot(name, isMorning) {
    return isMorning 
        ? `Good morning, ${name}!`
        : `Hello, ${name}!`;
}

// Testing the function
console.log(greetingBot("Mikateko", true));
console.log(greetingBot("Delight", false));

// Question 4

let post = {
    username: "mikateko_dm",
    caption: "Beautiful day to code!",
    likes: 120,
    comments: ["Love it!", "Nice post!", "Keep going!"],

    addLike() {
        this.likes += 1;
    }
};

// Add a like
post.addLike();
console.log("Updated Likes:", post.likes);

// Object destructuring
const { username, caption } = post;
console.log("Username:", username);
console.log("Caption:", caption);

// Question 5 (a)

let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];

let combined = [...arr1, ...arr2];
console.log("Combined Array:", combined);

// Question 5 (b)

let rows = 5;
let spaces = 12;

for (let i = 1; i <= rows; i++) {
    let line = " ".repeat(spaces);

    for (let j = 1; j <= i; j++) {
        line += "*    ";
    }

    console.log(line);
    spaces -= 3;
}

// Question 5 (c)

let num = 10;

while (num >= 1) {
    console.log(num);
    num--;
}
