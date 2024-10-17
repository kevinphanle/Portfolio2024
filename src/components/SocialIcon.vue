<script setup>
const props = defineProps(['icon'])
</script>

<template>
  <li>
    <a 
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      >
      <span>{{ props.icon }}</span>
    </a>
  </li>
</template>

<style scoped>


</style>
