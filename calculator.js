//Get two numbers and apply the operator
var number1 = document.getElementById("number1");
var number2 = document.getElementById("number2");
var operator = document.getElementById("operation");
var calculateButton = document.getElementById ("calculate");
var resultDiv = document.getElementById ("result");

//Makes the calculate button function with its click
calculateButton.addEventListener("click", function(){
    //Makes the result work after the two numbers are placed in
    var n1 = Number(number1.value);
    var n2 = Number(number2.value);
    var op = operator.value;
    var result;
    
    //Has the dropdown menu with the signs
    if (op == "Add") {
        result = n1+n2;
    } else if (op == "Sub") {
        result = n1-n2;
    } else if (op == "Mul") {
        result = n1*n2;
    } else if (op == "Div") {
        result = n1/n2;
    } else if (op == "GT") {
        result = n1 > n2;
    } else if (op == "EQ") {
        result = n1 == n2;
    } 
    resultDiv.innerHTML = "Result: " + result;
});