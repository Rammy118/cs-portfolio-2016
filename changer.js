// Creates variables and stores html elements in them
var bgColor = document.getElementById("newBGColor");
var colorChangeBtn = document.getElementById("colorChangeButton");

// When the button is clicked, set the background color to this specified on
colorChangeBtn.addEventListener("click", function(){
    document.body.style.backgroundColor = bgColor.value;
});