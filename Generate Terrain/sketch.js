// Generate Terrain
// Mason Wick
// 10/01/26


// Global Vars
let yTime = 5;
let ySpeed = 0.01;
let yStart = yTime;

let rectWidth = 1;
let largestY = 0;

async function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  noStroke();
  background(200);
  yTime = yStart;
  yStart += ySpeed;
  generateTerrain();
  drawFlag();
}

function generateTerrain() {
  for (let x = 0; x < width; x += rectWidth) {
    let y = noise(yTime);
    y = map(y, 0, 1, 0, height);
    yTime += ySpeed;

    fill(0);
    rect(x, width, rectWidth, -y);

    if (y > largestY) {
      largestY = y;
      console(largestY)
    }
  }
}

function drawFlag(y) {
  // draws a flag on the largest Y on screen
  
  
}

function keyPressed() {
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
