<script setup>
import AboutMe from './components/AboutMe.vue';
import Experience from './components/Experience.vue';
import Projects from './components/Skills.vue';
import Footer from './components/Footer.vue';
import Canvas from './components/Canvas.vue';

import SectionComponent from './components/SectionComponent.vue';
import section_mapping from './components/section_mapping'

import SidebarComponent from './components/SidebarComponent.vue';
</script>

<template>
  <div>
    <div class="home-page">
      <Canvas></Canvas>
      <div class="main-layout">
        <div class="hero-content">
          <h3>Hello, I'm <span>Kevin Le</span>.</h3>
          <h3>I'm a Front End Developer</h3>
  
          <!-- <a href="#sidebar" class="hero-cta">View my work</a> -->
  
        </div>
        <div class="hero-main flex ">
          <div class="left-sidebar" id="sidebar">
            <SidebarComponent />
          </div>
          <div class="right-side grid grid-cols-3">
            <!-- <SectionComponent title="About Me"/> -->
            <AboutMe />
            <Experience />
            <Projects />
    
            <!-- <template v-for="section in section_mapping">
              <SectionComponent :title="section.title" :content="section.content"/>
            </template> -->
          </div>
        </div>
        
      </div>
    </div>
    <Footer />
  </div>
</template>

<style scoped>
.main-layout {
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  justify-content: center;
  padding: 2rem 0;
  /* display: flex; */
  position: absolute;
  width: 1000px;
  margin: 0 auto;
  /* background: radial-gradient(ellipse 100% 40% at 50% 60%, rgba(102, 99, 246, 0.07), hsla(0, 0%, 100%, 0)); */
}

.right-side {
  --gap: 2rem;
  width: 100%;
  margin: 0px auto;
  display: grid;
  --row: minmax(0, 1fr);
  grid-gap: var(--gap);


  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    /* min-height: 480px; */
    /* padding: 56px 24px; */
    position: relative;
    background: linear-gradient(rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.05) 100%);

  }
}

.hero-main {
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
}

.home-page {
  display: flex;
  justify-content: center;
  align-items: center;

  .hero-content {
    /* position: absolute; */
    margin-bottom: 2rem;


    h3 {
      font-size: 2rem;
      color: white;

      span {
        color: cyan;
      }
    }

    .hero-cta {
      color: white;
      background: transparent;
      border: white solid 2px;
      width: 200px;
      padding: 1rem 3rem;
      margin: 2rem auto;
      transition: all .5s;
      display: flex;
      justify-content: center;

      &:hover {
        color: cyan;
        border: 2px solid cyan;
        cursor: pointer;
        backdrop-filter: blur(10px);
      }
    }
  }
}

</style>
