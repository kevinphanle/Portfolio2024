<script setup>

import {ref} from 'vue';

const showSection = ref(false)

function toggleAboutMe () {
  showSection.value = !showSection.value;
}

</script>

<template>
  <section class="flex flex-col gap-4 component about-me p-8 rounded-lg cursor-pointer" @click="toggleAboutMe">
    <h3>About</h3>

    <div v-if="showSection">
      <p>
        I have transitioned careers back in 2020 and have since been honing my skills and passion in development as a <span>Frontend Developer</span> at Zendesk. <br><br> Outside of development, I enjoy staying active by backpacking at parks in California and playing grass volleyball.
      </p>
    </div>
  </section>


</template>

<style scoped>

h3 {
  font-size: 1.5rem;
}

p {
  span {
    color: white;
  }
}

</style>
