<script setup>
import { watchEffect, ref } from 'vue';
import * as utils from './utils';

const props = defineProps(['x', 'y', 'radius', 'color', 'context', 'mouse', 'velocity', 'mouseDown'])

let x = props.x;
let y = props.y;
let radius = props.radius;
const color = props.color;
const mouse = props.mouse;
const velocity = ref(props.velocity);
const mouseDown = props.mouseDown;


const minRadius = .2;
let opacity = .5;
const distanceFromCenter = utils.randomIntFromRange(
  10,
  window.innerWidth / 2 + 200
);

const lastMouse = {
  x: x,
  y: y
}

let radians = ref(Math.random () * Math.PI * 2);

let updateAnimation;

function draw(c, lastPoint) {
  c.beginPath();
  c.arc(x, y, radius, 0, Math.PI * 2, false);
  c.shadowColor = color;
  c.shadowBlur = 10;
  c.fillStyle = color;
  c.fill();
  c.strokeStyle = color;
  c.globalAlpha = opacity;
  c.lineWidth = radius;
  c.moveTo(lastPoint.x, lastPoint.y);
  c.lineTo(x, y);
  c.stroke();
  c.shadowBlur = 0;
  c.closePath();
}

function update (context) {
  if (!context) {
    context = props.context
  }

  const lastPoint = {
    x: x,
    y: y,
  };

  // move these points over time
  radians.value += velocity.value;

  // circular motion
  x =
    lastMouse.x + Math.cos(radians.value) * distanceFromCenter;
  y =
    lastMouse.y + Math.sin(radians.value) * distanceFromCenter;

  // // mouse collision detection
  if (utils.distance(mouse.x, mouse.y, x, y) < 150) {

    if (radius < 3) {
      radius += 0.2;
      opacity += 0.5;
    }
  } else if (radius > minRadius) {
    radius -= 0.2;
    opacity -= 0.5;
  }

  draw(context, lastPoint);

  updateAnimation = requestAnimationFrame(() => {
    update(context)
  })
}

watchEffect(() => {
  cancelAnimationFrame(updateAnimation)
})

update(props.context)


</script>

<template>

</template>

<style scoped>

</style>