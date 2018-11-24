var app = app || {};

app.createSpotlight = function(){

  const spotlight = new THREE.SpotLight( 0xFFFFFF );
  spotlight.position.set( -30, 60, 10 );  // x, y, z
  // spotlight.castShadow = true;
  // spotlight.shadow.mapSize.width = 2048;
  // spotlight.shadow.mapSize.height = 2048;


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

  // plane.receiveShadow = true; // shadows are cast onto this surface

  return plane;
};

app.createCube = function(xPos, yPos, zPos){

  const cubeGeometry = new THREE.BoxGeometry(
    4, 4, 4
    // THREE.Math.randInt(4, 200),
    // THREE.Math.randInt(4, 200)
  );

  const cubeMaterial = new THREE.MeshLambertMaterial({
    color: 0xFF8F00,
    // wireframe: true
  });

  const cube = new THREE.Mesh( cubeGeometry, cubeMaterial );

  cube.position.set( -4, 10, 0 );
  // cube.position.set( xPos, yPos, zPos );

  cube.material.color.setRGB(
    Math.random(),
    Math.random(),
    Math.random()
  );

  cube.rotation.set(
    Math.random(),
    Math.random(),
    Math.random()
  );

  // cube.userData.uniqueRotation = ??;

  // cube.castShadow = true;

  return cube;
};

app.createSphere = function(){

  // args:
  // 1: radius
  // 2: number of triangles to use on X axis to approximate sphere
  // 3: number of triangles to use on Y axis
  const sphereGeometry = new THREE.SphereGeometry(30, 40, 40 );
  const sphereMaterial = new THREE.MeshPhongMaterial({
    color: 0xFFFFFF,
    map: THREE.ImageUtils.loadTexture('img/earth.jpg'),
    side: THREE.DoubleSide
  });

  const sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
  sphere.position.set( 0, 0, 0 );

  // sphere.castShadow = true;

  return sphere;
};


app.createParticleSystem = function(){

  const particles = new THREE.Geometry();
  const dist = app.controls.particleDistribution;

  for( let i = 0; i < app.controls.numParticles; i++ ){
    // Give the particle a random position
    const particle = new THREE.Vector3(
      THREE.Math.randInt(-dist, dist),
      THREE.Math.randInt(-dist, dist),
      100
      // THREE.Math.randInt(-dist, dist)
    );

    particle.vx = 0; //THREE.Math.randInt(-1, 1);
    particle.vy = 0; //THREE.Math.randInt(-1, 1);
    particle.vz = 0; //THREE.Math.randInt(-1, 1);

    particles.vertices.push( particle );
  } // for

  const particleMaterial = new THREE.PointsMaterial({
    color: 0xFFFFFF,
    size: 6,
    map: THREE.ImageUtils.loadTexture('img/snowflake.png'),
    blending: THREE.AdditiveBlending,
    transparent: true,
    alphaTest: 0.5
  });

  const particleSystem = new THREE.Points( particles, particleMaterial );

  return particleSystem;
};



app.animate = function(){
  // this method should be called on average 60 times/second

  app.stats.update();

  app.step += app.controls.bouncingSpeed;
  // console.log(app.step);

  // // Make sphere bounce up and down using math(s)
  // const height = Math.sin( app.step ) * 10;
  // app.sphere.position.y = 6 + Math.abs(height);
  //
  // // Make sphere bounce left-to-right as well
  // const offsetX = Math.cos( app.step ) * 20;
  // app.sphere.position.x = 20 + offsetX;

  app.sphere.rotation.y += app.controls.rotationSpeed;

  app.cubes.forEach( cube => {
    cube.rotation.x += app.controls.rotationSpeed;
    cube.rotation.y += app.controls.rotationSpeed;
    cube.rotation.z += app.controls.rotationSpeed;
  });

  // app.cube.rotation.x += app.controls.rotationSpeed;
  // app.cube.rotation.y += app.controls.rotationSpeed;
  // app.cube.rotation.z += app.controls.rotationSpeed;
  //
  // app.cube.position.x = app.controls.cubeX;

  app.animateParticleSystem();

  app.renderer.render( app.scene, app.camera );
  requestAnimationFrame( app.animate );

};  // app.animate()


app.animateParticleSystem = function(){

  const particles = app.particleSystem.geometry.vertices;

  for( let i = 0; i < particles.length; i++ ){
    const p = particles[i];

    // p.vy = app.controls.bouncingSpeed;

    // Newton yo!
    // work out the distance of the particle from the earth
    // (i.e. from the center of the scene which is 0, 0, 0)
    const distSquared = (p.x * p.x) + (p.y * p.y) + (p.z * p.z);

    // only apply the gravitational force if the particle
    // isn't too close to the earth (because the velocities
    // get too high and the particles shoot off forever)
    if( distSquared > 10.0 ){
      const force = (10.0 / distSquared) * -0.02;
      p.vx += force * p.x;
      p.vy += force * p.y;
      p.vz += force * p.z;
    }

    // add the velocity for each dimension to the position
    // for the same dimension, to get the new position
    p.x += p.vx * app.controls.bouncingSpeed;
    p.y += p.vy * app.controls.bouncingSpeed;
    p.z += p.vz * app.controls.bouncingSpeed;

    // if( p.y < -app.controls.particleDistribution ){
    //   p.y = app.controls.particleDistribution;
    // }

  }

  app.particleSystem.geometry.verticesNeedUpdate = true;
}; // app.animateParticleSystem()
