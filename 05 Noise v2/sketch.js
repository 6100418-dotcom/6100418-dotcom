// Noise V2
// Mason Wick
// 10/01/26


// Global Variables
let xTime = 5;
let xSpeed = 0.01;
let xStart = xTime;

async function setup() {
  createCanvas(windowWidth, windowHeight);
}
  
function draw() {
  noStroke();
  background(220);
  xTime = xStart;
  xStart += xSpeed;
  tower();
}

function tower() {
  for (let y = 0; y < height; y += 1) {
    let x = noise(xTime);
    x = map(x, 0, 1, 0, width); 
    xTime += xSpeed;
    fill(x / 2);
    circle(x, y, 20);
  }
}