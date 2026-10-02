// Generate Terrain
// Mason Wick
// 10/01/26


// Global Vars
let yTime = 5;
let ySpeed = 0.01;
let yStart = yTime;

let rectWidth = 1;
let largestY = 0;
let currentX = 0;

let averageY = 0;

async function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // Runs the functions
  yTime = yStart;
  yStart += ySpeed;
  noStroke();
  background(200);
  generateTerrain();
  drawFlag();
  average();
}

function generateTerrain() {
  // Uses noise to generate custom y numbers that make rectangles set to rectWidth.
  largestY = height;
  averageY = 0;
  for (let x = 0; x < width; x += rectWidth) {
    let y = noise(yTime);
    y = map(y, 0, 1, 0, height);
    yTime += ySpeed;

    fill(0);
    rect(x, y, rectWidth, height);
    
    averageY += y;

    if (y < largestY) {
      largestY = y;
      currentX = x;
    }
  }
}

function drawFlag() {
  // Uses largestY to find the tallest point on screen and puts a flag there.
  fill(0);
  rect(currentX - 2.5, largestY - 30, 5, 30);
  fill(255, 0, 0);
  triangle(currentX - 2.5, largestY - 30, currentX - 2.5, largestY -50, currentX + 30, largestY - 40);
}

function average() { 
  // Gets the average height of all the Ys and puts a line across it.
  rect(0, averageY / width, width, 2);
  print(averageY);
} 

function keyPressed() {
  // Handles changing the rectangles width.
  if (key === LEFT_ARROW) {
    if (rectWidth > 1) {
      rectWidth --;
    }
  }
  if (key === RIGHT_ARROW) {
    if (rectWidth < width) {
      rectWidth ++;
    }
  }
}
