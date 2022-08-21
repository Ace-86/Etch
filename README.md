# Etch
Etch-A-Sketch Project

How it works: Players will start the game by first picking a board size. The cells within the board will change color to red the mouse is the mouse is hovered over it. Be creative and draw to your hearts content. Moving the mouse slow allows for more accurate drawing while moving quickly in short burst allows you to essentially lift your drawing marker to a different spot without turning a cell red.
 
To erase the board, pick any board size (even the same one) and the board will be erased, allowing players to start drawing on a new board.
 
 
4 choices on what size board you want to sketch on:
small board is 30x30
medium board is 50x50
large board is 80x80
custom board will take any number (limitations between 25-100 not implemented this release);
 
 
 
Under the hood:
When a button is clicked, a function will run creating columns and rows within the DOM. These dom elements are targeted by a mouseover event which triggers another function that turns individual cells into a different color.
