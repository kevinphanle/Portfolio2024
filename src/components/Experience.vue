<script setup>

import {ref} from 'vue';

const showSection = ref(false)

function toggleSection () {
  showSection.value = !showSection.value;
}

</script>

<template>
  <section class="experience component rounded-lg p-8 cursor-pointer" @click="toggleSection">
    
    <h3>Experience</h3> 

    <div v-if="showSection">
      <ul>
        <li>Zendesk</li>
        <li>Chang & Associates</li>
      </ul>
    </div>
  </section>
</template>

<style scoped>


</style>
