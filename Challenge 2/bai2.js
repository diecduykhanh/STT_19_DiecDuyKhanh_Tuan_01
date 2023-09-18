var mark_mass1 = 78;
var mark_height1 = 1.69;

var john_mass1 = 92;
var john_height1 = 1.95;

var calculateBMI = (mass, height) => mass / (height * height);

var mark_BMI1 = calculateBMI(mark_mass1, mark_height1);
var john_BMI1 = calculateBMI(john_mass1, john_height1);

if (mark_BMI1 > john_BMI1) {
    console.log("Mark's BMI (${mark_BMI1.toFixed(1)}) is higher than John's (${john_BMI1.toFixed(1)})!");
} else if (johnBMI1 > markBMI1) {
    console.log("John's BMI (${john_BMI1.toFixed(1)}) is higher than Mark's (${mark_BMI1.toFixed(1)})!");
} else {
    console.log("Mark and John have the same BMI!");
}