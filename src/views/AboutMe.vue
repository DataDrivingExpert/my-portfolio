<template>
    <div class="relative w-full h-80">
        <img 
        src="@/assets/img/street_nout_gons.jpg" 
        alt="Atardecer en la carretera"
        class="w-full h-full object-cover opacity-60"
        />
    </div>
    <div class="m-2 px-5 py-2 text-center">
        <h5 class="text-3xl font-semibold">Acerca de mí</h5>
    </div>
    <div class="flex flex-col m-2 px-5 py-2 gap-x-5 gap-y-5 rounded-xl justify-center md:flex-row sm:flex-wrap">
        <CardImg></CardImg>
        <CardImg></CardImg>
        <CardImg></CardImg>
        <CardImg></CardImg>
        <CardImg></CardImg>
    </div>
</template>

<script setup>
    import CardImg from '@/components/CardImg.vue';
</script>