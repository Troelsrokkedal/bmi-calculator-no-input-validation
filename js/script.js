"use script";

// Step 1: Prompt for Height
let height = parseFloat(prompt("Enter your height in centimeters:"));

// Step 2: Prompt for Weight
let weight = parseFloat(prompt("Enter your weight in kilograms:"));

// Step 3: Validate Inputs
if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    alert("Invalid input! Please enter a valid height (cm) and weight (kg) greater than zero.");
} else {
    // Step 4: Calculate BMI
    let bmi = weight / (height / 100) ** 2;

    // Step 5: Determine BMI Category
    let category = "";
    if (bmi < 16) {
        category = "Severely Underweight";
    } else if (bmi >= 16 && bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        category = "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
        category = "Overweight";
    } else if (bmi >= 30 && bmi < 35) {
        category = "Moderately Obese";
    } else if (bmi >= 35 && bmi < 40) {
        category = "Severely Obese";
    } else {
        category = "Morbidly Obese";
    }

    // Step 6: Display Result
    alert(`Your BMI is ${bmi.toFixed(2)}. You are classified as: ${category}.`);
}