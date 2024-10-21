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
      <component :is="icon"></component>
    </a>
  </li>
</template>

<style scoped>

a {
  display: inline-block;
  width: 30px;
}

</style>
