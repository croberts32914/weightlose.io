document.getElementById('calorieForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const heightFeet = parseFloat(document.getElementById('heightFeet').value);
    const heightInches = parseFloat(document.getElementById('heightInches').value);
    const age = parseFloat(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const activityLevel = parseFloat(document.getElementById('activity').value);
    const goal = parseFloat(document.getElementById('goal').value);

    console.log('Inputs received - Weight:', weight, 'Height (feet):', heightFeet, 'Height (inches):', heightInches, 'Age:', age, 'Gender:', gender, 'Activity Level:', activityLevel, 'Goal:', goal);

    if (isNaN(weight) || isNaN(heightFeet) || isNaN(heightInches) || isNaN(age) || isNaN(activityLevel) || isNaN(goal)) {
        alert('Please enter valid numbers');
        return;
    }

    // Convert height to inches
    const height = (heightFeet * 12) + heightInches;
    console.log('Total Height (inches):', height);

    // Convert weight from lbs to kg and height from inches to cm
    const weightKg = weight / 2.205;
    const heightCm = height * 2.54;
    console.log('Weight (kg):', weightKg, 'Height (cm):', heightCm);

    // Calculate BMR using the Mifflin-St Jeor Equation
    let bmr;
    if (gender === 'male') {
        bmr = 88.362 + (13.397 * weightKg) + (4.799 * heightCm) - (5.677 * age);
    } else {
        bmr = 447.593 + (9.247 * weightKg) + (3.098 * heightCm) - (4.330 * age);
    }
    console.log('BMR:', bmr);

    // Calculate TDEE
    const tdee = bmr * activityLevel;
    console.log('TDEE:', tdee);

    // Calculate daily calories for weight loss goal
    const calorieDeficitPerDay = goal * 500;
    const dailyCalories = tdee - calorieDeficitPerDay;
    console.log('Daily Calories:', dailyCalories);

    // Display result
    document.getElementById('result').innerText = `To lose ${goal} lbs per week, you can eat ${dailyCalories.toFixed(0)} calories per day.`;
    console.log('Result displayed');
});
