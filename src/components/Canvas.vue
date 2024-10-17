<script setup>
import {onMounted, onUpdated, ref, createApp, getCurrentInstance, computed} from "vue";
import Particle from "./Particle.vue";
import * as utils from './utils'

const canvasRef = ref(null);
const context = ref(null);

const particlesList = ref([]);

const particleCount = 300;
const colors = ["#FFF", "#60ecf1", "#e63946", "#457b9d", "#FCA311"];

const mouse = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 2
};

let mouseDown = ref(false);


onMounted(() => {
  context.value = canvasRef.value?.getContext("2d") || undefined;
  canvasRef.value.width = window.innerWidth;
  canvasRef.value.height = window.innerHeight;

  document.addEventListener('resize', (event) => {
    canvasRef.value.width = window.innerWidth;
    canvasRef.value.height = window.innerHeight;
  })

  document.addEventListener('mousemove', (event) => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
  })

  canvasRef.value.addEventListener('mousedown', (event) => {
    mouseDown.value = true;
  })

  initParticles();
  render();
})


function initParticles () {
  particlesList.value = [];

  const canvasWidth = canvasRef.value.width
  const canvasHeight = canvasRef.value.height

  for (let i = 0; i <= particleCount; i++) {
    // const radius = 2

    const radius = Math.random() + .5;
    const color = utils.randomColor(colors)
    const velocity = Math.random() * .005;

    particlesList.value.push(
      {
        x: canvasWidth / 4,
        y: canvasHeight / 4,
        radius: radius,
        color: color,
        velocity: velocity
      }
    )
  } 
}

let alpha = .15;
let radians = 0;

let renderCount = 0;
var overlayOpacity = 0.2;

function speedUp () {
  particlesList.value = particlesList.value.map(particle => {
    return {
      ...particle,
      velocity: .5
    }
    // particle.velocity = .5;
  })
}


function render () {
  if (!context.value) {
      return;
  }

  // if(Math.random() >= 0.5){
    // context.value.fillStyle = `rgba(10, 10, 10, 1)`;
    // context.value.fillRect(0, 0, canvasRef.value.width, canvasRef.value.height);
  // }

  const grad = context.value.createLinearGradient(0,0, canvasRef.value.width * 2, canvasRef.value.height);
  grad.addColorStop(0, "black");
  grad.addColorStop(1, "#2F2F2F");

  // Fill rectangle with gradient
  context.value.fillStyle = grad;
  context.value.fillRect(0, 0, canvasRef.value.width, canvasRef.value.height);

  requestAnimationFrame(render)

}

</script>

<template>
  <canvas ref="canvasRef">
    <Particle 
      v-for="(particle, index) in particlesList" 
      :key="index"
      :x="particle.x" 
      :y="particle.y" 
      :radius="particle.radius" 
      :color="particle.color" 
      :context="context" 
      :mouse="mouse" 
      :velocity="particle.velocity"
      :mouseDown="mouseDown"
      ></Particle>
  </canvas>
</template>

<style scoped>

</style>
