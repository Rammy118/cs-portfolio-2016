// Stores all elements of this page in variables
var todoItem = document.getElementById("text");
var addTaskButton = document.getElementById("addtask");
var todoListDiv = document.getElementById("todoListDiv");
var deleteAllButton = document.getElementById("deletealltasks");
var colorSelect = document.getElementById("operationColor");

// Make the Add task button function when it's clicked
addTaskButton.addEventListener("click", function(){
    // Get the todo item text
    var textColor = colorSelect.value;
    var textValue = "<div style=\"color:" + textColor + "\" onclick='deleteTask(event);'>* " + todoItem.value + "</div>";
    // Append the todo item to the todo list
    todoListDiv.innerHTML = textValue + todoListDiv.innerHTML;
});

// When the Delete all button is clicked empty all tasks from the Todo List 
deleteAllButton.addEventListener("click", function(){
    todoListDiv.innerHTML = "";
});

// When a task is clicked remove that element from its parent
function deleteTask(evt) {
    var ElementToRemove = evt.target;
    ElementToRemove.parentNode.removeChild(ElementToRemove);
}
