"use strict";

const PI = 3.14;

// Function that check maturity
function isAdult(age) {
  if (typeof age === "string") return "Please enter number value";

  if (age >= 18) return true;

  return false;
}

console.log(isAdult(20), "check maturity");

// Function that check multiplicity
function checkMultiplicity(firstNumber, secondNumber) {
  if (typeof firstNumber === "string" || typeof secondNumber === "string")
    return "Please enter number value";

  if (firstNumber % secondNumber === 0) return true;

  return false;
}

console.log(checkMultiplicity(20, 5), "check multiplicity");

// Function that check can we create triangle with given sides
function isTriangle(a, b, c) {
  if (typeof a === "string" || typeof b === "string" || typeof c === "string")
    return "Please enter number value";

  if (a + b > c && a + c > b && b + c > a) return true;

  return false;
}

console.log(isTriangle(20, 5, 8), "is triangle");

// Function that get triangle area by side and height
function getTriangleArea(a, h) {
  if (!a || !h) return "Enter valid arguments";

  if (typeof a === "string" || typeof h === "string")
    return "Please enter number value";

  return 0.5 * a * h;
}

console.log(getTriangleArea(20, 5), "triangle area");

// Function that get rectangle area by sides
function getRectangleArea(a, b) {
  if (!a || !b) return "Enter valid arguments";

  if (typeof a === "string" || typeof b === "string")
    return "Please enter number value";

  return a * b;
}

console.log(getRectangleArea(20, 10), "rectangle area");

// Function that get rhombus area by side and height
function getRhombusArea(a, h) {
  if (!a || !h) return "Enter valid arguments";

  if (typeof a === "string" || typeof h === "string")
    return "Please enter number value";

  return a * h;
}

console.log(getRhombusArea(20, 2), "rhombus area");

// Function that get cylinder area by R - base circle radius and height
function getCylinderArea(R, h) {
  if (!R || !h) return "Enter valid arguments";

  if (typeof R === "string" || typeof h === "string")
    return "Please enter number value";

  return 2 * PI * R * (h + R);
}

console.log(getCylinderArea(15, 2), "cylinder area");
