// Object-Object Interactions
// Mason Wick
// 10/16/26

// Globals
let nodes = [];
let reach = 150;

async function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0, 40);
  // If no deletions, loop by item
  for (let n of nodes) {
    n.move();
    n.connect(nodes);
    n.display();
  }
}

function mousePressed() {
  if (mouseButton.left) {
    nodes.push(new CsNode(mouseX, mouseY));
  }
  else if (mouseButton.center) {
    for(let i = 0; i < 30; i++) {
      nodes.push(new CsNode(mouseX, mouseY));
    }
  }
}

class CsNode {
  // 1.Constructor
  constructor(x, y) {
    // Properties related to pos/display
    this.x = x;
    this.y = y;
    this.size = 5;
    this.c = color(random(250), random(250), random(250));

    // Properties related to movement
    this.xTime = random(100);
    this.yTime = random(100);
    this.timeShift = 0.01;
    this.maxSpeed = 5;
  }

  // 2.Class Methods
  display() {
    // Render object on the screen
    fill(this.c);
    noStroke();
    circle(this.x, this.y, this.size);
  }

  move() {
    // User perlin noise for x, y movement
    let xSpeed = noise(this.xTime);
    xSpeed = map(xSpeed, 0, 1, -this.maxSpeed, this.maxSpeed);
    this.xTime += this.timeShift;

    this.x += xSpeed;
    if (this.x > width) {
      this.x = 0;
    }
    else if (this.x < 0) {
      this.x = width;
    }

    let ySpeed = noise(this.yTime);
    ySpeed = map(ySpeed, 0, 1, -this.maxSpeed, this.maxSpeed);
    this.yTime += this.timeShift;

    this.y += ySpeed;
    if (this.y > height) {
      this.y = 0;
    }
    else if (this.y < 0) {
      this.y = height;
    }
  }

  connect(nodeArray) {
    // Chech if this current CsNode is close to any other CsNode. If so join with a line.
    stroke(this.c);
    for (let n of nodeArray) {
      if(n !== this) {
        let d = dist(this.x, this.y, n.x, n.y);
        if (d < reach) {
          line(this.x, this.y, n.x, n.y);
        }
      }
    }
  }
}