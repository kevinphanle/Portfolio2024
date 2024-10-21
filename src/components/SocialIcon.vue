<script setup>
const props = defineProps(['icon'])
</script>

<template>
  <li>
    <a 
      :href="icon.url"
      target="_blank"
      rel="noopener noreferrer"
      >
      <component :is="icon.icon"></component>
    </a>
  </li>
</template>

<style scoped>

a {
  display: inline-block;
  /* background: lighten($darkgray, $amount: 10%); */

  text-decoration: none;
  width: 30px;
  height: 30px;
  font-size: 2rem;

  &:hover {
    transition: all 0.4s;
    /* background: $highlight; */
    cursor: pointer;

    transform: scale(1.7);
  }



  
}

</style>
