import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({alpha : true});
renderer.setSize( window.innerWidth, window.innerHeight );
document.getElementById('fonta').appendChild(renderer.domElement);



const Light = new THREE.AmbientLight('#fff',1);
// const Light2 = new THREE.PointLight('#fff');
const controls = new OrbitControls(camera, renderer.domElement);
const loader = new GLTFLoader();
// Light.position.y = 15
// Light.position.x = -15
// Light2.position.y = -15
// Light2.position.x = 15
// Light2.position.z = 7
scene.add(Light)
// scene.add(Light2)
// const coca = document.getElementById('coca');
// const pepsi = document.getElementById('pepsi');
let cans = './public/fonta/scene.gltf';



    
    
loader.load(cans, (gltf) => {
    scene.add(gltf.scene),
        gltf.scene.position.x = 4.7,
        gltf.scene.position.y = -2,
        gltf.scene.scale.set(4.5,4.5,4.5)
    
  
    setInterval(()=>{gltf.scene.rotation.y += 0.005},10)
},
  undefined,
  (error) => {
    console.error(error);
  }

)







camera.position.z = 10;


window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth,window.innerHeight)
})

function animate() {
	requestAnimationFrame( animate );
    renderer.render(scene, camera);
    controls.update()
    
}
animate();