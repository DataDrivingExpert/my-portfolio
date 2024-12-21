<template>
    <div class="relative w-full h-80">
        <video
            src="/video/Nicola_Narracci.mp4"
            autoplay
            loop
            muted
            playsinline
            class="w-full h-full object-cover opacity-80"
            ></video>
        <div class="absolute flex flex-col basis-4/4 md:basis-2/4 left-5 bottom-5 bg-black/45 rounded-xl px-10 py-5">
            <h5 class="text-2xl sm:text-5xl font-semibold mb-5">Educación continua</h5>
            <p class="text-sm leading-7 sm:text-base">Me encuentro comprometido con la excelencia. Amo aprender, porque me apasiona lo que hago.</p>
        </div>
    </div>
    <div class="flex flex-col gap-y-2 m-2">
        <h5 class="text-2xl sm:text-3xl font-semibold text-center my-5">Formación académica</h5>
        <EducationCard
            v-for="e in grades"
            :grade="e.grade"
            :inst="e.inst"
            :start="e.start"
            :end="e.end"
            :desc="e.desc"
        >
            <img 
            :src="loadImage(e.imgSrc)" 
            alt=""
            class="w-full h-full object-cover rounded-lg"
            />
        </EducationCard>
        <h5 class="text-3xl font-semibold text-center my-5">Certificaciones</h5>
        <EducationCard
            v-for="e in cert"
            :grade="e.grade"
            :inst="e.inst"
            :start="e.start"
            :end="e.end"
            :desc="e.desc"
        >
            <img 
            :src="loadImage(e.imgSrc)" 
            alt=""
            class="w-full h-full object-cover rounded-lg"
            />
        </EducationCard>
    </div>
</template>

<script setup>
    import EducationCard from '@/components/EducationCard.vue'
    import education from '../education.json'

    const grades = education.filter(element => {
        return element.type.toLowerCase() == 'gradoacademico'
    })

    const cert = education.filter(element => {
        return element.type.toLowerCase() == 'certificacion'
    })

    const loadImage = (imgSrc) => {
        return `/img/${imgSrc}`
    }
</script>