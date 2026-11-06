// 2D Arrays (Puzzle Starter)
// Mason Wick
// 11/3/26

let grid = [
  [0, 0, 0, 0, 0, 0], 
  [0, 0, 255, 0, 0, 0], 
  [0, 255, 255, 255, 0, 0], 
  [0, 0, 255, 0, 0, 0], 
  [0, 0, 0, 0, 0, 0]
];
let rows = grid.length;
let cols = grid[0].length;
let tileSize = 60;

let shape = "cross";

let clicks = 0;
let time = 0;

async function setup() {
  createCanvas(cols*tileSize, rows*tileSize);
  randomize();
  textAlign(CENTER);
}

function draw() {
  frameRate(60);
  background(220);
  renderGrid();
  if (winCondition() === true) {
    textSize(32);
    fill(220);
    rect(105, 125, 150, 50);
    fill("black");
    text("You Win!",width / 2, height / 2 + 10);
  }
  
  if (frameCount % 60 === 0){
    time++;
  }

  overlay();
  textSize(14);
  fill(220, 220, 220, 150);
  circle(width - 30, height - 30, 30);
  fill("blue");
  text(clicks, width - 30, height - 25);

  fill(220, 220, 220, 150);
  circle(width - 30, 30, 30);
  fill("red");
  text(time, width - 30, 34);
}

function keyPressed(){
  if (keyIsDown(" ")) {
    if (shape === "cross") {
      shape = "square";
    }
    else {
      shape = "cross";
    }
  }
}

function mousePressed(){
  if (mouseX < width && mouseY < height) {
    let x = getCurrentX();
    let y = getCurrentY();
    if (keyIsDown(SHIFT)) {
      flip(x, y);
    }
    else {
      if (shape === "cross") {
        flip(x, y);
        if (x+1 <= cols-1){
          flip(x+1, y);
        }
        if (x-1 >= 0){
          flip(x-1, y);
        }
        if (y+1 <= rows-1){
          flip(x, y+1);
        }
        if (y-1 >= 0){
          flip(x, y-1);
        }
      }
      else if (shape === "square") {
        flip(x, y);
        if (x+1 <= cols-1){
          flip(x+1, y);
        }
        if (y+1 <= rows-1){
          flip(x, y+1);
        }
        if (y+1 <= rows-1 && x+1 <=cols-1){
          flip(x+1, y+1);
        }
      }
    }
    clicks++;
  }
}

function getCurrentX() {
  let constrainedX = constrain(mouseX, 0, width - 1);
  return int(constrainedX/tileSize);
}

function getCurrentY() {
  let constrainedY = constrain(mouseY, 0, height - 1);
  return int(constrainedY/tileSize);
}

function flip(x, y) {
  if(grid[y][x] === 255) {
    grid[y][x] = 0;
  }
  else {
    grid[y][x] = 255;
  }
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

function randomize() {
  for (let y = 0; y < rows; y++){
    for (let x = 0; x < cols; x++){
      grid[y][x] = random([0, 255]);
    }
  }
}

function winCondition(){
  let white = 0;
  let gridSize = rows*cols;
  for(let y = 0; y < rows; y++) {
    for(let x = 0; x < cols; x++){
      if (grid[y][x] === 255){
        white++;
      }
    }
  }
  if (white === gridSize || white === 0){
    return true;
  }
  else{
    return false;
  }
}

function overlay() {
  if(mouseX < width && mouseY < height) {
    let overlay = color(0, 255, 0, 150);
    fill(overlay);
    if (keyIsDown(SHIFT)){
      square(getCurrentX()*tileSize, getCurrentY()*tileSize, tileSize);
    }
    else if (shape === "cross") {
      square(getCurrentX()*tileSize, getCurrentY()*tileSize, tileSize);
      square(getCurrentX()*tileSize - 60, getCurrentY()*tileSize, tileSize);
      square(getCurrentX()*tileSize + 60, getCurrentY()*tileSize, tileSize);
      square(getCurrentX()*tileSize, getCurrentY()*tileSize - 60, tileSize);
      square(getCurrentX()*tileSize, getCurrentY()*tileSize + 60, tileSize);
    }
    else if (shape === "square") {
      square(getCurrentX()*tileSize, getCurrentY()*tileSize, tileSize);
      square(getCurrentX()*tileSize+60, getCurrentY()*tileSize, tileSize);
      square(getCurrentX()*tileSize, getCurrentY()*tileSize+60, tileSize);
      square(getCurrentX()*tileSize+60, getCurrentY()*tileSize+60, tileSize);
    }
  }
}