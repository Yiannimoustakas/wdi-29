var app = app || {};

app.step =  0;

app.controls = {
  rotationSpeed: 0.01,
  bouncingSpeed: 0.1,
  cubeX: 0,
  numParticles: 1000000,
  particleDistribution: 200
};

app.init = function(){
  console.log('init()');

  app.gui = new dat.GUI();
  app.gui.add( app.controls, 'rotationSpeed', 0, 0.5 );
  app.gui.add( app.controls, 'cubeX', -50, 50 );
  app.gui.add( app.controls, 'bouncingSpeed', -0.5, 0.5 );


  // The scene keeps track of all the objects we're rendering,
  // including the lights and the camera
  app.scene = new THREE.Scene();

  app.width = window.innerWidth;
  app.height = window.innerHeight;


  // The camera defines our view into the scene from a specific perspective, i.e. position
  // 4 args:
  // field of view in degrees
  // screen ratio
  // near field (how close things can get to camera before we ignore them)
  // far field (how far things can get before we can't see them anyway and should ignore them)
  app.camera = new THREE.PerspectiveCamera( 60, app.width/app.height, 0.1, 1000 );
  app.camera.position.x = -30;
  app.camera.position.y = 40;
  app.camera.position.z = 30;
  app.camera.lookAt( app.scene.position );  // Camera looks at center of scene (x=0, y=0, z=0)


  // Add visible x,y,z guides to the scene
  // app.axes = new THREE.AxesHelper( 40 );
  // app.scene.add(  app.axes );


  // app.plane = app.createPlane();
  // app.scene.add( app.plane );

  const numCubes = 1;
  app.cubes = [];
  for( let i = 0; i < numCubes; i++ ){
    const cube = app.createCube(
      THREE.Math.randInt(-500, 500),
      THREE.Math.randInt(-500, 500),
      THREE.Math.randInt(-500, 500)
    );
    app.cubes.push( cube );
    app.scene.add( cube );
  }
  // app.cube = app.createCube();
  // app.scene.add( app.cube );

  app.spotlight = app.createSpotlight();
  app.scene.add( app.spotlight );

  // Ambient light will light everything in the scene
  // in the same way (non-directional)

  app.ambient = new THREE.AmbientLight( 0x666666 );
  app.scene.add( app.ambient );

  //
  // app.spotlightHelper = new THREE.SpotLightHelper( app.spotlight );
  // app.scene.add( app.spotlightHelper );

  app.sphere = app.createSphere();
  app.scene.add( app.sphere );

  app.particleSystem = app.createParticleSystem();
  app.scene.add( app.particleSystem );


  // The renderer calculates how to draw all the objects in the scene, based on the lighting and
  // camera perspective.... and renders it all down to a 2D image to show in a <canvas> element
  // in the browser
  app.renderer = new THREE.WebGLRenderer();
  app.renderer.setSize( app.width, app.height );
  app.renderer.setClearColor( 0x000000 ); // background colour
  // app.renderer.shadowMap.enabled = true; // shadows are expensive to calculate, thus disabled by default
  // app.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  // Attach the renderer's <canvas> element into the DOM inside our output DIV
  document.getElementById('output').appendChild( app.renderer.domElement );


  app.mouseControls = new THREE.OrbitControls( app.camera, app.renderer.domElement );

  app.stats = app.addStats();

  // Actually calculate what the scene looks like right now, based on the camera position
  // (and update the canvas with this image)

  app.animate();
};

// Vanilla JS version of jQuery's $(document).ready( app.init );
window.onload = app.init;

app.resize = function(){
  app.width = window.innerWidth;
  app.height = window.innerHeight;

  app.camera.aspect = app.width/app.height;
  app.camera.updateProjectionMatrix();

  app.renderer.setSize( app.width, app.height );
};

window.addEventListener( 'resize', app.resize );


app.addStats = function(){
  const stats = new Stats();
  stats.setMode(0);
  stats.domElement.style.position = 'absolute';
  stats.domElement.style.left = '0px';
  stats.domElement.style.top = '0px';

  document.getElementById('stats').appendChild( stats.domElement );

  return stats;
};
