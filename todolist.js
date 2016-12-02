//Contains the text and adds or deletes tasks in the todo list
var text = document.getElementById("text");
var button = document.getElementById("addtask");
var div = document.getElementById("list");
var deleteallbutton = document.getElementById("deletealltasks");

//Adds tasks to Todo List 
button.addEventListener("click", function(){
    var textvalue = "<div onclick='deleteTask(event);'>* " + text.value + "</div>";
    div.innerHTML = textvalue + div.innerHTML;
});

//Deletes all tasks in the Todo List 
deleteallbutton.addEventListener("click", function(){
    div.innerHTML = "";
});

function deleteTask(evt) {
    var ElementToRemove = evt.target;
    ElementToRemove.parentNode.removeChild(ElementToRemove);
}