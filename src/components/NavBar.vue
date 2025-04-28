<template>
  <nav class="flex !text-5xl">
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/projects">Projects</RouterLink>
</nav>
</template>

<script setup>
import { RouterLink} from 'vue-router'
</script>

<style>
nav {
  display: flex;
  gap: 10px;
  color: #3b352d;
  text-decoration: none;
} 

nav a:hover {
  color: #ffffff;
}

@media (max-width: 768px) {
  nav {
    flex-direction: column; 
    align-items: center; 
    gap: 10px; 
    font-size: 10px; 
  }
}
</style>