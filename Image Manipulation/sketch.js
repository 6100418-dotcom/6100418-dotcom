// Image Manipulation
// Mason Wick
// 11/16/26

let chip, race, nuit, hand, butterfly;

async function loadAsset(){
  chip = await loadImage("/assets/chip.jpg");
  race = await loadImage("/assets/race.jpg");
  nuit = await loadImage("/assets/nuit.jpg");
  hand = await loadImage("/assets/hand.jpg");
  butterfly = await loadImage("/assets/butterfly.jpg");
}

async function setup() {
  await loadAsset();
  createCanvas(600, 600);
  pixelDensity(1);
}

function draw() {
  background(255);
  image(race, 0, 0);
  loadPixels();

  // majority();

  updatePixels();
}

function majority(){
  for(let x = 0; x < width; x++){
    for(let y = 0; y < height; y++){
      let r = getRed(x,y);
      let g = getGreen(x,y);
      let b = getBlue(x,y);
      if(r > g && r > b){
        r = 255;
        g = 0;
        b = 0;
      }
      else if (g > r && g > b){
        r = 0;
        g = 255;
        b = 0;
      }
      else if (b > r && b > g){
        r = 0;
        g = 0;
        b = 255;
      }
      else if (r === b || r === g){
        r = 255;
        g = 0;
        b = 0;
      }
      else{
        r = 0;
        g = 255;
        b = 0;
      }
      setPixel(x,y,r,g,b);
    }
  }
}

function getRed(x,y){
  let index = (y*width+x)*4;
  return pixels[index];
}

function getGreen(x,y){
  let index = (y*width+x)*4;
  return pixels[index+1];
}

function getBlue(x,y){
  let index = (y*width+x)*4;
  return pixels[index+2];
}

function setPixelOneD(pos, r, g, b) {
  pixels[pos] = r;
  pixels[pos + 1] = g;
  pixels[pos + 2] = b;
}

function setPixel(x,y,r,g,b){
  let index = (y*width+x)*4;
  setPixelOneD(index,r,g,b);
}