// State Variables / Real Time
// Mason Wick
// 9/23/26
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// Global Variables
let objectType = 2;
// 0 - circle
// 1 - triangle
// 2 - starburst

let startTime = 0;

async function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawShape();
  let elapsed = millis() - startTime;
  if (elapsed > 1) {
    updateState();
    startTime = millis();
  }
}

function drawShape() {
  // inspect state variable (objectType) and draw 1 of 3 possible shapes in canvas
  // [ALT][SHIFT][F]
  let x = width / 2;
  let y = height / 2;
  switch (objectType) {
    case 0:
      circle(x, y, 400);
      break;
    case 1:
      triangle(x - 200, y + 200, x + 200, y + 200, x, y - 200);
      break;
    case 2:
      for (let i = 0; i < 3000; i++) {
        let x2 = random(x - 1000, x + 1000);
        let y2 = random(y - 1000, y + 1000);
        let r = random(1, 255);
        let g = random(1, 255);
        let b = random(1, 255);
        line(x, y, x2, y2);
        stroke(r, g, b);
      }
  }
}

function keyPressed() {
  updateState();
}

function updateState() {
  objectType++;
  if (objectType > 2) {
    objectType = 0;
  }
}