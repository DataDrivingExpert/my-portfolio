<template>
    <div class="relative w-full h-80">
        <video
            src="/video/coverr.mp4"
            autoplay
            loop
            muted
            playsinline
            class="w-full h-full object-cover"
            ></video>
    </div>


    <div class="flex gap-y-2 m-2 justify-evenly">
        <div class="relative basis-3/4 bg-gradient-to-tl from-[#202022] from-45% to-[#37373B] to-80% rounded-xl px-10 py-10 text-justify leading-9">
            <div class="h-[200px] w-[200px] bg-white rounded-full p-1 absolute -top-[100px] md:-top-20 right-2">
                <img 
                src="/img/myself.JPG" 
                alt="Osvaldo Herrera"
                class="h-full w-full object-cover rounded-full"
                />

            </div>
            <h1 class="text-2xl md:text-3xl font-semibold mt-20 text-white">Osvaldo Herrera</h1>
            <div class="flex flex-col text-sm leading-7 text-right md:flex-row md:text-base md:text-center">
                <h2>Aspirante a Data Scientist <span class="text-white">|</span></h2>
                <h2>&nbsp; Ingeniero Civil Informático <span class="text-white">|</span></h2>
                <h2>&nbsp; Desarrollo de soluciones basadas en Data Science <span class="text-white">|</span> </h2>
                <h2>&nbsp; Desarrollador Web</h2>
            </div>
            <p class="hidden sm:block">
                Soy estudiante de último semestre de la carrera Ingeniería Civil en Informática. Mi meta profesional es convertirme
                en un científico de datos con una formación amplia. Incluyendo conocimientos profundos en la ingeniería de datos.
                He participado en proyectos de distinta naturaleza: Desarrollo de aplicaciones web y móviles. Así como en la construcción
                de <em>middlewares</em>. Combinando tecnologías para un monitoreo en tiempo real de datos provenientes de microcontroladores. Finalmente,
                en mi experiencia más reciente, fui líder en el desarrollo de soluciones basadas en técnicas de ciencia de datos para
                resolver procesos manuales de manera más eficiente.
            </p>
        </div>
    </div>
    
    <div class="flex justify-center px-10">
        <div class="basis-3/4">
            <h5 class="text-3xl font-semibold my-5">Proyectos</h5>
            <div class="flex flex-col gap-y-5 md:flex-row justify-start gap-x-5">
                <BtnResume content="Artificial Intelligence"></BtnResume>
                <BtnResume content="Machine Learning"></BtnResume>
                <BtnResume content="Web Development"></BtnResume>
            </div>
            <h5 class="text-3xl font-semibold mt-10 mb-5">Formación</h5>
            <div class="flex flex-col gap-y-5 md:flex-row justify-start gap-x-5 mb-10">
                <BtnResume content="Grado Académico"></BtnResume>
                <BtnResume content="Licencias y Certificaciones"></BtnResume>
            </div>
        </div>
    </div>




</template>

<script setup>
    import BtnResume from '@/components/BtnResume.vue';
</script>