var xaxis = 35;
var increaseamount = 1;
function setup() {
  createCanvas(displayWidth,displayHeight);
  background(150);
}
//function that plays functions on a loop
function draw() {
  rocketshape();
}

function rocketshape() {
  ellipse(xaxis,35,55,55);
  xaxis = xaxis + increaseamount;
}