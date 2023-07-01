<template>
  <div id="home">
    <button @click="fetchGithubData">Fetch Github Data</button>
    <div v-if="githubData">
      <h1>Important Github Information</h1>
      <p>{{ githubData }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { fetchGithubData } from '../api/githubAPI';

export default defineComponent({
  name: 'Home',
  setup() {
    const githubData = ref(null);

    const getGithubData = async () => {
      githubData.value = await fetchGithubData();
    };

    return {
      githubData,
      fetchGithubData: getGithubData,
    };
  },
});
</script>

<style scoped>
#home {
  @apply p-4;
}

button {
  @apply bg-blue-500 text-white px-4 py-2 rounded;
}

h1 {
  @apply text-xl font-bold my-4;
}

p {
  @apply text-base;
}
</style>