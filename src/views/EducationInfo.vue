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
        <div class="absolute flex flex-col w-full md:w-fit items-center left-0 bottom-5 bg-black/45 rounded-xl px-10 py-5 md:ml-5">
            <h5 class="text-2xl sm:text-5xl font-semibold mb-5">Educación continua</h5>
            <p class="text-sm leading-7 sm:text-base">Me encuentro comprometido con la excelencia. Amo aprender, porque me apasiona lo que hago.</p>
        </div>
    </div>
    <div class="flex flex-col gap-y-2 m-2">
        <h5 class="text-2xl font-semibold text-center my-5">Formación académica</h5>
        <EducationCard
            v-for="e in grades"
            :key="e.id"
            :grade="e.grade"
            :inst="e.inst"
            :start="e.start"
            :end="e.end"
            :desc="e.desc"
        >
        <img 
            v-if="e.mediaType == 'img' && e.mediaSrc != null"
            :src="loadImage(e.mediaSrc)" 
            alt="Imagen referencial de educación"
            class="w-full h-full object-cover rounded-lg"
            />
            <img 
            v-else-if="e.mediaType == 'svg' && e.mediaSrc != null"
            :src="loadVector(e.mediaSrc)" 
            alt="Imagen referencial de educación"
            class="w-full h-full object-contain rounded-lg"
            />
            <video
            v-else-if="p.mediaType == 'video' && p.mediaSrc != null"
            controls 
            :src="loadVideo(p.mediaSrc)"
            />
            <img 
            v-else 
            src="/svg/PhotoIcon.svg" 
            alt="Imagen del proyecto"
            class="w-[300px] h-[300px] object-cover rounded-xl mx-auto"
            />
        </EducationCard>
        <h5 class="text-2xl font-semibold text-center my-5">Certificaciones</h5>
        <EducationCard
            v-for="e in cert"
            :key="e.id"
            :grade="e.grade"
            :inst="e.inst"
            :start="e.start"
            :end="e.end"
            :desc="e.desc"
        >
            <img 
            v-if="e.mediaType == 'img' && e.mediaSrc != null"
            :src="loadImage(e.mediaSrc)" 
            alt="Imagen referencial de educación"
            class="w-full h-full object-contain rounded-lg"
            />
            <img 
            v-else-if="e.mediaType == 'svg' && e.mediaSrc != null"
            :src="loadVector(e.mediaSrc)" 
            alt="Imagen referencial de educación"
            class="w-full h-full object-contain rounded-lg"
            />
            <video
            v-else-if="p.mediaType == 'video' && p.mediaSrc != null"
            controls 
            :src="loadVideo(p.mediaSrc)"
            />
            <img 
            v-else 
            src="/svg/PhotoIcon.svg" 
            alt="Imagen del proyecto"
            class="w-[300px] h-[300px] object-cover rounded-xl mx-auto"
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

    const loadImage = (mediaSrc) => {
        return `/img/${mediaSrc}`
    }

    const loadVideo = (videoSrc) => {
        return `/video/${videoSrc}`
    }
    
    const loadVector = (vectorSrc) => {
        return `/svg/${vectorSrc}`
    }
</script>