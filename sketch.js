
//global variables
var rows = 0;
var cols = 0;
var canvasSize = 500
var cellW = 50;
var grid;

function setup() {
  createCanvas(canvasSize, canvasSize);
  rows = floor(height / cellW);
  cols = floor(width / cellW);
  grid = Create2DArray(rows, cols);

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = new Cell(i * cellW, j * cellW, cellW);
    }
  }
}

// ceck if the mouse clicked on a cell, if so it reveals it.
function mousePressed() {
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      if (grid[i][j].OnTheCell(mouseX, mouseY)) {        
        grid[i][j].Reveal();
      }
    }
  }
}



function draw() {
  background(255);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j].Show();
    }
  }
}

//function to create a 2d array for the grid

function Create2DArray(rows, cols) {
  let arr = new Array(cols);
  for (let i = 0; i < cols; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

