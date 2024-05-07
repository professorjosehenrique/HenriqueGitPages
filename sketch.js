function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  stroke("blue");
  fill("red");
  
  console.log(mouseIsPressed);
  rect(mouseX, mouseY, 100, 150);
}
