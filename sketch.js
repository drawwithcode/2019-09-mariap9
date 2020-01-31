var bottle
var value = 0;
let ytide = 0.0;


function preload(){
  bottle = loadImage("assets/bottle.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  imageMode(CENTER);
  angleMode(DEGREES);
  rectMode(CENTER);
  setShakeThreshold(20);


}

function draw() {
  background(255);

  var call2 = "not the best trick, I know";
  drawingContext.font = "normal 18px Alata";
  drawingContext.textAlign = "center";
  fill(220);
  text(call2, (width / 2) - 15, (height / 2) + 250);


  push();
  fill(68-value, 252-value, 225, 255- (value/2));
  translate(315,380);
  noStroke();
  beginShape();
  let xtide = value;
  for (let x = 0; x <= 290; x += 10){
    let y = map(noise(xtide,ytide),0,1,450,500);
    vertex(x,y);
    xtide += 0.05;
  }
  ytide += 0.01;
  vertex(260,800);
  vertex(20,800);
  endShape(CLOSE);
  pop();

  push();
  image(bottle, width / 2, height / 2 + 150, bottle.width, bottle.height);
  pop();

  push();
  noFill();
  stroke(220);
  strokeWeight(4);
  ellipse((width/2)-15,(height/2)-360,130);
  pop();

  var call = "tap me";
  drawingContext.font = "normal 21px Alata";
  drawingContext.textAlign = "center";
  fill(220);
  text(call, (width / 2) - 15, (height / 2) - 350);


  var call1 = "Wanna see a magic trick?";
  drawingContext.font = "normal 34px Alata";
  drawingContext.textAlign = "center";
  fill(0);
  text(call1, (width / 2) - 15, (height / 2) - 500);


}

function deviceShaken() {
  value = value + 1;
  if (value >= 500) {
    value = 0;
  }
}


function deviceMoved() {
  value++
}


function touchEnded() {
  DeviceOrientationEvent.requestPermission();
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}
