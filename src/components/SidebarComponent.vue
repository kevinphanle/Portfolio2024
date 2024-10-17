<script setup>
const navigationItems = [
  {
    label: 'Home',
    url: '/'
  }, 
  {
    label: 'Projects',
    url: '/'
  }, 
  {
    label: 'About',
    url: '/'
  }, 
  {
    label: 'Contact',
    url: '/'
  }, 
];
</script>

<template>
  <div class="sidebar flex justify-center items-center flex-col gap-3 rounded-lg p-8">
      <img src="/headshot.jpg" class="w-24 rounded-md"/>
      <h1 class="text-xl">Kevin Le</h1>
      <!-- <h2 class="text-xl">Front End Developer at Zendesk Professional Services</h2> -->
      <!-- <p class="text-base">I build pixel-perfect, engaging, and accessible digital experiences.</p> -->

      <!-- <ul class="navigation flex flex-col gap-y-8">
        <li v-for="(item, index) in navigationItems" :key="index">
          {{ item.label }}
        </li>
      </ul> -->
    </div>
</template>

<style scoped>

.sidebar {
  /* border: 1px solid grey; */
  position: sticky;
  /* background: #111; */
  background: linear-gradient(rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.05) 100%);
  color: white;

}


</style>
