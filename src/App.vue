<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import FooterSection from '@/components/FooterSection.vue'

</script>

<template>
  <NavBar/>
  <RouterView></RouterView>
  <FooterSection></FooterSection>
  
</template>