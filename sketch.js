function setup() {
    createCanvas(630, 630);
    background(255);
  }
  
  function draw() {
  
  
    stroke("red");
    fill("blue");
  
    //  console.log(mouseIsPressed)
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 25, 40);
    }
  }
  