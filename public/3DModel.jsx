import "./3DModel.css";
import { gsap } from "gsap";
//import * as THREE from "https://unpkg.com/three@0.126.1/build/three.module.js";
import * as THREE from 'three'
import vertexShader from "./shaders/vertex.glsl";
import fragmentShader from "./shaders/fragment.glsl";
import atmosphereVertexShader from "./shaders/atmosphereVertex.glsl";
import atmosphereFragmentShader from "./shaders/atmosphereFragment.glsl";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";


 
//First commit to test te branch connection with github

//Function LegoAstronauts -->

const LegoAstronauts = () => {
  // camera function
  //test useEffect
  

  const canvasContainer = document.querySelector("#canvasContainerLego");
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    70,
    canvasContainer.offsetWidth / canvasContainer.offsetHeight,
    0.1,
    1000
  );
  console.log(scene);

  //function to render

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    canvas: document.querySelector("#canvasContainerLego"), //--> to improve the image
    alpha: true,
  });

  //OrbitControls
  const orbitControls = new OrbitControls(camera, renderer.domElement);
  orbitControls.enableDamping = true;
  orbitControls.autoRotate = true;
  orbitControls.autoRotateSpeed = 3;
  orbitControls.enableZoom = false;
  
  //test

  //Responsive Desing with Three Js

  window.addEventListener("resize", function () {
    var width = window.innerWidth;
    var height = window.innerHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  });

  //Responsive Desing with Three Js

  renderer.setSize(canvasContainer.offsetWidth, canvasContainer.offsetHeight);
  renderer.setPixelRatio(window.devicePixelRatio); //--> to improve the pixels to the image

  var loader = new GLTFLoader();
  loader.load("/assets/img/LegoAstronauts/scene.gltf", function (gltf) {
    const model = gltf.scene;

    scene.add(model);
  });

  camera.position.z = 4;
  camera.position.y = -1.8;
  camera.position.x = 7;

  const mouse = {
    x: undefined,
    y: undefined,
  };

  //animate function
  const animate = () => {
    requestAnimationFrame(animate);
    orbitControls.update();
    renderer.render(scene, camera);
    // Rotation
    //loader.rotation.y += 0.004;
    
  };

  

  // Light

  const ambientalLight = new THREE.AmbientLight(0xffffff, 1);
  scene.add(ambientalLight);

  const PointLight = new THREE.PointLight(0xffffff, 1);
  PointLight.position.set(6, 7, 6);
  scene.add(PointLight);

  animate();

  // function to move the mouse

  addEventListener("mousemove", () => {
    mouse.x = (event.clientX / innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / innerHeight) * 2 + 1;
  });
  // scene.add(sphere);


};




//Function Moon -->

const Moon = () => {
  // camera function

  const canvasContainer = document.querySelector("#canvasContainerMoon");
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    70,
    canvasContainer.offsetWidth / canvasContainer.offsetHeight,
    0.1,
    1000
  );
  console.log(scene);

  //function to render

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    canvas: document.querySelector("#canvasContainerMoon"), //--> to improve the image
    alpha: true,
  });

  //controlOrbit-->
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableZoom = false;
  //controls.addEventListener('change', renderer);

  //Responsive Desing with Three Js

  window.addEventListener("resize", function () {
    var width = window.innerWidth;
    var height = window.innerHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  });

  renderer.setSize(canvasContainer.offsetWidth, canvasContainer.offsetHeight);
  renderer.setPixelRatio(window.devicePixelRatio); //--> to improve the pixels to the image

  // create a sphere

  const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(5, 50, 50),
    new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        globeTexture: {
          value: new THREE.TextureLoader().load("/assets/img/earth/moon.jpg"),
        },
      },
    })
  );

  // create atmosphere

  const atmosphere = new THREE.Mesh(
    new THREE.SphereGeometry(5, 50, 50),
    new THREE.ShaderMaterial({
      vertexShader: atmosphereVertexShader,
      fragmentShader: atmosphereFragmentShader,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
    })
  );

  atmosphere.scale.set(1.1, 1.1, 1.2);
  // scene.add(atmosphere);

  const group = new THREE.Group();
  group.add(sphere);
  scene.add(group);
  //scene.add(sphere);

  //scene.add(sphere);

  const starGeometry = new THREE.BufferGeometry();
  // const starMaterial = new THREE.PointsMaterial({ color: 0xffffff });

  const starVertices = [];
  for (let i = 0; i < 10000; i++) {
    const x = (Math.random() - 0.5) * 2000;
    const y = (Math.random() - 0.5) * 2000;
    const z = -Math.random() * 2000;

    starVertices.push(x, y, z);
  }

  console.log(starVertices);
  starGeometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(starVertices, 3)
  );

  // const stars = new THREE.Points(starGeometry, starMaterial);
  // scene.add(stars);

  // camera.position.z = 14.5; --> Original size
  // camera.position.z = 16.7 --> mobile size

  if (sphere) {
    camera.position.z = 60;
    camera.position.x = -25;
  }

  const mouse = {
    x: undefined,
    y: undefined,
  };

  //animate function
  const animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);

     //sphere.rotation.y += 0.008;
  //   gsap.to(group.rotation, {
  //     x: -mouse.y * 0.5,
  //     y: mouse.x * 1.4,
  //     duration: 2,
  //   });
  // };

  gsap.to(group.rotation, {
    x:  mouse.y * 0.5,
    y: mouse.x * 3,
    //duration: 2,
  });
};

  animate();

  // function to move the mouse

  addEventListener("mousemove", () => {
    mouse.x = (event.clientX / innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / innerHeight) * 2 + 1;
  });
  // scene.add(sphere);
};




//Function Earth -->

const Earth = () => {
  // camera function
  const canvasContainer = document.querySelector("#canvasContainer");
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    70,
    canvasContainer.offsetWidth / canvasContainer.offsetHeight,
    0.1,
    1000
  );
  console.log(scene);

  //function to render

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    canvas: document.querySelector("canvas"), //--> to improve the image
    alpha: true,
  });

  //controlOrbit-->
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableZoom = false;
  //controls.autoRotate = true;
  
  

   
  

  //Responsive Desing with Three Js

  window.addEventListener("resize", function () {
    var width = window.innerWidth;
    var height = window.innerHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  });

  //Responsive Desing with Three Js

  renderer.setSize(canvasContainer.offsetWidth, canvasContainer.offsetHeight);
  renderer.setPixelRatio(window.devicePixelRatio); //--> to improve the pixels to the image

  // create a sphere

  const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(5, 50, 50),
    new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        globeTexture: {
          value: new THREE.TextureLoader().load("/assets/img/earth/globe.jpg"),
        },
      },
    })
  );
  //test
  //sphere.autoRotate = false;

  // create atmosphere

  const atmosphere = new THREE.Mesh(
    new THREE.SphereGeometry(5, 50, 50),
    new THREE.ShaderMaterial({
      vertexShader: atmosphereVertexShader,
      fragmentShader: atmosphereFragmentShader,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
    })
  );

  atmosphere.scale.set(1.1, 1.1, 1.2);
  scene.add(atmosphere);

  const group = new THREE.Group();
  group.add(sphere);
  //scene.add(group);
  scene.add(sphere);

  camera.position.z = 15.6;
  
  
  
  const mouse = {
    x: undefined,
    y: undefined,
  };



  //animate function
  const animate  = () =>  {
    
    requestAnimationFrame(animate);
    

    sphere.rotateY (0.0005 * Math.PI);
    renderer.render( scene, camera );
    //requestAnimationFrame(animate);
    
    //  gsap.to(group.rotation, {
    //    x: -mouse.y * 0.5,
    //    y: mouse.x * 1.4,
    //    duration: 2,
    //  }); 

    
  };

  animate();

  // function to move the mouse

  addEventListener("mousemove", () => {
    mouse.x = (event.clientX / innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / innerHeight) * 2 + 1;
  });
};


//Function Avatar -->

const Avatar = () => {
  // camera function

  const canvasContainer = document.querySelector("#canvasContainerAvatar");
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    70,
    canvasContainer.offsetWidth / canvasContainer.offsetHeight,
    0.1,
    1000
  );
  console.log(scene);

  //function to render

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    canvas: document.querySelector("#canvasContainerAvatar"), //--> to improve the image
    alpha: true,
  });

  //OrbitControls
  const orbitControls = new OrbitControls(camera, renderer.domElement);
  orbitControls.enableDamping = true;
  orbitControls.autoRotate = true;
  orbitControls.autoRotateSpeed = 6.8;
  orbitControls.enableZoom = false;

  //Responsive Desing with Three Js

  window.addEventListener("resize", function () {
    var width = window.innerWidth;
    var height = window.innerHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  });

  //Responsive Desing with Three Js

  renderer.setSize(canvasContainer.offsetWidth, canvasContainer.offsetHeight);
  renderer.setPixelRatio(window.devicePixelRatio); //--> to improve the pixels to the image

  var loader = new GLTFLoader();
  loader.load("/assets/img/avatar/scene.gltf", function (gltf) {
    const model = gltf.scene;

    scene.add(model);

    model.position.x = -180;
  });

  camera.position.z = 290;
  camera.position.y = 130;

  const mouse = {
    x: undefined,
    y: undefined,
  };

  //animate function
  const animate = () => {
    orbitControls.update();
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  };

  // Light

  const ambientalLight = new THREE.AmbientLight(0xffffff, 1);
  scene.add(ambientalLight);

  const PointLight = new THREE.PointLight(0xffffff, 1);
  PointLight.position.set(6, 7, 6);
  scene.add(PointLight);

  animate();

  // function to move the mouse

  addEventListener("mousemove", () => {
    mouse.x = (event.clientX / innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / innerHeight) * 2 + 1;
  });
  // scene.add(sphere);
};




//Function Phoenix -->
//gltf Blue Astronaut
const Phoenix = () => {
  // camera function

  const canvasContainer = document.querySelector("#canvasContainerPhoenix");
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    70,
    canvasContainer.offsetWidth / canvasContainer.offsetHeight,
    0.1,
    1000
  );
  console.log(scene);

  //function to render

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    canvas: document.querySelector("#canvasContainerPhoenix"), //--> to improve the image
    alpha: true,
  });

  //OrbitControls
  const orbitControls = new OrbitControls(camera, renderer.domElement);
  orbitControls.enableDamping = true;
  orbitControls.autoRotate = true;
  orbitControls.autoRotateSpeed = 6.5;
  orbitControls.enableZoom = false;
  

  //Responsive Desing with Three Js

  window.addEventListener("resize", function () {
    var width = window.innerWidth;
    var height = window.innerHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  });

  //Responsive Desing with Three Js

  renderer.setSize(canvasContainer.offsetWidth, canvasContainer.offsetHeight);
  renderer.setPixelRatio(window.devicePixelRatio); //--> to improve the pixels to the image

  var loader = new GLTFLoader();
  loader.load("/assets/img/gltf/scene.gltf", function (gltf) {
    const model = gltf.scene;

    scene.add(model);
      model.position.x = -220;
    // model.position.y = 100;
    // model.position.z = 150;
  });

  // Phoenix Blue Astronaut
 
  camera.position.z = 400;
  camera.position.y = 40;
  camera.position.x = 50;

  

  // camera.position.x = 150;


  const mouse = {
    x: undefined,
    y: undefined,
  };

  //animate function
  const animate = () => {
    orbitControls.update();
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    // Rotation
    // loader.rotation.y += 0.004;
    
  };

  // Light

  const ambientalLight = new THREE.AmbientLight(0xffffff, 1);
  scene.add(ambientalLight);

  const PointLight = new THREE.PointLight(0xffffff, 1);
  PointLight.position.set(6, 7, 6);
  scene.add(PointLight);

  animate();

  // function to move the mouse

  addEventListener("mousemove", () => {
    mouse.x = (event.clientX / innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / innerHeight) * 2 + 1;
  });
  // scene.add(sphere);
};




// Animation Model Dron --> test

 const AnimationModel = () => {
//   // camera function
//   //test useEffect
  

  const canvasContainer = document.querySelector("#canvasContainerAnimation");
   const scene = new THREE.Scene();
   const camera = new THREE.PerspectiveCamera(
     70,
     canvasContainer.offsetWidth / canvasContainer.offsetHeight,
     0.1,
     1000
   );
   console.log(scene);

//   //function to render

   const renderer = new THREE.WebGLRenderer({
     antialias: true,
     canvas: document.querySelector("#canvasContainerAnimation"), //--> to improve the image
     alpha: true,
   });

//   //OrbitControls
   const orbitControls = new OrbitControls(camera, renderer.domElement);
   orbitControls.enableDamping = true;
   orbitControls.autoRotate = true;
   orbitControls.autoRotateSpeed = 23;
   orbitControls.enableZoom = false;
  
//   //test

//   //Responsive Desing with Three Js

   window.addEventListener("resize", function () {
     var width = window.innerWidth;
     var height = window.innerHeight;
     camera.aspect = width / height;
     camera.updateProjectionMatrix();
     renderer.setSize(width, height);
   });

//   //Responsive Desing with Three Js

   renderer.setSize(canvasContainer.offsetWidth, canvasContainer.offsetHeight);
   renderer.setPixelRatio(window.devicePixelRatio); //--> to improve the pixels to the image

   var loader = new GLTFLoader();
   let mixer; // Animation mixer

    // to content the whole object

    loader.load("/assets/img/BlackHole/scene.gltf", function (gltf) {
    mixer = new THREE.AnimationMixer(gltf.scene);
    const action = mixer.clipAction(gltf.animations[0]); // Assuming there is at least one animation
    action.play();

     const model = gltf.scene;
     
      scene.add(model);

     //model.position.x = -180;
    
   });


  //  camera.position.z = 4;
  //  camera.position.y = -1.8;
  //  camera.position.x = 2;
  

 
   camera.position.z = 18;
   camera.position.y = 18;
   camera.position.x = 10;

   const mouse = {
     x: undefined,
     y: undefined,
   };

//   //animate function
   const animate = () => {
     requestAnimationFrame(animate);

       // Update the animation mixer
       if (mixer) {
        const delta = 0.06; // You can use clock.getDelta() for a more accurate value
        mixer.update(delta);
    }

     orbitControls.update();
     renderer.render(scene, camera);
     
   };

  

// Light

   const ambientalLight = new THREE.AmbientLight(0xffffff, 1);
   scene.add(ambientalLight);

   const PointLight = new THREE.PointLight(0xffffff, 1);
   PointLight.position.set(6, 7, 6);
   scene.add(PointLight);

   animate();

//   // function to move the mouse

   addEventListener("mousemove", () => {
     mouse.x = (event.clientX / innerWidth) * 2 - 1;
     mouse.y = -(event.clientY / innerHeight) * 2 + 1;
   });
//   // scene.add(sphere);


 };

// Animation Model --> test



// SateliteModel -->


const SateliteModel = () => {
  // camera function

  const canvasContainer = document.querySelector("#canvasContainerSatelite");
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    70,
    canvasContainer.offsetWidth / canvasContainer.offsetHeight,
    0.1,
    1000
  );
  console.log(scene);

  //function to render

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    canvas: document.querySelector("#canvasContainerSatelite"), //--> to improve the image
    alpha: true,
  });

  //OrbitControls
  const orbitControls = new OrbitControls(camera, renderer.domElement);
  orbitControls.enableDamping = true;
  orbitControls.autoRotate = true;
  orbitControls.autoRotateSpeed = 4;
  orbitControls.enableZoom = false;
  

  //Responsive Desing with Three Js

  window.addEventListener("resize", function () {
    var width = window.innerWidth;
    var height = window.innerHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  });

  //Responsive Desing with Three Js

  renderer.setSize(canvasContainer.offsetWidth, canvasContainer.offsetHeight);
  renderer.setPixelRatio(window.devicePixelRatio); //--> to improve the pixels to the image

  var loader = new GLTFLoader();
  //loader.setOption({ uv2: false });
  loader.load("/assets/img/SateliteFinal/scene.gltf", function (gltf) {
    const model = gltf.scene;

    scene.add(model);
      //model.position.x = -220;
     //model.position.y = 10;
    // model.position.z = 150;
  });

  // Phoenix Blue Astronaut
 
  //camera.position.z = ;
  camera.position.y = 1;
  camera.position.x = 3.5;

  

  // camera.position.x = 150;


  const mouse = {
    x: undefined,
    y: undefined,
  };

  //animate function
  const animate = () => {
    orbitControls.update();
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    // Rotation
    // loader.rotation.y += 0.004;
    
  };

  // Light

  const ambientalLight = new THREE.AmbientLight(0xffffff, 1);
  scene.add(ambientalLight);

  const PointLight = new THREE.PointLight(0xffffff, 1);
  PointLight.position.set(6, 7, 6);
  scene.add(PointLight);

  animate();

  // function to move the mouse

  addEventListener("mousemove", () => {
    mouse.x = (event.clientX / innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / innerHeight) * 2 + 1;
  });
  // scene.add(sphere);
};


//--> SateliteModel










const Models = () => {
  
  Earth();
  Avatar();
  LegoAstronauts();
  Moon();
  Phoenix();
  AnimationModel();
  SateliteModel();
  
 
  
  
};

Models();
