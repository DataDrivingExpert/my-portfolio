<template>
    <div class="flex basis-1/4 min-h-40 text-2xl text-center justify-center items-center px-5 bg-gradient-to-tl from-[#202022] from-45% to-[#37373B] to-80% rounded-xl transition ease-in-out hover:-traslate-y-5 hover:scale-110 hover:cursor-pointer">
        <p v-text="content"></p>
    </div>
</template>

<script setup>
    defineProps({
        content: String
    })
</script>