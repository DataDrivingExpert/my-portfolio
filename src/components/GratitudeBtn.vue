<template>
    <div
      :class="['flex flex-row rounded-full text-white px-5 py-2 w-fit justify-evenly gap-x-3 cursor-pointer hover:bg-rose-700', ]"
    >
      <VideoCameraIcon class="h-6 w-6 text-white" />

    </div>
  </template>
  
  <script setup>
  import { VideoCameraIcon } from "@heroicons/vue/24/outline";
  
  defineProps({
    name: String,
    bgColor: String,
  });
  </script>
  
