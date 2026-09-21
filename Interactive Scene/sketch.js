// Interactive Scene
// Mason Wick
// 9/21/26

let centerX, centerY;
let arcRadius;

function setup() {
  createCanvas(windowWidth, windowHeight);
  arcRadius = width / 2.5;
  centerX = width / 2;
  centerY = height / 2;
}

function draw() {
  background(255 - (mouseX / 5), 100, 0 + (mouseX / 7));

  let t = constrain(mouseX, 0, width);
  let angle = map(t, 0, width, 0, PI);

  let x = centerX - arcRadius * cos(angle);
  let y = centerY + arcRadius * sin(-angle);

  fill(255, 250, 105);
  noStroke();
  circle(x, y, 150);

  triangle(0, 0, 0, 100, -100, 0);
}