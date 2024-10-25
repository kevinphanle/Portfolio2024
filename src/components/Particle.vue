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

let shadowBlur = 1;

const positions = ref([]);
let motionLengthTrail = 100;



const minRadius = .2;
let opacity = 1;
const distanceFromCenter = utils.randomIntFromRange(
  10,
  window.innerWidth
);

const lastMouse = {
  x: x,
  y: y
}

let radians = ref(Math.random () * Math.PI * 2);

let updateAnimation;


function storeLastPosition (xPos, yPos) {
  // push item
  positions.value.push({
    x: xPos,
    y: yPos
  })

  // clear first item
  if (positions.value.length > motionLengthTrail) {
    positions.value.shift();
  }
}

function hexToRgbA(hex){
  var c;
  if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
      c= hex.substring(1).split('');
      if(c.length== 3){
          c= [c[0], c[0], c[1], c[1], c[2], c[2]];
      }
      c= '0x'+c.join('');
      return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',1)';
  }
  throw new Error('Bad Hex');
}

function draw(c, lastPoint) {

  // draw trail effect
  for (let i = 0; i < positions.value.length; i++) {
    const ratio = (i + 1) / positions.value.length

    c.beginPath();
    c.arc(positions.value[i].x, positions.value[i].y, radius, 0, Math.PI * 2, false);
    const hexColor = hexToRgbA(color)
    c.fillStyle = hexColor.replace(',1)', `,${ratio / 4})`)
    c.fill();
  }

  c.beginPath();
  c.arc(x, y, radius, 0, Math.PI * 2, false);
  c.shadowColor = color;
  c.shadowBlur = shadowBlur;
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

  storeLastPosition(x, y);
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
  x = lastMouse.x + Math.cos(radians.value) * distanceFromCenter;
  y = lastMouse.y + Math.sin(radians.value) * distanceFromCenter;

  // // mouse collision detection
  if (utils.distance(mouse.x, mouse.y, x, y) < 100) {
    motionLengthTrail = 30;

    if (velocity.value < .009) {
      velocity.value += .002
    }

    if (radius < 1.5) {
      radius += 0.2;
      opacity = 1;
    }

    if (shadowBlur < 5) {
      shadowBlur += .5;
    } else {
      shadowBlur = 1;
    }
  } else {
    radius = 1;
    opacity = .5;
    shadowBlur = 1;
    velocity.value = Math.random() * .009 + .003
    motionLengthTrail = 10;
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