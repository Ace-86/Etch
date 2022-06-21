var board = document.getElementById("customTable"); //selects the table in html
let small = document.getElementById("smallBoard");  //selects the small board button in html
let medium = document.getElementById("mediumBoard"); //selects the medium board button in html
let large = document.getElementById("largeBoard"); //slects the lardge board button in html
 
function createPad(c) { //creates the board
   board.innerHTML = " "; //clears the board
   for (var i = 0; i < c; i++) { //creates the rows up to the value of c
       var newRow = document.createElement("tr"); //create variable newRow, equals tr
       newRow.classList.add("row"); //adds a class to the row
   for (var j = 0; j < c; j++) { //creates the columns up to the value of c
       var newColumn = document.createElement("td"); //creates a newColumn, equals td
       newColumn.classList.add("column"); //adds a class to the column
       newRow.appendChild(newColumn); //appends the column to the row
   }
   board.appendChild(newRow); //appends the row to the board
   }
};
 
function game(c) { //creates the board that allows  mouseover
   createPad(c); //calls the function to create the board
   let colorCells = document.querySelectorAll(".column"); //selects all  of class .column (from newColumn)
   function colorChange() { //changes the color of the cells
       this.style.backgroundColor = 'red'; //changes the color of the cell that is currently mouseover to red
       console.log(this); //logs the cell that is currently mouseover
   };
   colorCells.forEach(function(cell) {  //loops through the cells
       cell.addEventListener("mouseover", colorChange);  //adds an event listener to cells when mousehover over them
   });
};
 
function customButton() { //creates the custom board
customInput.innerHtML = " "; //clears the inputBox
let c = document.getElementById("userInput").value; //gets the value from the inputBox 
game(c); //calls the function to create the board
};
 
small.addEventListener("click", () => game(30));    //calls the function to create the small board on click
medium.addEventListener("click", () => game(50)); //calls the function to create the medium board on click
large.addEventListener("click", () => game(70)); //calls the function to create the large board on click
customBoard.addEventListener("click", customButton); //calls the function to create the custom board on click

