function setup() {
  createCanvas(windowWidth,windowHeight);
  background(233)
  stroke(0)
  fill(255, 255, 255)
  rect(0, 0, 350, 65)
  stroke(0)
  fill(255, 0, 0)
  ellipse(30, 40, 30, 30)
  stroke(0)
  fill(255,255,0)
  ellipse(80, 40, 30, 30)
  stroke(0)
  fill(0, 0, 255)
  ellipse(130, 40, 30, 30)
  stroke(0)
  fill(255, 255, 255)
  ellipse(180, 40, 30, 30)
  fill(0,0,0)
  ellipse(230, 40, 30, 30)
  fill(180, 180, 180)
  rect(270, 43, 60, 15)
  rect(270, 13, 60, 15)
  fill(0, 0, 0)
  text('ERASE', 277, 55)
  text('CLEAR', 275, 25)
}



function mousePressed() {
  if (mouseY < 69) {
    if (mouseX > 10 && mouseX < 50) {
      //RED
      stroke(255, 0, 0)
      fill(255, 0, 0)
    } else if (mouseX > 50 && mouseX < 100) {
      //YELLOW
      stroke(255,255,0)
      fill(255,255,0)
    } else if (mouseX > 100 && mouseX < 150) {
      //BLUE
      stroke(0, 0, 255)
      fill(0, 0, 255)
    } else if (mouseX > 150 && mouseX < 200) {
      //WHITE
      stroke(255, 255, 255)
      fill(255,255,255)
    } else if (mouseX > 200 && mouseX < 250) {
      //BLACK
      stroke(0,0,0)
      fill(0,0,0)
    } else if (mouseX > 250 && mouseX < windowHeight && mouseY > 40) {
      //ERASE
      stroke(233)
      fill(233)
    } else if (mouseX > 250 && mouseX < windowWidth && mouseY < 40) {
      //CLEAR
      stroke(233)
      fill(233)
      rect(0, 66, windowWidth, windowHeight)
      stroke(0, 0, 0)
      fill(0, 0, 0)
    }
  }
}

function mouseDragged() {
  if (mouseY > 70) {
    ellipse(mouseX, mouseY, 10, 10)
  }

}