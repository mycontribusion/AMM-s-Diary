
function estimateWeight(age, unit) {
    let weight;
    if (unit === "days") {
        weight = (age * 0.02) + 3; // Approximation for neonates
    } else if (unit === "months") {
        weight = (age * 0.5) + 4; // Approximation for infants
    } else if (unit === "years") {
        if (age >= 1 && age <= 5) {
            weight = (2 * age) + 8;
        } else if (age >= 6 && age <= 12) {
            weight = (3 * age) + 7;
        } else if (age >= 13 && age <= 18) {
            weight = (3.5 * age) + 5;
        } else {
            return "Estimation not available for this age range.";
        }
    }
    return weight ? `${weight.toFixed(2)} kg` : "Invalid age input.";
}

function calculateWeight() {
    let age = parseFloat(document.getElementById("age").value);
    let unit = document.getElementById("ageUnit").value;
    
    if (isNaN(age) || age <= 0) {
        document.getElementById("result").innerText = "Please enter a valid age.";
        return;
    }
    
    let result = estimateWeight(age, unit);
    document.getElementById("result").innerText = "Estimated Weight: " + result;
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

function convertGlucose() {
    let value = parseFloat(document.getElementById("glucose").value);
    let unit = document.getElementById("unit").value;
    let type = document.getElementById("type").value;
    
    if (isNaN(value) || value <= 0) {
        document.getElementById("result").innerText = "Please enter a valid glucose level.";
        return;
    }
    
    let convertedValue = value;
    let convertedUnit = unit;
    
    if (unit === "mmol") {
        convertedValue = value * 18.0182;
        convertedUnit = "mg/dL";
    } else {
        convertedValue = value / 18.0182;
        convertedUnit = "mmol/L";
    }
    
    let category = "";
    if (unit === "mg") {
        if (type === "fasting") {
            if (value < 70) {
                category = "(Low - Hypoglycemia)";
            } else if (value >= 70 && value < 100) {
                category = "(Normal)";
            } else if (value >= 100 && value < 126) {
                category = "(Impaired Fasting Glucose - Prediabetes)";
            } else {
                category = "(Diabetes)";
            }
        } else {
            if (value < 140) {
                category = "(Normal)";
            } else if (value >= 140 && value < 200) {
                category = "(Impaired Glucose Tolerance - Prediabetes)";
            } else {
                category = "(Diabetes)";
            }
        }
    } else {
        if (type === "fasting") {
            if (value < 3.9) {
                category = "(Low - Hypoglycemia)";
            } else if (value >= 3.9 && value < 5.6) {
                category = "(Normal)";
            } else if (value >= 5.6 && value < 7.0) {
                category = "(Impaired Fasting Glucose - Prediabetes)";
            } else {
                category = "(Diabetes)";
            }
        } else {
            if (value < 7.8) {
                category = "(Normal)";
            } else if (value >= 7.8 && value < 11.1) {
                category = "(Impaired Glucose Tolerance - Prediabetes)";
            } else {
                category = "(Diabetes)";
            }
        }
    }
    
    document.getElementById("result").innerText = `Converted Value: ${convertedValue.toFixed(2)} ${convertedUnit} ${category}`;
}

function calculateHeartFailure() {
    let majorCriteria = [
        "pnd", "jvd", "rales", "cardiomegaly", "pulmonaryEdema", "s3", "venousPressure", "circulation", "weightLoss"
    ];
    let minorCriteria = [
        "ankleEdema", "nocturnalCough", "dyspnea", "hepatomegaly", "pleuralEffusion", "tachycardia"
    ];
    
    let majorCount = majorCriteria.filter(id => document.getElementById(id).checked).length;
    let minorCount = minorCriteria.filter(id => document.getElementById(id).checked).length;
    
    let diagnosis = "No heart failure";
    if (majorCount >= 2) {
        diagnosis = "Heart Failure Present";
    } else if (majorCount === 1 && minorCount >= 2) {
        diagnosis = "Possible Heart Failure";
    }
    
    document.getElementById("result").innerText = `Diagnosis: ${diagnosis}`;
}

function calculateGCS() {
    let eye = parseInt(document.getElementById("eye").value);
    let verbal = parseInt(document.getElementById("verbal").value);
    let motor = parseInt(document.getElementById("motor").value);
    
    let totalGCS = eye + verbal + motor;
    let category = "";
    
    if (totalGCS >= 13) {
        category = "Mild Brain Injury";
    } else if (totalGCS >= 9) {
        category = "Moderate Brain Injury";
    } else {
        category = "Severe Brain Injury";
    }
    
    document.getElementById("result").innerText = `Total GCS Score: ${totalGCS} - ${category}`;
}

function interpretAxis() {
    let lead1 = document.getElementById("lead1").value;
    let leadAvf = document.getElementById("leadAvf").value;
    
    let interpretation = "Normal Axis (0° to +90°).";
    let equiphasicLead = "";
    
    if (lead1 === "positive" && leadAvf === "positive") {
        interpretation = "Normal Axis (0° to +90°).";
        equiphasicLead = "Lead aVL";
    } else if (lead1 === "positive" && leadAvf === "negative") {
        interpretation = "Left Axis Deviation (-30° to -90°).";
        equiphasicLead = "Lead II";
    } else if (lead1 === "negative" && leadAvf === "positive") {
        interpretation = "Right Axis Deviation (+90° to +180°).";
        equiphasicLead = "Lead III";
    } else if (lead1 === "negative" && leadAvf === "negative") {
        interpretation = "Extreme Axis Deviation (-90° to ±180°).";
        equiphasicLead = "Lead aVR";
    }
    
    document.getElementById("result").innerText = `Interpretation: ${interpretation} \n Equiphasic Lead: ${equiphasicLead}`;
}

function showMeasurementType() {
    document.getElementById("measurementType").style.display = 'inline-block';
}

function displayInputField() {
    const measurementType = document.getElementById("measurementType").value;
    const valueTypeDropdown = document.getElementById("valueType");
    const valueTypeContainer = document.getElementById("valueTypeContainer");
    const inputContainer = document.getElementById("inputContainer");

    if (measurementType === 'duration') {
        valueTypeContainer.style.display = 'inline-block';
        valueTypeDropdown.innerHTML = `
            <option value="seconds">Seconds</option>
            <option value="smallSquares">Small Squares</option>
            <option value="largeSquares">Large Squares</option>
        `;
    } else if (measurementType === 'voltage') {
        valueTypeContainer.style.display = 'inline-block';
        valueTypeDropdown.innerHTML = `
            <option value="millivolts">Millivolts</option>
            <option value="smallSquares">Small Squares</option>
            <option value="largeSquares">Large Squares</option>
        `;
    } else {
        valueTypeContainer.style.display = 'none';
    }

    if (measurementType !== 'none') {
        inputContainer.style.display = 'block';
    } else {
        inputContainer.style.display = 'none';
    }
}

function interpretECG() {
    const wave = document.getElementById("waveSelect").value;
    const measurementType = document.getElementById("measurementType").value;
    const valueType = document.getElementById("valueType").value;
    let numericalValue = parseFloat(document.getElementById("numericalValue").value);

    let interpretation = "ECG Interpretation:\n";

    if (isNaN(numericalValue)) {
        interpretation += "Please enter a valid numerical value.";
        document.getElementById("result").textContent = interpretation;
        return;
    }

    // Convert small and large boxes
    if (valueType === 'smallSquares') {
        if (measurementType === 'duration') numericalValue *= 0.04; // Convert small boxes to seconds
        if (measurementType === 'voltage') numericalValue *= 0.1;  // Convert small boxes to mV
    }
    if (valueType === 'largeSquares') {
        if (measurementType === 'duration') numericalValue *= 0.20; // Convert large boxes to seconds
        if (measurementType === 'voltage') numericalValue *= 0.5;  // Convert large boxes to mV
    }

    // Interpretation logic
    if (measurementType === 'duration') {
        if (wave === 'pWave') {
            interpretation += (numericalValue >= 0.08 && numericalValue <= 0.12) ? 
                "P Wave Duration: Normal (0.08 - 0.12 sec)" : "P Wave Duration: Abnormal";
        } else if (wave === 'qrsWave') {
            interpretation += (numericalValue >= 0.06 && numericalValue <= 0.10) ? 
                "QRS Duration: Normal (0.06 - 0.10 sec)" : "QRS Duration: Abnormal";
        } else if (wave === 'qtInterval') {
            interpretation += (numericalValue >= 0.36 && numericalValue <= 0.44) ? 
                "QT Interval: Normal (0.36 - 0.44 sec)" : "QT Interval: Abnormal";
        }
    } else if (measurementType === 'voltage') {
        if (wave === 'pWave') {
            interpretation += (numericalValue >= 0.1 && numericalValue <= 0.3) ? 
                "P Wave Amplitude: Normal (0.1 - 0.3 mV)" : "P Wave Amplitude: Abnormal";
        } else if (wave === 'qrsWave') {
            interpretation += (numericalValue >= 0.5 && numericalValue <= 2.0) ? 
                "QRS Amplitude: Normal (0.5 - 2.0 mV)" : "QRS Amplitude: Abnormal";
        } else if (wave === 'tWave') {
            interpretation += (numericalValue >= 0.1 && numericalValue <= 0.3) ? 
                "T Wave Amplitude: Normal (0.1 - 0.3 mV)" : "T Wave Amplitude: Abnormal";
        }
    }

    document.getElementById("result").textContent = interpretation;
}