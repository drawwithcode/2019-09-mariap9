
var value = 0;
var mtch;

function preload() {
  mtch = loadImage("./assets/matches.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  noStroke();
  frameRate(10);
  setShakeThreshold(30);

}

function draw() {

  fill(255, 190, 0, value);
  ellipse((width / 2) - 3, (height / 2) - 55, 60, 100);

  fill(255, 120, 0, value);
  ellipse((width / 2) - 3, (height / 2) - 80, 90, 180);

  image(mtch, (width / 2) - 15, (height / 2) - 50, mtch.width / 2, mtch.height / 2);

  var call = "shake me";
  drawingContext.font = "normal 15px Alata";
  drawingContext.textAlign = "center";
  fill(0);
  text(call, (width / 2) - 15, (height / 2) - 220);

  var call2 = "to light me up";
  drawingContext.font = "normal 15px Alata";
  drawingContext.textAlign = "center";
  fill(0);
  text(call2, (width / 2) - 15, (height / 2) - 195);
}


function deviceShaken() {
  value++;
  if (value > 255) {
    value = 0;
  }
}

function touchMoved() {
  return false;
}

function touchEnded() {
  DeviceOrientationEvent.requestPermission();
}
