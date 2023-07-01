<template>
  <div class="container mx-auto px-4">
    <h1 class="text-4xl font-bold mb-4">GitHub Home</h1>
    <div v-if="loading">
      <p>Loading...</p>
    </div>
    <div v-else>
      <div v-if="error">
        <p>Error: {{ error }}</p>
      </div>
      <div v-else>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div v-for="repo in data.viewer.repositories.nodes" :key="repo.id">
            <div class="p-4 border rounded shadow">
              <h2 class="text-2xl font-bold mb-2">{{ repo.name }}</h2>
              <p>{{ repo.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';
import { getViewerRepositories } from '../api/githubAPI';

export default {
  name: 'Home',
  setup() {
    const data = ref(null);
    const loading = ref(true);
    const error = ref(null);

    onMounted(async () => {
      try {
        data.value = await getViewerRepositories();
      } catch (e) {
        error.value = e.message;
      } finally {
        loading.value = false;
      }
    });

    return { data, loading, error };
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>