<template>
    <div class="flex flex-col-reverse gap-y-2 justify-center gap-x-2 sm:flex-row">
        <div class="basis-2/4 bg-zinc-800 rounded-xl px-5 py-10">
            <h5 class="text-3xl font-semibold text-cyan-300">{{ grade }}</h5>
            <p>Institución <em class="font-medium text-teal-500">{{ inst }}</em></p>
            <p>Desde <em class="bg-gray-700 rounded-xl px-2">{{start}}</em> hasta <em class="bg-gray-700 rounded-xl px-2">{{ end }}</em></p>
            <p class="font-medium text-emerald-500">Descripción</p>
            <p>
                <em>{{ desc }}</em>
            </p>
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
  grade: String,
  inst: String,
  start: String,
  end: String,
  desc: String,
})
</script>