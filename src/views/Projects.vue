<template>
    <div class="relative w-full h-80">
        <video
            src="@/assets/video/soumya.mp4"
            autoplay
            loop
            muted
            playsinline
            class="w-full h-full object-cover opacity-60"
            ></video>
    </div>
    <div class="flex flex-col gap-y-2 m-2">
        <ProjectCard
            title="Perfilamiento Inteligente"
            company="CamiónGo"
            position="Analista de datos"
            start="09/2024"
            end="12/2024"
            desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias cumque minima odio eveniet iste nulla quia molestiae, architecto expedita fuga praesentium porro rerum, aperiam modi id commodi nisi! Assumenda, magni."
            refEmail="rodrigo.valdes@camiongo.cl"
        />
        <ProjectCard
            title="Desarrollo de aplicación web"
            company="RetailCheck"
            position="Desarrollador .NET Razor Pages"
            start="12/2023"
            end="02/2024"
            desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias cumque minima odio eveniet iste nulla quia molestiae, architecto expedita fuga praesentium porro rerum, aperiam modi id commodi nisi! Assumenda, magni."
            refEmail="nino.panchana@remaco.cl"
        />
        <ProjectCard
            title="ChatBot para validación Docente"
            company="Universidad Autónoma de Chile"
            position="Desarrollador líder"
            start="09/2024"
            end="12/2024"
            desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias cumque minima odio eveniet iste nulla quia molestiae, architecto expedita fuga praesentium porro rerum, aperiam modi id commodi nisi! Assumenda, magni."
            refEmail="oscar.loyola@cloud.uautonoma.cl"
        />
        <ProjectCard
            title="Gestión de colegios"
            company="Universidad Autónoma de Chile"
            position="Miembro del equipo FullStack"
            start="09/2024"
            end="12/2024"
            desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias cumque minima odio eveniet iste nulla quia molestiae, architecto expedita fuga praesentium porro rerum, aperiam modi id commodi nisi! Assumenda, magni."
            refEmail="rene.galarce@cloud.uautonoma.cl"
        />
    </div>
</template>

<script setup>
    import ProjectCard from '@/components/ProjectCard.vue'
</script>