import { initBuffers } from "./init-buffers.js";
import { drawScene } from "./draw-scene.js";
import { resizeCanvasToDisplaySize } from "./draw-scene.js";

let cubeRotation = 0.0;
let deltaTime = 0;

const canvas = document.querySelector("#glcanvas");
const gl = canvas.getContext("webgl");
main();

function main() {


  if (gl === null) {
    alert(
      "Unable to initialize WebGL. Your browser or machine may not support it."
    );
    return;
  }

  let mouse = [0.7, 0.5];
canvas.addEventListener("mousemove", (event) => {
    const rect = canvas.getBoundingClientRect(); // Get canvas position

    // Normalize mouse position within the canvas
    mouse[0] = (event.clientX - rect.left) / rect.width;
    mouse[1] = 1.0 - (event.clientY - rect.top) / rect.height; // Flip Y-axis
});

  window.addEventListener("resize", resizeCanvas);
  resizeCanvas(); 
  gl.clearColor(1.0,1.0,1.0, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);

  const vsSource = `
  attribute vec4 aVertexPosition;
  attribute vec3 aVertexNormal;
  attribute vec2 aTextureCoord;

  uniform mat4 uModelViewMatrix;
  uniform mat4 uProjectionMatrix;
  uniform mat4 uNormalMatrix;

  varying highp vec2 vTexCoord;
  varying highp vec3 vNormalES;
  varying highp vec3 vPosES;

  void main(void)
  {
    vec4 posES = uModelViewMatrix * aVertexPosition;
    gl_Position = uProjectionMatrix * posES;

    vTexCoord  = aTextureCoord;
    vPosES     = posES.xyz;

    vNormalES  = normalize(mat3(uNormalMatrix) * aVertexNormal);
  }
  `;

 const fsSource = `
  precision mediump float;

  varying highp vec2 vTexCoord;
  varying highp vec3 vNormalES;
  varying highp vec3 vPosES;

  uniform sampler2D uSampler;
  uniform vec2 uMousePos;

  float quantize(float x, float steps) {
    return floor(x * steps) / steps;
  }

  void main(void)
  {
    vec3 N = normalize(vNormalES);
    vec3 L = normalize(vec3(uMousePos - vec2(0.5, 0.5), 0.2));
    vec3 V = normalize(-vPosES);

    vec3 ambient    = vec3(0.10);
    vec3 lightColor = vec3(0.9);
    float diffSteps = 4.0;
    float specSteps = 2.0;
    float shininess = 24.0;
    float rimWidth  = 0.35;
    float rimPower  = 1.5;
    float rimScale  = 0.15;

    float NdotL = max(dot(N, L), 0.0);
    float diffuseToon = quantize(NdotL, diffSteps);

    vec3 H = normalize(L + V);
    float s = pow(max(dot(N, H), 0.0), shininess);
    float specToon = quantize(s, specSteps) * 0.15;

    float rim = pow(smoothstep(1.0 - rimWidth, 1.0, 1.0 - max(dot(N, V), 0.0)), rimPower);
    vec3 rimColor = vec3(rimScale) * rim;

    vec4 base = vec4(1.0, 1.0, 1.0, 1.0);
    vec3 toon = base.rgb * (ambient + lightColor * diffuseToon) + lightColor * specToon + rimColor;
    gl_FragColor = vec4(clamp(toon, 0.0, 1.0), base.a);
  }
  `;


  const shaderProgram = initShaderProgram(gl, vsSource, fsSource);

  const programInfo = {
    program: shaderProgram,
    attribLocations: {
      vertexPosition: gl.getAttribLocation(shaderProgram, "aVertexPosition"),
      vertexNormal: gl.getAttribLocation(shaderProgram, "aVertexNormal"),
      textureCoord: gl.getAttribLocation(shaderProgram, "aTextureCoord"),
    },
    uniformLocations: {
      projectionMatrix: gl.getUniformLocation(
        shaderProgram,
        "uProjectionMatrix"
      ),
      modelViewMatrix: gl.getUniformLocation(shaderProgram, "uModelViewMatrix"),
      normalMatrix: gl.getUniformLocation(shaderProgram, "uNormalMatrix"),
      uSampler: gl.getUniformLocation(shaderProgram, "uSampler"),
    },
  };

  const buffers = initBuffers(gl);
  const texture = loadTexture(gl, "bunnytexture.png");
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);

  let then = 0;
  function render(now) {
    now *= 0.001;
    deltaTime = now - then;
    then = now;
    resizeCanvasToDisplaySize(gl);
    drawScene(gl, programInfo, buffers, texture, cubeRotation, mouse);
    cubeRotation += deltaTime;

    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
}

function initShaderProgram(gl, vsSource, fsSource) {
  const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
  const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);

  const shaderProgram = gl.createProgram();
  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);
  gl.linkProgram(shaderProgram);

  if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
    alert(
      `Unable to initialize the shader program: ${gl.getProgramInfoLog(
        shaderProgram
      )}`
    );
    return null;
  }

  return shaderProgram;
}

function loadShader(gl, type, source) {
  const shader = gl.createShader(type);

  gl.shaderSource(shader, source);

  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    alert(
      `An error occurred compiling the shaders: ${gl.getShaderInfoLog(shader)}`
    );
    gl.deleteShader(shader);
    return null;
  }

  return shader;
}

function loadTexture(gl, url) {
  const texture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, texture);
  const level = 0;
  const internalFormat = gl.RGBA;
  const width = 1;
  const height = 1;
  const border = 0;
  const srcFormat = gl.RGBA;
  const srcType = gl.UNSIGNED_BYTE;
  const pixel = new Uint8Array([0, 0, 255, 255]); // opaque blue
  gl.texImage2D(
    gl.TEXTURE_2D,
    level,
    internalFormat,
    width,
    height,
    border,
    srcFormat,
    srcType,
    pixel
  );

  const image = new Image();
  image.onload = () => {
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(
      gl.TEXTURE_2D,
      level,
      internalFormat,
      srcFormat,
      srcType,
      image
    );
    if (isPowerOf2(image.width) && isPowerOf2(image.height)) {
      // Yes, it's a power of 2. Generate mips.
      gl.generateMipmap(gl.TEXTURE_2D);
    } else {
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    }
  };
  image.src = url;

  return texture;
}

function isPowerOf2(value) {
  return (value & (value - 1)) === 0;
}

function resizeCanvas() {
    canvas.width = window.innerWidth*0.8;
    //canvas.height = window.innerHeight;

    gl.viewport(0, 0, canvas.width, canvas.height);
}
