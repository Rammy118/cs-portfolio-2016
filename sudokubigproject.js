// Store the new game button in a variable
var newGameButton = document.getElementById("startnewgame");

// Store all the sudoku cells in an array variable
var cells = document.getElementsByClassName("cell");

// React to the button that starts a new game when clicked
newGameButton.addEventListener("click", function() {
    // Sets all number boxes to empty
    for (var i in cells) {
        cells[i].value = 0;
    }
    // Initialize the new game numbers
    cells[0].value = 7;
    cells[2].value = 4;
    cells[3].value = 1;
    cells[9].value = 5;
    cells[10].value = 9;
    cells[11].value = 8;
    cells[14].value = 2;
    cells[24].value = 1;
    cells[25].value = 8;
    cells[26].value = 6;
    cells[28].value = 2;
    cells[30].value = 8;
    cells[32].value = 1;
    cells[35].value = 5;
    cells[37].value = 7;
    cells[39].value = 3;
    cells[41].value = 4;
    cells[65].value = 1;
});

// Add a listener to each sudoku cell to detect collisions with rows
// columns, or sections which might have the same selected number
for (var i in cells) {
    cells[i].addEventListener("change", function() {
        // Get selected value for this cell. The "this" variable holds
        // the object
        // the id of the object is a 3 digit number of the format:
        // section/row/column. We get the id to determine these values
        var selectedvalue = this.value;
        var selectedid = this.id;
        var selectedsection = selectedid[0];
        var selectedcolumn = selectedid[2];
        var selectedrow = selectedid[1];

        // Go over all other cells and if we have the same row, column,
        // or section and we have the same selected value, we have a collision,
        // the selected value is wrong
        for (var j in cells) {
            cells[j].style.backgroundColor = "";
            if (this.id != cells[j].id) {
                // Get the section, row, column, and value to compare to the 
                // selected cell
                var cellvalue = cells[j].value;
                var cellid = cells[j].id;
                var cellsection = cellid[0];
                var cellcolumn = cellid[2];
                var cellrow = cellid[1];
                if (selectedrow == cellrow ||
                    selectedcolumn == cellcolumn ||
                    selectedsection == cellsection) {
                    if (selectedvalue == cellvalue) {
                        // We have a collision, make both the selected cell and the
                        // colliding cell red
                        this.style.backgroundColor = "red";
                        cells[j].style.backgroundColor = "red";
                    }
                }
            }
        }

        alert("value: " + this.value + "  section: " + this.id[0] + "  row: " + this.id[1] + "  column: " + this.id[2]);
    });
}
