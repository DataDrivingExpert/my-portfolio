<template>
    <div class="relative w-full h-80">
        <video
            src="/video/coverrCode2.mp4"
            autoplay
            loop
            muted
            playsinline
            class="w-full h-full object-cover"
            ></video>
        <div class="absolute flex flex-col w-full md:w-fit items-center left-0 bottom-5 bg-black/45 rounded-xl px-10 py-5 md:ml-5">
            <h5 class="text-5xl font-semibold mb-5">Proyectos</h5>
            <p>Conjunto de proyectos académicos y profesionales desarrollados. <br/> Conozca un poco más de mi trabajo</p>
        </div>
    </div>
    <div class="flex flex-col md:flex-row justify-center bg-gradient-to-b from-zinc-900 to-black">

        <div class="flex flex-col max-w-screen-sm h-fit justify-evenly bg-zinc-800/50 rounded-md gap-y-2 m-2 py-5 px-10">
                <div>Filtrar por área:</div>
                <select v-model="selected" 
                        class="bg-zinc-700/50 px-5 rounded-xl text-white appearance-none focus:outline-none">
                    <option value="ALL" class="bg-zinc-700 text-white">Todo</option>
                    <option value="AI" class="bg-zinc-700 text-white">Inteligencia Artificial</option>
                    <option value="ML" class="bg-zinc-700 text-white">Machine Learning</option>
                    <option value="Dev" class="bg-zinc-700 text-white">Desarrollo Web</option>
                </select>


                <!-- <div>Filtrar por tecnologías:</div>

                <div v-for="t in tech">
                    <input type="checkbox" :key="t" :value="t" v-model="checkedNames" />
                    <label :for="t" class="ml-5 text-green-500">{{t}}</label>
                </div> -->
        </div>
        <div class="flex flex-col basis-4/4 sm:basis-5/12 h-screen overflow-y-auto">
            <div class="flex flex-col gap-y-2 m-2">
                <ProjectCard
                    v-for="p in proj"
                    :key="p.id"
                    :title="p.title"
                    :company="p.company"
                    :position="p.position"
                    :start="p.start"
                    :end="p.end"
                    :desc="p.desc"
                    :refEmail="p.refEmail"
                >
                    <img 
                    v-if="p.mediaType == 'img' && p.mediaSrc != null"
                    :src="loadImage(p.mediaSrc)"
                    alt="Imagen del proyecto" 
                    class="w-full h-full object-cover rounded-xl"
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
                </ProjectCard>

            </div>
        </div>
    </div>


    
</template>

<script setup>
    import ProjectCard from '@/components/ProjectCard.vue'
    import { ref, computed } from 'vue';
    import projects from '@/projects.json'

    const selected = ref('ALL')
    const checkedNames = ref([])

    // const tech = ['Django', 'ReactJS', 'VueJS', 'Scikit-Learn', 'Pandas']
    // const langs = ['Python', 'JavaScript', 'SQL', 'C#']

    const loadImage = (imgSrc) => {
        return `/img/${imgSrc}`
    }

    const loadVideo = (videoSrc) => {
        return `/video/${videoSrc}`
    }

    const proj = computed(() => {
        if(selected.value !== "ALL"){
            return projects.filter(item =>
                item.keywords.some(keyword =>
                keyword.toLowerCase() === selected.value.toLowerCase()
                )
            );
        } else {
            return projects;
        }
    })

</script>