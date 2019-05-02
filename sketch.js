/*
 * @name Animation
 * @description The circle moves.
 */
// Where is the circle
let x, y;
  

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  // Starts in the middle
  x = width / 2;
  y = height;
}



function draw() {
  background(206, 233, 234);
  
  // Draw a circle
  noStroke();
  fill(255, 160, 28);
  ellipse(x+40, y, 20, 40);
  
  fill(255, 160, 28);
  ellipse(x+4, y-10, 50, 40);
  
  fill(255, 160, 28);
  ellipse(x-10, y+1, 20, 40);
  
  fill(255, 131, 15);
  ellipse(x, y, 80, 24);
  
  fill(255);
  ellipse(x-20, y-3, 5, 5);
  
  
  
  
  
  // Jiggling randomly on the horizontal axis
  x = x + random(-10, 1);

  // Moving up at a constant speed
  y = y - 1;
  
  
  // Reset to the bottom
  if (y < 0) {
    y = height;
  }


 if (x < 0) {
    x = width;
   }
}

