<template>
  <div class="project-details">
    <h1>Project Details</h1>
    <p>Project ID: {{ id }}</p>
    
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const id = route.params.id;
</script>

<style>
.project-details {
  padding: 20px;
  text-align: center;
}
</style>