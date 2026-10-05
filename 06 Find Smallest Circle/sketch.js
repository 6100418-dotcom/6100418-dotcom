// Find the Smallest Circle
// Mason Wick
// 10/05/26

const numCircles = 100;
let seed;

async function setup() {
  createCanvas(windowWidth, windowHeight);
  seed = random(0, 100);
}

function draw() {

  randomSeed(seed);
  background(220);
  drawCircle();
}

function drawCircle() {
  let smallDiameter = Infinity;
  let smallX = -1;
  let smallY = -1;

  // Draw numCircles all over the screen, sizes are random, noFill() ny default
  noFill();
  for (let i = 0; i < numCircles; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let d = random(20, 60);
    circle(x, y, d);

    if (d < smallDiameter) {
      smallDiameter = d;
      smallX = x;
      smallY = y;
    }
  }
  fill("orange");
  circle(smallX, smallY, smallDiameter);
}