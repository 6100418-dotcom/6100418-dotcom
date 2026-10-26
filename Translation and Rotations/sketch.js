// Translation and Rotations
// Mason Wick
// 10/23/26


async function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  translate(width / 2, height / 2);
  clock();

}

function clock() {
  fill(255);
  strokeWeight(1);
  circle(0, 0, 400);
  fill(0);
  for (let i = 0; i < 360; i+= 6) {
    push();
    rotate(i);
    strokeWeight(2);
    line(0, 190, 0, 160);
    pop();
  }

  for (let i = 0; i < 360; i+= 30) {
    push();
    rotate(i);
    strokeWeight(5);
    line(0, 190, 0, 150);
    pop();
  }
  
  push();
  strokeWeight(1);
  rotate(second() * 6  + 225);
  line(0, 0, 100, 100);
  pop();

  push();
  strokeWeight(5);
  rotate(minute() * 6 + 225);
  line(0, 0, 100, 100);
  pop();

  push();
  strokeWeight(5);
  rotate(hour() * 3 + 225);
  line(0, 0, 50, 50);
  pop();
}