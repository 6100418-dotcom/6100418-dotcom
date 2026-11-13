// Image Manipulation Demo
// Mason Wick
// 11/10/26

let pilot, chip;

async function loadAsset() {
  pilot = await loadImage("/assets/aviator.png");
  chip = await loadImage("/assets/chip.jpg");
}

async function setup() {
  await loadAsset();
  createCanvas(640,480);
  myVideo = createCapture(VIDEO);
  myVideo.hide();
  pixelDensity(1);
}

function draw() {
  background(255);
  image(myVideo, 0, 0);
  loadPixels();

  // boost();

  // greyscale();

  background(0);

  textEffect();

  // updatePixels();
}

function textEffect(){
  fill(255);
  let scaleAmount = 5 ;
  textSize(scaleAmount);
  for (let x = 0; x < width; x+=scaleAmount){
    for (let y = 0; y < height; y+=scaleAmount){ 
      let avg = getAvg(x,y);
      if(avg > 200){
        text("&", x, y);
      }
      else if (avg > 120){
        text("x", x, y);
      }
      else if (avg > 50){
        text("-", x, y);
      }
      else{
        text(".", x, y);
      }
    }
  }
}

function boost() {
  let boostAmount = map(mouseX, 0, width, -255, 255);
  for (let i = 0; i < pixels.length; i += 4) {
    let r = pixels[i] + boostAmount;
    let g = pixels[i + 1] + boostAmount;
    let b = pixels[i + 2] + boostAmount;


    setPixelOneD(i, r, g, b);
  }
}

function greyscale(){
  for (let x = 0; x < width; x++){
    for (let y = 0; y < height; y++){  
      let avg = getAvg(x,y);
      setPixel(x,y,avg,avg,avg);
    }
  }
}



function setPixelOneD(pos, r, g, b) {
  pixels[pos] = r;
  pixels[pos + 1] = g;
  pixels[pos + 2] = b;
}

function getAvg(x,y){
  let index = (y*width+x)*4;
  let r = pixels[index];
  let g = pixels[index+1];
  let b = pixels[index+2];
  return int((r+g+b)/2);
}

function setPixel(x,y,r,g,b){
  let index = (y*width+x)*4;
  setPixelOneD(index,r,g,b);
}

function getRed(x,y){
  let index = (y*width+x)*4;
  return pixelDensity(index);
}

function getGreen(x,y){
  let index = (y*width+x)*4;
  return pixelDensity(index+1);
}

function getBlue(x,y){
  let index = (y*width+x)*4;
  return pixelDensity(index+2);
}