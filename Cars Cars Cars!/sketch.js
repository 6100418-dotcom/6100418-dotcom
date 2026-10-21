// Cars Cars Cars!
// Mason Wick
// 10/20/26

// Globals
let eastbound = [];
let westbound = [];
let Light = 0;
let canGo = true;
let startFrame = 0;

async function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 20; i++) {
    eastbound.push(new Vehicle(int(random(0, 2)), color(random(255), random(255), random(255)), random(width), random(height*0.45, height*0.35), 0, random(5)));
    westbound.push(new Vehicle(int(random(0, 2)), color(random(255), random(255), random(255)), random(width), random(height*0.63, height*0.51), 1, random(5)));
  }
  Light = new TrafficLight(0);
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
  Light.display();
}

function mousePressed() {
  if (mouseButton.left && keyIsDown(SHIFT)) {
    westbound.push(new Vehicle(int(random(0, 2)), color(random(255), random(255), random(255)), random(width), random(height*0.63, height*0.51), 1, random(5)));
  }
  else {
    eastbound.push(new Vehicle(int(random(0, 2)), color(random(255), random(255), random(255)), random(width), random(height*0.45, height*0.35), 0, random(5)));
  }
}

function keyPressed() {
  if (key === ' ') {
    Light.switch();
    startFrame = frameCount;
  }
}

function drawRoad() {
  fill(0);
  rect(0, height / 3, width, height / 3);
  fill("yellow");
  for (let i = 0; i * 50 < width; i++) {
    rect(50 * i, height / 2 - 5, 30, 5);
  }
}


class Vehicle {
  constructor(type, c, x, y, d, xSpeed) {
    this.type = type;
    this.c = c;
    this.d = d;
    this.x = x;
    this.y = y;
    this.xSpeed = xSpeed;
  }

  display() {
    if (this.type === 0) {
      fill(this.c);
      rect(this.x, this.y, 50, 20);
      fill(255);
      rect(this.x, this.y - 4, 10, 5);
      rect(this.x + 40, this.y - 4, 10, 5);
      rect(this.x, this.y + 20, 10, 5);
      rect(this.x + 40, this.y + 20, 10, 5);
    }
    else {
      fill(this.c);
      rect(this.x, this.y, 50, 25);
      fill(255);
      if (this.d === 0) {
        rect(this.x + 30, this.y, 5, 25);
      }
      else {
        rect(this.x + 15, this.y, 5, 25);
      }
    }
  }

  move() {
    if (this.d === 0) {
      this.x += this.xSpeed;
      if (this.x >= width) {
        this.x = 0;
      }
    }
    else {
      this.x -= this.xSpeed;
      if (this.x <= 0) {
        this.x = width;
      }
    }
  }

  speedUp() {
    this.xSpeed += random(5);
    if (this.xSpeed >= 25) {
      this.xSpeed = random(5);
    }
  }

  speedDown() {
    this.xSpeed -= random(5);
    if (this.xSpeed <= 0) {
      this.xSpeed = random(5);
    }
  }

  changeColor() {
    this.c = color(random(255), random(255), random(255));
  }

  action() {
    this.move();
    this.display();

    if (int(random(100)) === 1) {
      this.speedUp();
    }
    else if (int(random(100)) === 1) {
      this.speedDown();
    }
    else if (int(random(100)) === 1) {
      this.changeColor();
    }
  }
}

class TrafficLight {
  constructor(c) {
    this.c = c;
  }

  display() {
    if (this.c === 0) {
      fill("green");
    } else {
      fill("red");
    }
    circle(width / 2, height / 5, 100);
  }

  switch() {
    if (this.c === 0) {
      this.c = 1;
      canGo = false;
    }
  }
}
