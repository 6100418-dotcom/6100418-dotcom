// Interactive Scene
// Mason Wick
// 9/21/26

// this works better if you have the window only half the screen

let centerX, centerY;
let arcRadius;
let planeX = 0;
let planeY = 0;
let currentBack = 0;
let backColor = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  arcRadius = width / 2.5;
  centerX = width / 2;
  centerY = height / 2;
  setInterval(addX, 1);
}

function draw() {
  changeY();
  changeBackground();

  // sun

  background(255 - mouseX / 5, 0 + backColor, 0 + mouseX / 5);

  let t = constrain(mouseX, 0, width);
  let angle = map(t, 0, width, 0, PI);

  let x = centerX - arcRadius * cos(angle);
  let y = centerY + arcRadius * sin(-angle);

  fill(255, 250, 105);
  noStroke();
  circle(x, y, 150);

  // environment

  fill(100, 100, 100);
  triangle(height, width, width / 2, height / 3, 0, height);

  fill(107, 107, 107);
  triangle(height, width, width / 7, height / 2, 0, height);

  fill(115, 115, 115);
  triangle(height, width, width / 3 + width / 2, height / 2, 0, height);

  fill(255, 255, 255);
  ellipse(100, 100, 100, 30);
  ellipse(150, 100, 100, 30);
  ellipse(125, 75, 100, 30);

  ellipse(700, 250, 100, 30);
  ellipse(725, 225, 100, 30);
  ellipse(750, 250, 100, 30);

  // character
  fill(230, 230, 230);
  rect(35 + planeX, 80 + planeY, 30, 70);

  fill(105, 105, 90);
  rect(0 + planeX, 100 + planeY, 70, 30);

  fill(80, 80, 60);
  circle(40 + planeX, 100 + planeY, 30);

  fill(0, 0, 0);
  ellipse(50 + planeX, 100 + planeY, 10, 20);

  fill(0, 0, 0);
  text("Mason Wick", 20, height - 20);
}

function addX() {
  if (planeX >= width) {
    planeX = 0;
  }
  planeX += 1;
}

function changeY() {
  if(keyIsDown(UP_ARROW)){
    planeY-=1;
  }
  
  if(keyIsDown(DOWN_ARROW)){
    planeY+=1;
  }
}

function changeBackground() {
  if (mouseButton.center === true) {

    if (currentBack === 0) {
      currentBack = 1;
      backColor = 0;
    } 
    else if (currentBack === 1) {
      currentBack = 2;
      backColor += 85;
    } 
    else if (currentBack === 2) {
      currentBack = 3;
      backColor += 85;
    } 
    else if (currentBack === 3) {
      currentBack = 0;
      backColor += 85;
    }
  }
}