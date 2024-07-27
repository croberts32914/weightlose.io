// script.js
document.getElementById('calorieForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const weight = parseFloat(document.getElementById('weight').value);
    const maintainCalories = parseFloat(document.getElementById('calories').value);
    const goal = parseFloat(document.getElementById('goal').value);

    if (isNaN(weight) || isNaN(maintainCalories) || isNaN(goal)) {
        alert('Please enter valid numbers');
        return;
    }

    // 1 pound of weight loss per week = 500 calorie deficit per day
    const calorieDeficitPerDay = goal * 500;
    const dailyCalories = maintainCalories - calorieDeficitPerDay;

    document.getElementById('result').innerText = `To lose ${goal} lbs per week, you can eat ${dailyCalories} calories per day.`;
});
