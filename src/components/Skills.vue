<script setup>

import {ref} from 'vue';

const showSection = ref(false)

function toggleSection () {
  showSection.value = !showSection.value;
}

function convertString(str) {
    return str
        .replace(/([A-Z])/g, '-$1') // Insert a hyphen before each uppercase letter
        .toLowerCase()              // Convert the entire string to lowercase
        .replace(/^-/, '');         // Remove any leading hyphen
}

const frameworksList = [
  {
    name: 'Vue.js',
    iconName: 'ViFileTypeVue'
  },
  {
    name: 'React',
    iconName: 'ViFileTypeReactjs'
  },
]

const htmlList = [
  {
    name: 'HTML5',
    iconName: 'ViFileTypeHtml'
  },
  {
    name: 'CSS3',
    iconName: 'ViFileTypeCss'
  },
  {
    name: 'Sass',
    iconName: 'ViFileTypeSass'
  },
  {
    name: 'TailwindCss',
    iconName: 'ViFileTypeTailwind'
  },
]

const buildTools = [
  {
    name: 'npm',
    iconName: 'ViFileTypeNpm'
  },
  {
    name: 'Webpack',
    iconName: 'ViFileTypeWebpack'
  }
]

const versionControl = [
  {
    name: 'Git',
    iconName: 'ViFileTypeGit'
  },
  {
    name: 'GitHub',
    iconName: 'ViFolderTypeGithub'
  },
]

const apisList = [
  {
    name: 'Restful API',
    iconName: 'ViFileTypeRest'
  },
  {
    name: 'GraphQL',
    iconName: 'ViFileTypeGraphql'
  },
  {
    name: 'Axios / Fetch API',
    iconName: 'ViFileTypeHttp'
  },
]

const designTools = [
  {
    name: 'Figma',
    iconName: 'SiFigma'
  },
  {
    name: 'AdobeXD',
    iconName: 'SiAdobexd'
  },
  {
    name: 'Sketch',
    iconName: 'ViFileTypeSketch'
  },
]

const performance = [
  {
    name: 'Lighthouse',
    iconName: 'SiLighthouse'
  },
]

const backendList = [
  {
    name: 'Ruby',
    iconName: 'ViFileTypeRuby'
  },
  {
    name: 'Rails',
    iconName: 'ViFileTypeRails'
  },
]


const skillsList = {
  htmlSkills: {
    name: 'HTML & CSS',
    list: htmlList
  },
  frameworks: {
    name: 'Frameworks',
    list: frameworksList
  },
  tools: {
    name: 'Build Tools & Task Runners',
    list: buildTools
  },
  versionControl: {
    name: 'Version Control',
    list: versionControl
  },
  apis: {
    name: 'APIs and AJAX',
    list: apisList
  },
  design: {
    name: 'UI/UX Design Tools',
    list: designTools
  },
  performance: {
    name: 'Performance Optimization',
    list: performance
  },
  rubyOnRails: {
    name: 'Backend',
    list: backendList
  },
}

</script>

<template>
  <section class="skills component rounded-lg p-8 cursor-pointer" @click="toggleSection">
    <h3>The Skills that Pays my Bills</h3>

    <div v-if="showSection">
      <div v-for="(category, key) in skillsList" :key="key" class="skill-category">
        <h4>{{ category.name }}</h4>
        <ul>
          <li v-for="(skill, index) in category.list" :key="index">
            <v-icon :name="convertString(skill.iconName)"></v-icon>
            {{ skill.name }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skill-category {
  margin-bottom: 1rem;
}
</style>
