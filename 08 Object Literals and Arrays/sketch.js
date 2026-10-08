// Simple Objects and Arrays
// Mason Wick
// 10/07/26

// let ball;
let ballArray = [];

async function setup() {
  createCanvas(windowWidth, windowHeight);
  // ball = {
  //   x:random(width),
  //   y:random(height),
  //   size:20,
  //   c:color(random(255), random(255), random(255)),
  //   xSpeed:5,
  //   ySpeed:4
  // };
}

function generateBall(x, y) {
  let b = {
    x:x,
    y:y,
    size:20,
    c:color(random(255), random(255), random(255)),
    xSpeed:random(-6, 6),
    ySpeed:random(-6, 6),    
    lifeTime:random(40, 60)
  };
  return b;
}

function initObjects(n) {
  for (let i = 0; i < n; i++) {
    ballArray.push(generateBall(mouseX, mouseY));
  }
}

function keyPressed() {
  initObjects(100);
}

function moveBall(b) {
  b.x = b.x + b.xSpeed ;
  b.y += b.ySpeed;

  if (b.x < 10 || b.x > width - 10) {
    b.xSpeed *= -1;
  }

  if (b.y < 10 || b.y > height - 10) {
    b.ySpeed *= -1;
  }

  fill(b.c);
  circle(b.x, b.y, b.size);
}


function draw() {
  background(220);
  for (let i = 0; i < ballArray.length; i++) {
    let b = ballArray[i];
    moveBall(b);
    b.lifeTime--;
    if(b.lifetime < 1) {
      ballArray.splice(i, 1);
    }
  }


  if (mouseIsPressed) {
    ballArray.push(generateBall(mouseX, mouseY));
  }
}
