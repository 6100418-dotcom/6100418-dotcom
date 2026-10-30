// Vectors
// Mason Wick
// 10/27/26

let objects = [];

async function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  if(mouseIsPressed){
    objects.push(new Ball(mouseX, mouseY,));
  }

  for(let o of objects){
    if(!keyIsDown("a")) {
      o.move();
    }
    o.display();
  }
}
 
class Ball{
  constructor(x, y){
    this.pos = createVector(x, y);
    this.vel = createVector(random(-5, 5), -5);
    this.grav = createVector(0,0.7);
    this.force = createVector(0,0);
  }

  calcMouse(){
    this.force = createVector(mouseX,mouseY);
    this.force.sub(this.pos);
    this.force.normalize();
    this.force.mult(2);
  }

  move(){
    if(keyIsDown(" ")){
      this.calcMouse();
      this.vel.add(this.force);
      this.vel.limit(20);
    }
    else{
      this.vel.add(this.grav);
    }
    this.pos.add(this.vel);

    if(this.pos.x < 0 || this.pos.x >= width){
      this.vel.x *= -1;
    }

    if(this.pos.y >= height){
      this.vel.y *= -0.9;
    }
  }

  display(){
    circle(this.pos.x, this.pos.y, 20);

    if(false){
      stroke(255,0,0);
      line(0,0,this.pos.x,this.pos.y);

      let endX = this.pos.x + this.vel.x;
      let endY = this.pos.y + this.vel.y;

      stroke(0,0,255);
      line(this.pos.x, this.pos.y, endX, endY);

      stroke(0,255,0);
      line(endX,endY,endX+this.grav.x,endY+this.grav.y);
    }
  }
}