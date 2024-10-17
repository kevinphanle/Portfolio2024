<script setup>

import {ref} from 'vue';

const props = defineProps(['title', 'content'])

const showSection = ref(false)

function toggleSection () {
  showSection.value = !showSection.value;
}

</script>

<template>
  <section class="flex flex-col gap-4 section-comp p-8 rounded-lg" @click="toggleSection">
    {{props.title}}

    <div v-if="showSection">
      <p>{{props.content}}</p>
    </div>
  </section>


</template>

<style scoped>

.section-comp {
  background: #111;
  grid-column: auto;
  
  p {
    color: white;
  }
}

</style>
