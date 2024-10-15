<script setup>
import {onMounted, onUpdated, ref, createApp, getCurrentInstance, computed} from "vue";
import Particle from "./Particle.vue";
import * as utils from './utils'

const canvasRef = ref(null);
const context = ref(null);

const particlesList = ref([]);

const particleCount = 100;
const colors = ["#FFF", "#60ecf1", "#e63946", "#457b9d", "#FCA311"];

const mouse = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 2
};

let mouseDown = false;


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

  initParticles();
  render();
})


function initParticles () {
  const canvasWidth = canvasRef.value.width
  const canvasHeight = canvasRef.value.height
  for (let i = 0; i <= particleCount; i++) {
    // const radius = 2

    const radius = Math.random() * 2
    const color = utils.randomColor(colors)
    const velocity = Math.random() * .005;

    particlesList.value.push(
      {
        x: canvasWidth / 2,
        y: canvasHeight / 2 ,
        radius: radius,
        color: color,
        velocity: velocity
      }
    )
  } 
}

let alpha = .15;
let radians = 0;


function render () {
  if (!context.value) {
      return;
  }

  requestAnimationFrame(render)

  context.value.fillStyle = `rgba(10,10,10, .05)`;
  context.value.fillRect(0, 0, canvasRef.value.width, canvasRef.value.height);

  // context.value.save()
  // context.value.translate(canvasRef.value.width / 2, canvasRef.value.height / 2)
  // context.value.rotate(30)
  // context.value.restore()

  // radians += 0.003

  context.value.clearRect(0, 0, canvasRef.value.width, canvasRef.value.height);

  // radians += .0001;
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
      ></Particle>
  </canvas>
</template>

<style scoped>

</style>
