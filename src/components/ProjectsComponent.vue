
<template>  
  <section class="projects-section bg-[#f3eeea] text-center py-40">
      <div class="sectionTitle">
          <h2>My Projects</h2>
      </div>
      <div class="cardsContainer">
          <div v-for="workProject in workProjects" :key="workProject" 
              class="projectCard">

              <div class="projectImage w-3/5  flex flex-col items-end">
                 <img class="size-52":src="workProject.projectImage" alt="project image">
                

              </div> 

              <div class="w-4/5 flex flex-col justify-between"> 
  
                  <div>
                      <p class="text-[#2d2d2d] !font-bold">{{workProject.tagLine}} </p>
                      <router-link :to="`/project/${workProject.id}`" class="!text-white">
                          <h3 class="text-[#2d2d2d] text-4xl !mt-3">{{workProject.nameOfProject}}</h3>
                      </router-link>
                      <p>{{workProject.description}} </p>
                  </div>
                  <p class="text-4xl !font-bold">{{workProject. year}} </p>
                  <button @click="goToProjectDetails(workProject.id)" class="">View</button>
              </div>
              
  
  
          </div>
      </div>
  </section>
  </template>
  
  <script setup>
  import {useProjects} from"../modules/useProjects.js"
  import { useRouter } from 'vue-router';

const router = useRouter();
const { workProjects } = useProjects();

function goToProjectDetails(projectId) {
  router.push({ name: 'ProjectDetails', params: { id: projectId } });
}
  
</script>
  

<style>

.projects-section {
  background-color: #f3eeea;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
}

.sectionTitle {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: fit-content;
  margin: 0 40px 40px 40px;
}

.sectionTitle h2 {
  color: #2d2d2d;
  font-size: 45px;
  font-weight: bold;
  margin:30px 0 40px 0;
  border-bottom: #2d2d22 3px solid;
}

.cardsContainer {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: fit-content;
  margin: 0 40px ;
}

.projectCard {
  background-color: #ceb199;
  width: 350px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 40px;
  border-radius: 8px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.projectCard p {
  color: #2d2d2d;
  font-size: 20px;
  font-weight: bold;
  margin:10px 0 10px 0;
}

.projectCard button {
  display: inline-block;
  padding: 10px 10px;
  font-family: Raleway, sans-serif;
  font-weight: 600;
  font-size: 20px;
  background-color: #2d2d2d;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  text-decoration: none;
  cursor: pointer;
  margin-top: 20px;
}

.projectCard button:hover {
  background-color: #8a7969;
}





/* 
.project-card {
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.project-card:hover {
  transform: translateY(-5px); /* Slight lift on hover */
  /* box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.card-image {
  position: relative;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 40px;
  transition: transform 0.3s ease;
}

.card-image:hover img {
  transform: scale(1.1);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); 
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  font-family: "Raleway", sans-serif;
  font-size: 18px;
  font-weight: 600;
}

.card-image:hover .overlay {
  opacity: 1; 
}

.card-info {
  padding: 20px;
  text-align: left;
}

.card-info h3 {
  font-family: "Raleway", sans-serif;
  font-size: 20px;
  font-weight: bold;
  color: #2d2d2d;
  margin-bottom: 10px;
}

.card-info p {
  font-family: "Raleway", sans-serif;
  font-size: 16px;
  color: #2d2d2d;
  line-height: 1.5;
} */ 
</style> 