<template>
    <div class="flex flex-col-reverse gap-y-2 justify-center gap-x-2 sm:flex-row">
        <div class="basis-2/4 bg-zinc-800 rounded-xl px-5 py-10">
            <h5 class="text-3xl font-semibold text-pink-700">{{ title }}</h5>
            <p>Empresa <em class="font-medium text-violet-400">{{ company }}</em></p>
            <p>En rol de <em class="font-medium text-violet-400">{{ position }}</em></p>
            <p>Desde <em class="bg-gray-700 rounded-xl px-2">{{start}}</em> hasta <em class="bg-gray-700 rounded-xl px-2">{{ end }}</em></p>
            <p class="font-medium text-cyan-400">Descripción</p>
            <p>
                <em>{{ desc }}</em>
            </p>
            <div class="flex flex-row py-1 mt-2 gap-x-2 justify-start">
                <p>Contacto referencial</p>
                <p class="font-medium text-violet-400">{{ refEmail }}</p>
                <div class="h-5 w-5">
                    <ClipboardDocumentIcon class="h-full w-full text-white" />
                </div>
            </div>
        </div>
        <div class="basis-1/4 bg-zinc-800 rounded-xl p-5">
            <img 
            src="../assets/img/light-bulbs.jpg" 
            alt=""
            class="w-full h-full object-cover rounded-xl"
            >
        </div>
    </div>
</template>

<script setup>
defineProps({
  title: String,
  company: String,
  position: String,
  start: String,
  end: String,
  desc: String,
  refEmail: String,
})

import { ClipboardDocumentIcon } from "@heroicons/vue/24/outline";



</script>