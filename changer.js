//Creates variables and stores html elements in them
var bgColor = document.getElementById("newBGColor");
var colorChangeBtn = document.getElementById("colorChangeButton");
colorChangeBtn.addEventListener("click", function(){
    document.body.style.backgroundColor = bgColor.value;
});