<template>
  <footer class="bg-gray-800 text-white p-4">
    <div class="container mx-auto text-center">
      <p>Redesigned with ❤️ by Your Name</p>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Footer',
});
</script>

<style scoped>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #282c34;
  color: white;
  text-align: center;
}
</style>