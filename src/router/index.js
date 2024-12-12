import { createRouter, createWebHistory } from 'vue-router'
import Presentation from '@/views/Presentation.vue'
import Projects from '@/views/Projects.vue'
import EducationInfo from '@/views/EducationInfo.vue'
import MyContact from '@/views/MyContact.vue'
import AboutMe from '@/views/AboutMe.vue'


const routes = [
  {
    path: '/',
    name: 'resumen',
    component: Presentation,
  },
  {
    path: '/proyectos',
    name: 'proyectos',
    component: Projects,
  },
  {
    path: '/educacion',
    name: 'educación',
    component: EducationInfo,
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: MyContact,
  },
  {
    path: '/acerca-de-mi',
    name: 'acerca-de-mi',
    component: AboutMe,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
