// Random vs Noise
// Mason Wick
// 09/29/26

let minSize = 5;
let maxSize = 200;
let x1;
let y1;
let x2;
let y2;
let y3;

let noiseTime = 1;
let noiseSpeed = 0.01;

async function setup() {
  createCanvas(windowWidth, windowHeight);
  x1 = width * 0.3;
  y1 = height / 2;
  x2 = width * 0.7;
  y2 = height / 2;
  y3 = height / 2;
}

function draw() {
  background(220);
  moveCircle();
  // randomCircle();
  // noiseCircle();
  // randomSeed(5);
}

function noiseCircle() {
  // Noise

  let d = noise(noiseTime);
  d = map(d, 0, 1, minX, maxX);

  noiseTime += noiseSpeed;

  fill(255, 50, 150);
  circle(x2, y2, d);
}

function randomCircle() {
  // Draw a fixed position circle with a randomly changing diameter
  
  let d = random(minSize, maxSize);

  fill(50, 150, 250);
  circle(x1, y1, d);
}

function moveCircle() {
  let dx = noise(noiseTime);
  dx = map(dx, 0, 1, -5, 5);

  x3 += dx;

  fill(250, 100, 250);
  circle(x3, y3, 40);

  if (x3 < 0) x3 = 0;
  else if (x3 < 0) x3 = width;
}