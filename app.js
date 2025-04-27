// Program to calculate diameter, circumference, and area of a circle)

let r = parseFloat(prompt("Enter the radius of the circle:"));
let diameter      = 2 * r;
let circumference = 2 * Math.PI * r;
let area          = Math.PI * r * r;
console.log("Radius: "  + r);
console.log("Diameter: " + diameter);
console.log("Circumference: " + circumference);
console.log("Area: "  + area);
