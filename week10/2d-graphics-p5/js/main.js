// console.log('loaded!');


const controls = {
  velocityScale: 0.5,
  gravity: 0.0
};

let particles = [];

// This function will be run once when the sketch loads
// We actually have to use the alternate way of writing
// functions for the main two p5 functions! Weird.
function setup(){
  createCanvas(windowWidth, windowHeight);
  background(0);
  // stroke(255);
  noStroke();
  // noFill();
  fill(255, 0, 0);
  strokeWeight(2);

  // change the colour space we use to specify colours
  colorMode(HSB, 255);

  // add a control panel
  const gui = new dat.GUI();
  gui.add( controls, 'velocityScale', -1, 1 );
  gui.add( controls, 'gravity', -1, 1 );

  // ellipse(windowWidth/2, windowHeight/2, 300, 300);
  //
  // // start x,y   end x,y
  // line(100,100,  500, 500);
  //
  // fill(0, 255, 0); // change fill-in colour to green
  // // center x,y  width x,y
  // rect(400, 100,  200, 200);
  //
  // fill(0, 0, 255);
  // triangle(250, 300,  100, 500,  400, 500);
  //
  // point(50, 50);
}

// This function runs approx 60 times a second,
// i.e. every screen refresh
function draw(){

  background(0); // clear the screen each redraw

  // const x = random(windowWidth);
  // const y = random(windowHeight);
  const x = mouseX;
  const y = mouseY;
  // const size = 50;

  // const h = Math.sqrt(x*x + y*y);

  const vx = mouseX - pwinMouseX + 4;
  const vy = mouseY - pwinMouseY + 4;
  // console.log(vx);

  // get a percentage ('normalized value')
  // for the mouse X position in the window
  // const xPercent = mouseX / windowWidth;
  // // Multiply it by the target range maximum
  // const hue = xPercent * 255;
  // const hue = map(mouseX,  0, windowWidth,  0, 255);
  const hue = frameCount % 255;
  // fill( frameCount % 255, 255, 255);

  // const mappedSize = map(mouseY, 0, windowHeight, 5, 150);
  const size = Math.abs(vx) + 20;

  // fill( hue, 255, 255);

  if( keyIsDown(SHIFT) ){
    // draw a circle
    // ellipse(x, y, mappedSize, mappedSize

    // register the creation of a new circle by adding it to our particle array as an object
    particles.push({ x, y, vx, vy, hue, size, life: 1.0 });
  }

  updateParticles();
} // draw

function updateParticles(){

  const outputParticles = [];

    // loop over our array of particles, drawing each of them
    for( let i = 0; i < particles.length; i++ ){
      const p = particles[i];

      // change the position of the circle based on the velocity of the mouse when it was created
      p.x += p.vx * controls.velocityScale;
      p.y += p.vy * controls.velocityScale;

      p.vy += controls.gravity;

      if( p.x >= windowWidth || p.x <= 0 ){
        p.vx = -p.vx;  // p.vx *= -1;   i.e.    p.vx = p.vx * -1;
      }

      if( p.y >= windowHeight || p.y <= 0 ){
        p.vy = -p.vy; // flip the velocity, i.e. bounce! neg -> pos, or pos -> neg
      }

      p.life -= 0.01;  // decrease the life (which will draw the particle as more transparent)
      if( p.life > 0 ){
        // if the particle is still alive, add it to the output particle array
        outputParticles.push( p );
      }

      fill( p.hue, 255, 255, p.life*255 );
      ellipse( p.x, p.y, p.size, p.size );
    } // for

    particles = outputParticles;

} // updateParticles
