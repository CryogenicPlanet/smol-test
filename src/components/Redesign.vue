<template>
  <div id="redesign">
    <h1>Redesigned Github Home Page</h1>
    <div v-if="loading">
      Loading...
    </div>
    <div v-else>
      <div v-for="data in githubData" :key="data.id">
        <!-- Display the important information here -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { githubAPI, GithubData } from '../api/githubAPI';

export default defineComponent({
  name: 'Redesign',
  setup() {
    const githubData = ref<GithubData[]>([]);
    const loading = ref(true);

    const fetchGithubData = async () => {
      loading.value = true;
      githubData.value = await githubAPI.fetchGithubData();
      loading.value = false;
    };

    onMounted(fetchGithubData);

    return {
      githubData,
      loading,
    };
  },
});
</script>

<style scoped>
@import '../styles/index.css';
</style>