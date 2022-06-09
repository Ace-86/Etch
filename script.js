

var c = parseInt(prompt("Columns"));
var r = parseInt(prompt("Rows"));
var board = document.getElementById("customTable");


for (var i = 0; i < r; i++) {
    var newRow = document.createElement("tr");
    newRow.classList.add("row");
    for (var j = 0; j < c; j++) {
        var newColumn = document.createElement("td");
        newColumn.classList.add("column");
        newRow.appendChild(newColumn);
    }
    board.appendChild(newRow);
}

function colorChange(e) {
    e.target.style.backgroundColor = 'red';
};

let colorCells = document.querySelectorAll(".row");

colorCells.forEach(function(cell) { 
cell.addEventListener("mouseover", colorChange); 
});

