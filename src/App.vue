<template>
  <div id="app">
    <Home v-if="!redesignActive" />
    <Redesign v-else />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Home from './components/Home.vue';
import Redesign from './components/Redesign.vue';

export default defineComponent({
  name: 'App',
  components: {
    Home,
    Redesign
  },
  setup() {
    const redesignActive = ref(false);

    chrome.runtime.onMessage.addListener((request) => {
      if (request.message === 'REDESIGN_PAGE') {
        redesignActive.value = true;
      }
    });

    return {
      redesignActive
    };
  }
});
</script>

<style scoped>
@import './styles/index.css';
</style>