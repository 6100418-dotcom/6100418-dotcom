// 2D Arrays (Puzzle Starter)
// Mason Wick
// 11/3/26

let grid = [
  [0, 255, 0, 255, 0, 255], 
  [255, 0, 255, 0, 255, 0], 
  [0, 255, 0, 255, 0, 255], 
  [255, 0, 255, 0, 255, 0], 
  [0, 255, 0, 255, 0, 255]
];
let rows = grid.length;
let cols = grid[0].length;
let tileSize = 60;

async function setup() {
  createCanvas(cols*tileSize, rows*tileSize);
}

function draw() {
  background(220);
  renderGrid();
}

function renderGrid(){
  // interpret the data stored in 2D array and draw a matrix to square to reflect it.
  for (let y = 0; y < rows; y++){
    for (let x = 0; x < cols; x++){
      let fillColor =  grid[y][x];
      fill(fillColor);
      square(x*tileSize, y*tileSize, tileSize);
    }
  }
}