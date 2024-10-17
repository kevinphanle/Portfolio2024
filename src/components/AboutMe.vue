<script setup>

import {ref} from 'vue';

const showSection = ref(false)

function toggleAboutMe () {
  showSection.value = !showSection.value;
}

</script>

<template>
  <section class="flex flex-col gap-4 about-me p-8 rounded-lg" @click="toggleAboutMe">
    About

    <div v-if="showSection">
      <p>I transitioned to careers</p>
    </div>
  </section>


</template>

<style scoped>

.about-me {
  background: #111;
  grid-column: auto;
  
  p {
    color: white;
  }
}

</style>
