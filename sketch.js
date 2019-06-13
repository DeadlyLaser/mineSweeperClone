
//global variables
var rows = 0;
var cols = 0;
var canvasSize = 510;
var cellW = 50;
var grid;
var mineN;
var mineMun = 10;

function setup() {
  createCanvas(canvasSize, canvasSize);
  rows = floor(height / cellW);
  cols = floor(width / cellW);
  grid = Create2DArray(rows, cols);

  // populate the grid with cells

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = new Cell(i * cellW, j * cellW, cellW);
    }
  }

  // set bombs in random spots
  let i = 0;
  while (i < mineMun){
    let n = floor(random(cols));
    let m = floor(random(rows));

    if (!grid[n][m].IsMined()){
      grid[n][m].MineIt();
      i++;
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

