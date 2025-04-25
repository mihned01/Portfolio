import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectsComponent from '@/components/ProjectsComponent.vue'
import ProjectDetailsComponent from '@/components/productComponent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectsView.vue'),
    },
    {
    path: '/',
    name: 'Projects',
    component: ProjectsComponent,
  },
  {
    path: '/project/:id',
    name: 'ProjectDetails',
    component: ProjectDetailsComponent,
    props: true, 
  },
  ],
})



export default router