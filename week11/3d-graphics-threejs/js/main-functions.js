var app = app || {};

app.createSpotlight = function(){

  const spotlight = new THREE.SpotLight( 0xFFFFFF );
  spotlight.position.set( -10, 60, 10 );  // x, y, z
  spotlight.castShadow = true;
  spotlight.shadow.mapSize.width = 2048;
  spotlight.shadow.mapSize.height = 2048;


  return spotlight;
};

app.createPlane = function(){

  // create a 120 x 20 2D sheet, aka 'the runway'
  const planeGeometry = new THREE.PlaneGeometry( 120, 20 );
  const planeMaterial = new THREE.MeshLambertMaterial({
    color: 0xCFD8DC
  });

  // Combine the geometry (shape) and the material (what the
  // surface looks like) into a mesh, the actual 3D object
  const plane = new THREE.Mesh( planeGeometry, planeMaterial );

  plane.rotation.x = -0.5 * Math.PI; // don't ask

  plane.position.x = 15;
  plane.position.y = 0;
  plane.position.z = 0;

  plane.receiveShadow = true; // shadows are cast onto this surface

  return plane;
};

app.createCube = function(){

  const cubeGeometry = new THREE.BoxGeometry( 4, 4, 4 );
  const cubeMaterial = new THREE.MeshLambertMaterial({
    color: 0xFF8F00
  });

  const cube = new THREE.Mesh( cubeGeometry, cubeMaterial );
  cube.position.set( -4, 10, 0 );
  cube.castShadow = true;

  return cube;
};

app.createSphere = function(){

  // args:
  // 1: radius
  // 2: number of triangles to use on X axis to approximate sphere
  // 3: number of triangles to use on Y axis
  const sphereGeometry = new THREE.SphereGeometry( 6, 40, 40 );
  const sphereMaterial = new THREE.MeshPhongMaterial({
    color: 0x039BE5
  });

  const sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
  sphere.position.set( 20, 6, 2 );
  sphere.castShadow = true;

  return sphere;
};


app.animate = function(){
  // this method should be called on average 60 times/second

  app.step += app.controls.bouncingSpeed;
  // console.log(app.step);

  // Make sphere bounce up and down using math(s)
  const height = Math.sin( app.step ) * 10;
  app.sphere.position.y = 6 + Math.abs(height);

  // Make sphere bounce left-to-right as well
  const offsetX = Math.cos( app.step ) * 20;
  app.sphere.position.x = 20 + offsetX;

  app.cube.rotation.x += app.controls.rotationSpeed;
  app.cube.rotation.y += app.controls.rotationSpeed;
  app.cube.rotation.z += app.controls.rotationSpeed;

  app.cube.position.x = app.controls.cubeX;

  app.renderer.render( app.scene, app.camera );
  requestAnimationFrame( app.animate );

};
