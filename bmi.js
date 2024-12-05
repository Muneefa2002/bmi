
function calculateBMI(){
    let weight = parseInt(document.getElementById("weight").value);
    let height = parseInt(document.getElementById("height").value);
    let heights = (height / 100) * (height / 100);
    let bmi = weight / heights;
    document.getElementById("result").innerHTML = bmi;
    let bmiCategory = "";
    if (bmi < 18.5) {
        bmiCategory = "Underweight";
    } else if (bmi < 25) {
        bmiCategory = "Normal";
    } else if (bmi < 30) {
        bmiCategory = "Overweight";
    } else {
        bmiCategory = "Obese";
    }
    document.getElementById("result").innerHTML =  `Your BMI is:${bmi} <br> You are ${bmiCategory}`
}


