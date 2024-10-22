<script setup>

import {ref} from 'vue';

const props = defineProps(['title', 'content'])

const showSection = ref(false)

function toggleSection () {
  showSection.value = !showSection.value;
}

</script>

<template>
  <section class="flex flex-col gap-4 section-comp p-8 rounded-lg cursor-pointer" @click="toggleSection">
    <p>{{props.title}}</p>

    <div v-if="showSection">
      <div v-html="props.content"></div>
    </div>
  </section>


</template>

<style scoped>

.section-comp {
  background: #111;
  grid-column: auto;
  
  p {
    color: white;
    margin: 0;
  }

  &:hover {
    background: cyan;
    color: black;
    transition: all .2s;
  }
}

</style>
