import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75, // field of view 
  window.innerWidth / window.innerHeight, // aspect ratio
  0.1, // near clipping plane, hides objects closer than this distance
  1000 // far clipping plane, hides objects further than this distance
);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#lesson-1'),
})
renderer.setSize( 
  window.innerWidth, 
  window.innerHeight,
  // update Style : boolean, if true, sets the style width and height to match the size of the drawing buffer
  // -> could be useful to reduce / increase resolution for performance
 );
document.body.appendChild( renderer.domElement );

 const geometry = new THREE.BoxGeometry( 1, 5, 2 ); // box mesh geometry - aka predefined cube shape
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } ); // basic material with a color
const cube = new THREE.Mesh( geometry, material ); // mesh = geometry + material
scene.add( cube ); 

// by default, the cube and camera are both at (0, 0, 0), so camera need to move back a bit
camera.position.z = 5;

function animate( 
  time // time in milliseconds -> has to devide by 1000 to get seconds
 ) {
      cube.rotation.x = time / 2000;
  cube.rotation.y = time / 1000;
  renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );