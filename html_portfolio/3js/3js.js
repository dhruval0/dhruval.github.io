/*
Most of the stuff in here is just bootstrapping. Essentially it's just
setting ThreeJS up so that it renders a flat surface upon which to draw 
the shader. The only thing to see here really is the uniforms sent to 
the shader. Apart from that all of the magic happens in the HTML view
under the fragment shader.
*/

//First style of 3js
// let container;
// let camera, scene, renderer;
// let uniforms;

// let loader=new THREE.TextureLoader();
// let texture;
// loader.setCrossOrigin("anonymous");
// loader.load(
//   'https://s3-us-west-2.amazonaws.com/s.cdpn.io/982762/noise.png',
//   function do_something_with_texture(tex) {
//     texture = tex;
//     texture.wrapS = THREE.RepeatWrapping;
//     texture.wrapT = THREE.RepeatWrapping;
//     texture.minFilter = THREE.LinearFilter;
//     init();
//     animate();
//   }
// );

// function init() {
//   container = document.getElementById( 'container' );

//   camera = new THREE.Camera();
//   camera.position.z = 1;

//   scene = new THREE.Scene();

//   var geometry = new THREE.PlaneBufferGeometry( 2, 2 );

//   uniforms = {
//     u_time: { type: "f", value: 1.0 },
//     u_resolution: { type: "v2", value: new THREE.Vector2() },
//     u_noise: { type: "t", value: texture },
//     u_mouse: { type: "v2", value: new THREE.Vector2() }
//   };

//   var material = new THREE.ShaderMaterial( {
//     uniforms: uniforms,
//     vertexShader: document.getElementById( 'vertexShader' ).textContent,
//     fragmentShader: document.getElementById( 'fragmentShader' ).textContent
//   } );
//   material.extensions.derivatives = true;

//   var mesh = new THREE.Mesh( geometry, material );
//   scene.add( mesh );

//   renderer = new THREE.WebGLRenderer();
//   renderer.setPixelRatio( window.devicePixelRatio );

//   container.appendChild( renderer.domElement );

//   onWindowResize();
//   window.addEventListener( 'resize', onWindowResize, false );

//   document.addEventListener('pointermove', (e)=> {
//     let ratio = window.innerHeight / window.innerWidth;
//     uniforms.u_mouse.value.x = (e.pageX - window.innerWidth / 2) / window.innerWidth / ratio;
//     uniforms.u_mouse.value.y = (e.pageY - window.innerHeight / 2) / window.innerHeight * -1;
    
//     e.preventDefault();
//   });
// }

// function onWindowResize( event ) {
//   renderer.setSize( window.innerWidth, window.innerHeight );
//   uniforms.u_resolution.value.x = renderer.domElement.width;
//   uniforms.u_resolution.value.y = renderer.domElement.height;
// }

// function animate(delta) {
//   requestAnimationFrame( animate );
//   render(delta);
// }

// let capturer = new CCapture( { 
//   verbose: true, 
//   framerate: 60,
//   motionBlurFrames: 4,
//   quality: 90,
//   format: 'webm',
//   workersPath: 'js/'
//  } );
// let capturing = false;

// isCapturing = function(val) {
//   if(val === false && window.capturing === true) {
//     capturer.stop();
//     capturer.save();
//   } else if(val === true && window.capturing === false) {
//     capturer.start();
//   }
//   capturing = val;
// }
// toggleCapture = function() {
//   isCapturing(!capturing);
// }

// window.addEventListener('keyup', function(e) { if(e.keyCode == 68) toggleCapture(); });

// let then = 0;
// function render(delta) {
  
//   uniforms.u_time.value = -90000 + delta * 0.0005;
//   renderer.render( scene, camera );
  
//   if(capturing) {
//     capturer.capture( renderer.domElement );
//   }
// }

//Second style of 3js
/*
Most of the stuff in here is just bootstrapping. Essentially it's just
setting ThreeJS up so that it renders a flat surface upon which to draw 
the shader. The only thing to see here really is the uniforms sent to 
the shader. Apart from that all of the magic happens in the HTML view
under the fragment shader.
*/

// let container;
// let camera, scene, renderer;
// let uniforms;

// let loader=new THREE.TextureLoader();
// let texture, bg;
// loader.setCrossOrigin("anonymous");
// loader.load(
//   'https://s3-us-west-2.amazonaws.com/s.cdpn.io/982762/noise.png',
//   (tex) => {
//     texture = tex;
//     texture.wrapS = THREE.RepeatWrapping;
//     texture.wrapT = THREE.RepeatWrapping;
//     texture.minFilter = THREE.LinearFilter;
//     loader.load(
//       'https://s3-us-west-2.amazonaws.com/s.cdpn.io/982762/clouds-1-tile.jpg',
//       (tex) => {
//         bg = tex;
//         bg.wrapS = THREE.RepeatWrapping;
//         bg.wrapT = THREE.RepeatWrapping;
//         bg.minFilter = THREE.LinearFilter;
//         init();
//         animate();
//       }
//     );
//   }
// );

// function init() {
//   container = document.getElementById( 'container' );

//   camera = new THREE.Camera();
//   camera.position.z = 1;

//   scene = new THREE.Scene();

//   var geometry = new THREE.PlaneBufferGeometry( 2, 2 );

//   uniforms = {
//     u_time: { type: "f", value: 1.0 },
//     u_resolution: { type: "v2", value: new THREE.Vector2() },
//     u_noise: { type: "t", value: texture },
//     u_bg: { type: "t", value: bg },
//     u_mouse: { type: "v2", value: new THREE.Vector2() },
//     u_scroll: { type: 'f', value : 0 }
//   };

//   var material = new THREE.ShaderMaterial( {
//     uniforms: uniforms,
//     vertexShader: document.getElementById( 'vertexShader' ).textContent,
//     fragmentShader: document.getElementById( 'fragmentShader' ).textContent
//   } );
//   material.extensions.derivatives = true;

//   var mesh = new THREE.Mesh( geometry, material );
//   scene.add( mesh );

//   renderer = new THREE.WebGLRenderer();
//   renderer.setPixelRatio( window.devicePixelRatio );

//   container.appendChild( renderer.domElement );

//   onWindowResize();
//   window.addEventListener( 'resize', onWindowResize, false );

//   document.addEventListener('pointermove', (e)=> {
//     let ratio = window.innerHeight / window.innerWidth;
//     uniforms.u_mouse.value.x = (e.pageX - window.innerWidth / 2) / window.innerWidth / ratio;
//     uniforms.u_mouse.value.y = (e.pageY - window.innerHeight / 2) / window.innerHeight * -1;
    
//     e.preventDefault();
//   });
// }

// function onWindowResize( event ) {
//   renderer.setSize( window.innerWidth, window.innerHeight );
//   uniforms.u_resolution.value.x = renderer.domElement.width;
//   uniforms.u_resolution.value.y = renderer.domElement.height;
// }

// function animate(delta) {
//   requestAnimationFrame( animate );
//   render(delta);
// }

// let capturer = new CCapture( { 
//   verbose: true, 
//   framerate: 60,
//   // motionBlurFrames: 4,
//   quality: 90,
//   format: 'webm',
//   workersPath: 'js/'
//   } );
// let capturing = false;

// isCapturing = function(val) {
//   if(val === false && window.capturing === true) {
//     capturer.stop();
//     capturer.save();
//   } else if(val === true && window.capturing === false) {
//     capturer.start();
//   }
//   capturing = val;
// }
// toggleCapture = function() {
//   isCapturing(!capturing);
// }

// window.addEventListener('keyup', function(e) { if(e.keyCode == 68) toggleCapture(); });

// let then = 0;
// function render(delta) {
  
//   uniforms.u_time.value = -1000 + delta * 0.0005;
//   uniforms.u_scroll.value = window.scrollY;
//   renderer.render( scene, camera );
  
//   if(capturing) {
//     capturer.capture( renderer.domElement );
//   }
// }

//Third style of 3js

// App({ el: 'background' });

// function App(conf) {
//   conf = {
//     fov: 75,
//     cameraZ: 75,
//     xyCoef: 50,
//     zCoef: 10,
//     lightIntensity: 0.9,
//     ambientColor: 0x000000,
//     light1Color: 0x0E09DC,
//     light2Color: 0x1CD1E1,
//     light3Color: 0x18C02C,
//     light4Color: 0xee3bcf,
//     ...conf
//   };

//   let renderer, scene, camera, cameraCtrl;
//   let width, height, cx, cy, wWidth, wHeight;
//   const TMath = THREE.Math;

//   let plane;
//   const simplex = new SimplexNoise();

//   const mouse = new THREE.Vector2();
//   const mousePlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
//   const mousePosition = new THREE.Vector3();
//   const raycaster = new THREE.Raycaster();

//   const noiseInput = document.getElementById('noiseInput');
//   const heightInput = document.getElementById('heightInput');

//   init();

//   function init() {
//     renderer = new THREE.WebGLRenderer({ canvas: document.getElementById(conf.el), antialias: true, alpha: true });
//     camera = new THREE.PerspectiveCamera(conf.fov);
//     camera.position.z = conf.cameraZ;

//     updateSize();
//     window.addEventListener('resize', updateSize, false);

//     document.addEventListener('mousemove', e => {
//       const v = new THREE.Vector3();
//       camera.getWorldDirection(v);
//       v.normalize();
//       mousePlane.normal = v;
//       mouse.x = (e.clientX / width) * 2 - 1;
//       mouse.y = - (e.clientY / height) * 2 + 1;
//       raycaster.setFromCamera(mouse, camera);
//       raycaster.ray.intersectPlane(mousePlane, mousePosition);
//     });

//     initScene();
//     initGui();
//     animate();
//   }

//   function initGui() {
//     noiseInput.value = 101 - conf.xyCoef;
//     heightInput.value = conf.zCoef * 100 / 25;

//     noiseInput.addEventListener('input', e => {
//       conf.xyCoef = 101 - noiseInput.value;
//     });
//     heightInput.addEventListener('input', e => {
//       conf.zCoef = heightInput.value * 25 / 100;
//     });

//     document.getElementById('trigger').addEventListener('click', e => {
//       updateLightsColors();
//     });
//   }

//   function initScene() {
//     scene = new THREE.Scene();
//     initLights();

//     let mat = new THREE.MeshLambertMaterial({ color: 0xffffff, side: THREE.DoubleSide });
//     // let mat = new THREE.MeshPhongMaterial({ color: 0xffffff });
//     // let mat = new THREE.MeshStandardMaterial({ color: 0x808080, roughness: 0.5, metalness: 0.8 });
//     let geo = new THREE.PlaneBufferGeometry(wWidth, wHeight, wWidth / 2, wHeight / 2);
//     plane = new THREE.Mesh(geo, mat);
//     scene.add(plane);

//     plane.rotation.x = -Math.PI / 2 - 0.2;
//     plane.position.y = -25;
//     camera.position.z = 60;
//   }

//   function initLights() {
//     const r = 30;
//     const y = 10;
//     const lightDistance = 500;

//     // light = new THREE.AmbientLight(conf.ambientColor);
//     // scene.add(light);

//     light1 = new THREE.PointLight(conf.light1Color, conf.lightIntensity, lightDistance);
//     light1.position.set(0, y, r);
//     scene.add(light1);
//     light2 = new THREE.PointLight(conf.light2Color, conf.lightIntensity, lightDistance);
//     light2.position.set(0, -y, -r);
//     scene.add(light2);
//     light3 = new THREE.PointLight(conf.light3Color, conf.lightIntensity, lightDistance);
//     light3.position.set(r, y, 0);
//     scene.add(light3);
//     light4 = new THREE.PointLight(conf.light4Color, conf.lightIntensity, lightDistance);
//     light4.position.set(-r, y, 0);
//     scene.add(light4);
//   }

//   function animate() {
//     requestAnimationFrame(animate);

//     animatePlane();
//     animateLights();

//     renderer.render(scene, camera);
//   };

//   function animatePlane() {
//     gArray = plane.geometry.attributes.position.array;
//     const time = Date.now() * 0.0002;
//     for (let i = 0; i < gArray.length; i += 3) {
//       gArray[i + 2] = simplex.noise4D(gArray[i] / conf.xyCoef, gArray[i + 1] / conf.xyCoef, time, mouse.x + mouse.y) * conf.zCoef;
//     }
//     plane.geometry.attributes.position.needsUpdate = true;
//     // plane.geometry.computeBoundingSphere();
//   }

//   function animateLights() {
//     const time = Date.now() * 0.001;
//     const d = 50;
//     light1.position.x = Math.sin(time * 0.1) * d;
//     light1.position.z = Math.cos(time * 0.2) * d;
//     light2.position.x = Math.cos(time * 0.3) * d;
//     light2.position.z = Math.sin(time * 0.4) * d;
//     light3.position.x = Math.sin(time * 0.5) * d;
//     light3.position.z = Math.sin(time * 0.6) * d;
//     light4.position.x = Math.sin(time * 0.7) * d;
//     light4.position.z = Math.cos(time * 0.8) * d;
//   }

//   function updateLightsColors() {
//     conf.light1Color = chroma.random().hex();
//     conf.light2Color = chroma.random().hex();
//     conf.light3Color = chroma.random().hex();
//     conf.light4Color = chroma.random().hex();
//     light1.color = new THREE.Color(conf.light1Color);
//     light2.color = new THREE.Color(conf.light2Color);
//     light3.color = new THREE.Color(conf.light3Color);
//     light4.color = new THREE.Color(conf.light4Color);
//     // console.log(conf);
//   }

//   function updateSize() {
//     width = window.innerWidth; cx = width / 2;
//     height = window.innerHeight; cy = height / 2;
//     if (renderer && camera) {
//       renderer.setSize(width, height);
//       camera.aspect = width / height;
//       camera.updateProjectionMatrix();
//       const wsize = getRendererSize();
//       wWidth = wsize[0];
//       wHeight = wsize[1];
//     }
//   }

//   function getRendererSize() {
//     const cam = new THREE.PerspectiveCamera(camera.fov, camera.aspect);
//     const vFOV = cam.fov * Math.PI / 180;
//     const height = 2 * Math.tan(vFOV / 2) * Math.abs(conf.cameraZ);
//     const width = height * cam.aspect;
//     return [width, height];
//   }
// }

//Fourth style of 3js
// Made with TroisJS : https://github.com/troisjs/trois
import { createApp } from 'https://unpkg.com/vue@3.0.11/dist/vue.esm-browser.prod.js'
import { lerp, BufferGeometry, Camera, EffectComposer, Points, Renderer, RenderPass, Scene, ShaderMaterial, Texture, UnrealBloomPass, ZoomBlurPass } from 'https://unpkg.com/troisjs@0.3.0-beta.4/build/trois.module.cdn.min.js'
import { Clock, Color, MathUtils, Vector3 } from 'https://unpkg.com/three@0.127.0/build/three.module.js'

const { randFloat: rnd, randInt, randFloatSpread: rndFS } = MathUtils

const vertexShader = `
  uniform float uTime;
  attribute vec3 color;
  attribute float size;
  attribute float velocity;
  varying vec4 vColor;
  void main(){
    vColor = vec4(color, 1.0);
    vec3 p = vec3(position);
    p.z = -150. + mod(position.z + uTime, 300.);
    vec4 mvPosition = modelViewMatrix * vec4( p, 1.0 );
    gl_PointSize = size * (-50.0 / mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`

const fragmentShader = `
  uniform sampler2D uTexture;
  varying vec4 vColor;
  void main() {
    gl_FragColor = vColor * texture2D(uTexture, gl_PointCoord);
  }
`

createApp({
  template: `
    <Renderer ref="renderer" pointer resize="window">
      <Camera :position="{ z: 0 }" :fov="50" />
      <Scene>
        <Points ref="points" :position="{ z: -150 }">
          <BufferGeometry :attributes="attributes" />
          <ShaderMaterial :blending="2" :depth-test="false" :uniforms="uniforms" :vertex-shader="vertexShader" :fragment-shader="fragmentShader">
            <Texture src="https://assets.codepen.io/33787/sprite.png" uniform="uTexture" />
          </ShaderMaterial>
        </Points>
      </Scene>
      <EffectComposer>
        <RenderPass />
        <UnrealBloomPass :strength="2" :radius="0" :threshold="0" />
        <ZoomBlurPass :strength="zoomStrength" />
      </EffectComposer>
    </Renderer>
    <a href="#" @click="updateColors" @mouseenter="targetTimeCoef = 100" @mouseleave="targetTimeCoef = 1">Random Colors</a>
  `,
  components: { BufferGeometry, Camera, EffectComposer, Points, Renderer, RenderPass, Scene, ShaderMaterial, Texture, UnrealBloomPass, ZoomBlurPass },
  setup() {
    const POINTS_COUNT = 10000

    const palette = niceColors[83]

    const positions = new Float32Array(POINTS_COUNT * 3)
    const colors = new Float32Array(POINTS_COUNT * 3)
    const sizes = new Float32Array(POINTS_COUNT)
    const v3 = new Vector3(), color = new Color()
    for (let i = 0; i < POINTS_COUNT; i++) {
      v3.set(rndFS(200), rndFS(200), rndFS(300))
      v3.toArray(positions, i * 3)
      color.set(palette[Math.floor(rnd(0, palette.length))])
      color.toArray(colors, i * 3)
      sizes[i] = rnd(5, 20)
    }

    const attributes = [
      { name: 'position', array: positions, itemSize: 3 },
      { name: 'color', array: colors, itemSize: 3 },
      { name: 'size', array: sizes, itemSize: 1 },
    ]

    const uniforms = { uTime: { value: 0 } }

    const clock = new Clock()

    const timeCoef = 1, targetTimeCoef = 1

    return {
      POINTS_COUNT,
      attributes, uniforms, vertexShader, fragmentShader,
      clock, timeCoef, targetTimeCoef,
    }
  },
  data() {
    return {
      zoomStrength: 0,
    }
  },
  mounted() {
    const renderer = this.$refs.renderer
    const positionN = renderer.three.pointer.positionN
    const points = this.$refs.points.points

    renderer.onBeforeRender(() => {
      this.timeCoef = lerp(this.timeCoef, this.targetTimeCoef, 0.02)
      this.uniforms.uTime.value += this.clock.getDelta() * this.timeCoef * 4
      this.zoomStrength = this.timeCoef * 0.004

      const da = 0.05
      const tiltX = lerp(points.rotation.x, positionN.y * da, 0.02)
      const tiltY = lerp(points.rotation.y, -positionN.x * da, 0.02)
      points.rotation.set(tiltX, tiltY, 0)
    })
  },
  methods: {
    updateColors() {
      const colorAttribute = this.$refs.points.geometry.attributes.color
      const ip = randInt(0, 99); const palette = niceColors[ip]; console.log(ip)
      const color = new Color()
      for (let i = 0; i < this.POINTS_COUNT; i++) {
        color.set(palette[randInt(0, palette.length)])
        color.toArray(colorAttribute.array, i * 3)
      }
      colorAttribute.needsUpdate = true
    },
  },
}).mount('#app')
