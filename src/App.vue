<script setup>
import AboutMe from './components/AboutMe.vue';
import Experience from './components/Experience.vue';
import Projects from './components/Projects.vue';
import Footer from './components/Footer.vue';
import Canvas from './components/Canvas.vue';

import SidebarComponent from './components/SidebarComponent.vue';
</script>

<template>
  <div class="main-wrapper wrapper w-full h-full">

    <Canvas></Canvas>
    <div class="main-layout m-auto">
      <div class="left-sidebar">
        <SidebarComponent />
      </div>
      <div class="right-side grid grid-cols-4">
        <AboutMe />
        <Experience />
        <Experience />
        <Experience />
        <Projects />
      </div>
      
      <Footer />
    </div>
  </div>
</template>

<style scoped>
.main-layout {
  max-width: 1920px;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  justify-content: center;
  align-items: stretch;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  position: relative;
  /* background: radial-gradient(ellipse 100% 40% at 50% 60%, rgba(102, 99, 246, 0.07), hsla(0, 0%, 100%, 0)); */
}

.right-side {
  --gap: 24px;
  width: 100%;
  margin: 0px auto;
  display: grid;
  --row: minmax(0, 1fr);
  grid-gap: var(--gap);


  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    overflow: hidden;
    min-height: 480px;
    padding: 56px 24px;
    position: relative;
    background: radial-gradient(rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, .05) 100%);
  }
}

</style>
