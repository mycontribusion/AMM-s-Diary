
function estimateWeight(age) {
    if (age >= 0 && age < 1) {
        // Convert age from years to months for infants
        let ageInMonths = age * 12;
        return (ageInMonths + 9) / 2;
    } else if (age >= 1 && age <= 5) {
        return 2 * age + 8;
    } else if (age >= 6 && age <= 12) {
        return 3 * age + 7;
    } else if (age >= 13 && age <= 18) {
        return 3.5 * age + 5;
    } else {
        return null; // Estimation not available for this age range
    }
}

function calculateWeight() {
    let ageInput = document.getElementById("age").value;
    let age = parseFloat(ageInput);
    if (isNaN(age) || age < 0 || age > 18) {
        document.getElementById("result").innerText = "Please enter a valid age between 0 and 18 years.";
        return;
    }
    let estimatedWeight = estimateWeight(age);
    if (estimatedWeight !== null) {
        document.getElementById("result").innerText = `Estimated Weight: ${estimatedWeight.toFixed(2)} kg`;
    } else {
        document.getElementById("result").innerText = "Estimation not available for this age range.";
    }
}