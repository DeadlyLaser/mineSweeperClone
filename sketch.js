
//global variables
var rows = 0;
var cols = 0;
var canvasSize = 510;
var cellWidht = 50;
var grid;
var numberOfMines = 10;
var uncoveredCells = 0;

function setup() {
  createCanvas(canvasSize, canvasSize);
  rows = floor(height / cellWidht);
  cols = floor(width / cellWidht);
  grid = Create2DArray(rows, cols);

  // populate the grid with cells

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = new Cell(i, j, cellWidht);
      uncoveredCells++;
    }
  }

  // set bombs in random spots
  let i = 0;
  while (i < numberOfMines) {
    let n = floor(random(cols));
    let m = floor(random(rows));

    if (!grid[n][m].IsMined()) {
      grid[n][m].MineIt();
      i++;
    }
  }

  // set nearMines property for each cell.
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j].countNearMines();
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

// ceck if the mouse clicked on a cell, if so it reveals it.
function mousePressed() {
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      if (grid[i][j].OnTheCell(mouseX, mouseY) && !grid[i][j].revealed) {
        grid[i][j].Reveal();
        grid[i][j].Turn();
      }
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

