// Drawing with Single Loops
// Mason Wick
// 9/25/26

async function setup() {
  createCanvas(windowWidth, windowHeight);
}

function worm(y, size) {
  // use this function to draw a line of circles
  // y = height of the worm
  // size = diameter of each circle
  for (let x = size / 2; x < width; x+= size) {
    circle(x, y, size);
  }
}


function draw() {
  background(220);
  // gradientBackground();
  // worm(50, 30);
  // worm(height / 2, 20);
  challenge(1);
}


function gradientBackground() {
  // create a gradient to use as background
  noStroke();

  let h = 1; // rectangle height
  let y = 0;

  while (y < height) {
    fill(y - mouseY, y / 4, y / 2);
    rect(0, y, width, h);
    y += h;
  }
  stroke();
}

function challenge(d) {
  for (let x = 0; x < width; x+= d * 2) {
    circle(x, 0, d);
    line(x, 0, mouseX, mouseY);
    circle(x, height, d);
    line(x, height, mouseX, mouseY);
  }

  for (let y = 0; y < width; y+= d * 2) {
    circle(0, y, d);
    line(0, y, mouseX, mouseY);
    circle(width, y, d);
    line(width, y, mouseX, mouseY);
  }
}