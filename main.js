import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import first_rigged_fox from './public/assets/first_rigged_fox.glb?url';

const scene = new THREE.Scene();

const fox = new THREE.Object3D();
scene.add(fox);

// rotate fox 180
fox.rotation.y = Math.PI;


const loader = new GLTFLoader();
loader.load(first_rigged_fox, gltf => {
  fox.add(gltf.scene);
});

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 6;
camera.position.y = 3;
// tilt camera down 
camera.rotation.x = -0.2;




const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(0, 0, 5);
scene.add(light);



const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
// Define the render function
const render = () => {
    renderer.render(scene, camera);
  };
  
  // Call the render function initially
  render();
  
  // Listen for changes in the controls and call the render function
  controls.addEventListener('change', render);
const animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
};

animate();



