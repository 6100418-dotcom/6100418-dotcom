// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//global
let x = 100;
let y = 100;

async function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  textSize(40);

  let mouseInfo = mouseIsPressed + " "
                  + mouseButton.left + " "
                  + mouseButton.center + " "
                  + mouseButton.right + " ";
  text(mouseInfo, mouseX, mouseY);

  drawSquare;
}

function frawSquare(){
  //draws a square
  square(x, y, 50);
}

function keyPressed() {
  //prints what key is pressed
  print(key + " " +   keyCode);
}
