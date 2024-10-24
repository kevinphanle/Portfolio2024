<script setup>

import {ref} from 'vue';

const showSection = ref(false)

function toggleAboutMe () {
  showSection.value = !showSection.value;
}

</script>

<template>
  <section class="flex flex-col gap-4 about-me p-8 rounded-lg cursor-pointer" @click="toggleAboutMe">
    About

    <div v-if="showSection">
      <p>I have transitioned careers back in 2020 and have since been honing my skills and passion in development at Zendesk. <br><br> Outside of development, I enjoy staying active by backpacking and playing grass volleyball.</p>
    </div>
  </section>


</template>

<style scoped>

.about-me {
  background: #111;
  grid-column: auto;
  
  p {
    color: rgb(0, 70, 70);
  }

  &:hover {
    background: cyan;
    color: black;
    transition: all .2s;
  }
}

</style>
