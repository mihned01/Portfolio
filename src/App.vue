
<script setup>
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue';
import FooterComponent from '@/components/FooterComponent.vue';

</script>

<template>
  <header>
    <div class="logoContainer flex items-center">
      <img alt="logo" class="logo" src="@/assets/logo_light.png"/>
    </div>

    <div class="wrapper">
      
      <NavBar/>

      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
    </div>
    
    <div class="social-icons">
      <a href="https://github.com/mihned01" target="_blank" rel="noopener noreferrer">
        <img src="@/assets/github-brands.svg" alt="GitHub" class="icon" />
      </a>
      <a href="https://www.linkedin.com/in/mihaela-ned/" target="_blank" rel="noopener noreferrer">
        <img src="@/assets/linkedin-brands.svg" alt="LinkedIn" class="icon" />
      </a>
    </div>

  </header>

  <RouterView />
  <FooterComponent/>
</template>

<style> /*we removed scoped so it works for the new NavBar component*/

header {
  background-color: #2d2d2d;
  display: flex;
  justify-content: space-between;
  max-height: 100vh;
  padding: 10px 40px;
}

.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: baseline;
  height: auto;
}

.logoContainer {
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo {
  display: block;
  width: 130px;
  height: auto;
}

nav {
  height: 100%;
  width: 100%;
  max-height: 100vh; 
  display: flex;
  justify-content: center; 
  align-items: center; 
  text-align: center;
  text-decoration: none;
  color: #ceb199;
  transition: 0.4s;
}

nav a {
  display: inline-block;
  font-family: "Raleway", sans-serif;
  font-weight: 600;
  font-size: 2.1rem; 
  text-align: center;
  color: #ceb199;
  line-height: 1;
}

nav a.router-link-exact-active {
  color: #ceb199;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1.5rem;
}

nav a:first-of-type {
  border: 0;
}

.social-icons {
  width: 140px;
  height: 100px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.social-icons a {
  color: #ceb199;
  margin: 10px 15px 10px 15px;
}

.icon {
  width: 90px; 
  height: 90px;
  color: #ceb199;
  transition: transform 0.3s ease, filter 0.3s ease;
}

.icon:hover {
  filter: brightness(1.5); 
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
