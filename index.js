var city = prompt("enter you city name").toLowerCase();
if (city === "karachi") {
    alert("Welcome to city of lights\n Welcome to city of Mobile nikal karway😁");
}

var gender = prompt("Enter your gender").toLowerCase();
if (gender === "male") {
    alert("Good Morning Sir");
} else if (gender === "female") {
    alert("Good Morning Ma’am");
}

var color = prompt("Enter the color of the traffic signal").toLowerCase() ;
if (color === "red") {
    alert("Must Stop");
} else if (color === "yellow") {
    alert("Ready to move");
} else if (color === "green") {
    alert("Move now");
}

var fuel = +prompt("Enter remaining fuel in litres");
if (fuel < 0.25) {
    alert("Please refill the fuel in your car");
}

// a.
var a = 4;
if (++a === 5) {
    alert("true");
}
// b.
var b = 82;
if (b++ !== 83) {
    alert("fasle");
}
// c.
var c = 12;
if (c++ !== 13) {
    alert("fasle");
}
if (c === 13) {
    alert("true");
}
if (++c < 14) {
    alert("false");
}
if (c === 14) {
    alert("true");
}
// d. Total cost check
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}
// e. True and False checks
if (true) {
    alert("True");
}
if (false) {
    alert("False");
}
// f. String comparison
if ("car" < "cat") {
    alert("car is smaller than cat");
}

var marks1 = +prompt("Enter marks for subject 1:");
var marks2 = +prompt("Enter marks for subject 2:");
var marks3 = +prompt("Enter marks for subject 3:");
var totalMarks = +prompt("Enter total marks:");
var obtainedMarks = marks1 + marks2 + marks3;
var percentage = (obtainedMarks / totalMarks) * 100;
var grade;
var remarks;
if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
} else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
} else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
} else {
    grade = "Fail";
    remarks = "Sorry";
}
document.write(`Total Marks: ${totalMarks} <br>`);
document.write(`Marks Obtained: ${obtainedMarks} <br>`);
document.write(`Percentage: ${percentage}% <br>`);
document.write(`Grade: ${grade} <br>`);
document.write(`Remarks: ${remarks}`);

var secretNumber = 7;
var guess = +prompt("Guess the secret number (1-10):");
if (guess === secretNumber) {
    alert("Bingo! Correct answer");
} else if (guess + 1 === secretNumber) {
    alert("Close enough to the correct answer");
}

var number = +prompt("Enter a number ");
if (number % 3 === 0) {
    alert("The number is divisible by 3");
}

var number = +prompt("Enter a number:");
if (number % 2 === 0) {
    alert("The number is even");
} else {
    alert("The number is odd");
}

var temperature = +prompt("Enter the temperature:");
if (temperature > 40) {
    alert("It is too hot outside.");
} else if (temperature > 30) {
    alert("The Weather today is Normal.");
} else if (temperature > 20) {
    alert("Today’s Weather is cool.");
} else if (temperature > 10) {
    alert("OMG! Today’s weather is so Cool.");
}

var num1 = +prompt("Enter first number:");
var num2 = +prompt("Enter second number:");
var operation = prompt("Enter operation (+, -, *, /, %):");
var result;
if (operation === "+") {
    result = num1 + num2;
} else if (operation === "-") {
    result = num1 - num2;
} else if (operation === "*") {
    result = num1 * num2;
} else if (operation === "/") {
    result = num1 / num2;
} else if (operation === "%") {
    result = num1 % num2;
}
alert("The result is: " + result);
