
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
function calculateMAP() {
    let sbp = parseFloat(document.getElementById("sbp").value);
    let dbp = parseFloat(document.getElementById("dbp").value);
    
    if (isNaN(sbp) || isNaN(dbp) || sbp <= 0 || dbp <= 0 || sbp < dbp) {
        document.getElementById("result").innerText = "Please enter valid SBP and DBP values.";
        return;
    }
    
    let map = dbp + (sbp - dbp) / 3;
    let category = "";
    
    if (map < 70) {
        category = "Low MAP - May indicate poor perfusion";
    } else if (map >= 70 && map <= 100) {
        category = "Normal MAP";
    } else {
        category = "High MAP - May indicate hypertension risk";
    }
    
    document.getElementById("result").innerText = `Mean Arterial Pressure (MAP): ${map.toFixed(2)} mmHg - ${category}`;
}


function calculateBMI() {
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);
    
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById("result").innerText = "Please enter valid weight and height values.";
        return;
    }
    
    let bmi = weight / (height * height);
    let category = "";
    
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obese";
    }
    
    document.getElementById("result").innerText = `BMI: ${bmi.toFixed(2)} - ${category}`;
}