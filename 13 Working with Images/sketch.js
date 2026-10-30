// Working with Images
// Mason Wick
// 10/30/26

let lionL, lionR;
let dir = "left";

let pinImages = [];
let pinIndex = 0;

async function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);

  for (let i = 0; i < 9; i++) {
    pinImages.push(await loadImage("/assets/pin-0" + i + ".png"));
  }
  
  lionL = await loadImage("/assets/lion-left.png");
  lionR = await loadImage("/assets/lion-right.png");
}

function draw() {
  background(220);
  drawLion();
  drawPin();
}

function drawPin(){
  image(pinImages[pinIndex], width/2, height * 0.8);
  if(frameCount % 2 === 0){
    pinIndex++;
    if(pinIndex > 8) pinIndex = 0;
  }
}


function drawLion() {
  if(movedX > 0){
    dir = "right";
  }
  else if (movedX < 0){
    dir = "left";
  }

  switch(dir){
    case "left": 
      image(lionL,mouseX,mouseY,lionL.width/2, lionL.height/2);
    break;

    case "right": 
      image(lionR,mouseX,mouseY,lionR.width/2, lionR.height/2);
    break;
  }
}