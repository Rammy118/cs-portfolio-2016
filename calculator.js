// Store all the elements of this page in variables
var number1Element = document.getElementById("number1");
var number2Element = document.getElementById("number2");
var operatorElement = document.getElementById("operation");
var calculateButton = document.getElementById ("calculate");
var resultDiv = document.getElementById ("result");

// Makes the calculate button function with its clicked
calculateButton.addEventListener("click", function(){
    // Get the numbers and the operator
    var number1 = Number(number1Element.value);
    var number2 = Number(number2Element.value);
    var operator = operatorElement.value;
    var result;
    
    // Calculates the result beased on the operation
    if (operator == "Add") {
        result = number1+number2;
    } else if (operator == "Sub") {
        result = number1-number2;
    } else if (operator == "Mul") {
        result = number1*number2;
    } else if (operator == "Div") {
        result = number1/number2;
    } else if (operator == "GT") {
        result = number1 > number2;
    } else if (operator == "EQ") {
        result = number1 == number2;
    } 
    // Fill the result div with the numerical result
    resultDiv.innerHTML = "Result: " + result;
});