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
  createCanvas(pilot.width, pilot.height);
  pixelDensity(1);
}

function draw() {
  background(220);
  image(pilot, 0, 0);
  loadPixels();
  boost();
  updatePixels();
}

function boost() {
  let boostAmount = map(mouseX, 0, width, -50, 50);
  for (let i = 0; i < pixels.length; i += 4) {
    let r = pixels[i] + boostAmount;
    let g = pixels[i + 1] + boostAmount;
    let b = pixels[i + 2] + boostAmount;

    setPixelOneD(i, r, g, b);
  }
}

function setPixelOneD(pos, r, g, b) {
  pixels[pos] = r;
  pixels[pos + 1] = g;
  pixels[pos + 2] = b;
}