<template>
    <Disclosure as="nav" :class="['fixed top-0 left-0 w-full z-50', navbarClass] " v-slot="{ open }">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <!-- Mobile menu button-->
            <DisclosureButton class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span class="absolute -inset-0.5"/>
              <span class="sr-only">Open main menu</span>
              <Bars3Icon v-if="!open" class="block size-6" aria-hidden="true" />
              <XMarkIcon v-else class="block size-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
          <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div class="hidden sm:ml-6 sm:block">
              <div class="flex space-x-4">
                <RouterLink class='text-gray-300 hover:bg-zinc-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium' to='/'>Resumen</RouterLink>
                <RouterLink class='text-gray-300 hover:bg-zinc-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium' to='/proyectos'>Proyectos</RouterLink>
                <RouterLink class='text-gray-300 hover:bg-zinc-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium' to='/educacion'>Educación</RouterLink>
                <RouterLink class='text-gray-300 hover:bg-zinc-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium' to='/acerca-de-mi'>Sobre mí</RouterLink>
                <RouterLink class='text-gray-300 hover:bg-zinc-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium' to='/contacto'>Contacto</RouterLink>
                <RouterLink class='text-gray-300 hover:bg-zinc-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium' to='/reconocimientos'>Reconocimientos</RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <DisclosurePanel class="sm:hidden">
        <div class="space-y-1 px-2 pb-3 pt-2">
          <DisclosureButton>
              <div class="flex flex-col">
                <RouterLink class='text-gray-300 hover:bg-zinc-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium' to='/'>Resumen</RouterLink>
                <RouterLink class='text-gray-300 hover:bg-zinc-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium' to='/proyectos'>Proyectos</RouterLink>
                <RouterLink class='text-gray-300 hover:bg-zinc-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium' to='/educacion'>Educación</RouterLink>
                <RouterLink class='text-gray-300 hover:bg-zinc-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium' to='/acerca-de-mi'>Sobre mí</RouterLink>
                <RouterLink class='text-gray-300 hover:bg-zinc-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium' to='/contacto'>Contacto</RouterLink>
                <RouterLink class='text-gray-300 hover:bg-zinc-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium' to='/reconocimientos'>Reconocimientos</RouterLink>
              </div>
          </DisclosureButton>
        </div>
      </DisclosurePanel>
    </Disclosure>
  </template>
  
  <script setup>
  import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';
  import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline';
  import {RouterLink} from 'vue-router';

  import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

  // Definir variable reactiva para el estado de desplazamiento
  const isScrolled = ref(false);

  // Computed para manejar las clases dinámicas
  const navbarClass = computed(() => (isScrolled.value ? 'bg-zinc-800/90' : 'bg-zinc-800/30'));

  // Función para manejar el evento de scroll
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 40;
  };

  // Agregar y eliminar el evento de scroll
  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
  });
  </script>