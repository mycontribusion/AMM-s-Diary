function estimateWeight(age) {
    if (age >= 1 && age <= 5) {
        return 2 * age + 8;
    } else if (age >= 6 && age <= 12) {
        return 3 * age + 7;
    } else {
        return "Estimation not available for this age range.";
    }
}

// Example usage:
console.log(estimateWeight(3));  // Output: 14 kg
console.log(estimateWeight(10)); // Output: 37 kg
console.log(estimateWeight(20)); // Output: "Estimation not available for this age range."
