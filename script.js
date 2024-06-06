class Spiral {
    constructor(x, y, size, numRects, angleIncrement, sizeDecrement) {
      this.x = x;
      this.y = y;
      this.size = size;  // Size of the first rectangle
      this.numRects = numRects;  // Number of rectangles to draw
      this.angleIncrement = angleIncrement; // Angle increment for rotation
      this.sizeDecrement = sizeDecrement;   // Size decrement for rectangles
    }
  
    draw() {
      let angle = 0; // Initial angle for rotation
      let size = this.size;
      
      // Move the origin to the specified position
      translate(this.x, this.y);
      
      for (let i = 0; i < this.numRects; i++) {
        push(); // Save the current coordinate system state
        rotate(angle); // Rotate the coordinate system
        rect(-size / 8, -size / 8, size, size); // Draw a rectangle
        pop(); // Restore the previous coordinate system state
        angle += this.angleIncrement; // Update the angle for the next iteration
        size /= this.sizeDecrement; // Update the size for the next iteration
      }
    }
  }
  
  let spiral;
  
  function setup() {
    createCanvas(800, 800);
    background(255);
    noFill();
    stroke(0);
    
    // Initialize the spiral object
    spiral = new Spiral(width / 2, height - 600, 300, 80, PI / 17, 1.05); // Create a new spiral object
    
    // Draw the spiral
    spiral.draw();
  }
  
  function draw() {
    // No need to redraw
    noLoop();
  }
  
  