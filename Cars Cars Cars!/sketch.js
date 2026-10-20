// Cars Cars Cars!
// Mason Wick
// 10/20/26

// Globals
let eastbound = [];
let westbound = [];

async function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 20; i++) {
    eastbound.push(new Vehicle((random(0, 1), color(random(255), random(255), random(255)), random(width), 0, 0, random(1, 15))));
    westbound.push(new Vehicle((random(0, 1), color(random(255), random(255), random(255)), random(width), 0, 1, random(1, 15))));
  }
}

function draw() {
  background(220);
  drawRoad();
  for (e of eastbound) {
    e.action();
  }
  for (w of westbound) {
    w.action();
  }
}

function drawRoad() {
  fill(0);
  rect(0, height / 3, width, height / 3);
  fill('yellow');
  for (let i = 0; i < 100; i++) {
    rect(50 * i, height / 2 - 5, 30, 5);
  }
}

class Vehicle {
  constructor(type, c, x, y, d, xSpeed) {
    this.type = type;
    this.c = c;
    this.d = d;
    this.x = x;
    if (d === 1) {
      this.y = random(height / 2, height / 3);
    }
    else {
      this.y = random(height / 3, height / 4);
    }
    this.xSpeed = xSpeed;
  }

  display() {
    if (type === 1) {
      fill(c);
      rect(this.x, this.y, 50, 25);
    }
    else {
      fill(c);
      rect(this.x, this.y, 50, 40);
    }
  }

  move() {
    if (d === 0) {
      this.x += this.xSpeed;
    }
    else {
      this.x -= this.xSpeed;
    }
  }

  speedUp() {
    this.xSpeed += random(15);
  }

  speedDown() {
    this.xSpeed -= random(15);
  }

  changeColor() {
    this.c = color(random(255), random(255), random(255));
  }

  action() {
    this.move();
    this.display();

    if (random(100) === 1) {
      this.speedUp();
    }
    else if (random(100) === 1) {
      this.speedDown();
    }
    else if (random(100) === 1) {
      this.changeColor();
    }
  }
}
