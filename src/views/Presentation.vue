<template>
    <div class="relative w-full h-80">
        <video
            src="@/assets/video/coverr.mp4"
            autoplay
            loop
            muted
            playsinline
            class="w-full h-full object-cover"
            ></video>
        <GratitudeBtn name="Josh" class="absolute bottom-5 left-2 z-50"></GratitudeBtn>

    </div>


    <div class="flex gap-y-2 m-2 justify-evenly">
        <div class="relative basis-3/4 bg-gradient-to-tl from-[#202022] from-45% to-[#37373B] to-80% rounded-xl px-10 py-10 text-justify leading-9">
            <div class="h-[200px] w-[200px] bg-white rounded-full p-1 absolute -top-20 right-2">
                <img 
                src="@/assets/img/myself.JPG" 
                alt="Osvaldo Herrera"
                class="h-full w-full object-cover rounded-full"
                />

            </div>
            <h1 class="text-3xl font-semibold mt-20 text-white">Osvaldo Herrera</h1>
            <h2 class="italic text-mysky">
                Aspirante a Data Scientist 
                <span class="text-white">|</span> 
                Ingeniero Civil Informático 
                <span class="text-white">|</span> 
                Desarrollo de soluciones basadas en Data Science 
                <span class="text-white">|</span> 
                Desarrollador Web
            </h2>
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
    
    <div class="flex bg-gradient-to-b from-zinc-900 to-black py-10 justify-center px-10">
        <div class="basis-3/4">
            <h5 class="text-3xl font-semibold my-5">Proyectos</h5>
            <div class="flex flex-col gap-y-5 md:flex-row justify-start gap-x-5">
                <!-- Añadir la clase flex para que justify-center y items-center funcionen -->
                <div class="flex basis-1/4 min-h-40 text-2xl text-center justify-center items-center px-5 bg-zinc-900 rounded-xl">
                    <p>Artificial Intelligence</p>
                </div>
                <div class="flex basis-1/4 min-h-40 text-2xl text-center justify-center items-center px-5 bg-zinc-900 rounded-xl">
                    <p>Machine Learning</p>
                </div>
                <div class="flex basis-1/4 min-h-40 text-2xl text-center justify-center items-center px-5 bg-zinc-900 rounded-xl">
                    <p>Web Development</p>
                </div>
            </div>
            <h5 class="text-3xl font-semibold mt-10 mb-5">Formación</h5>
            <div class="flex flex-col gap-y-5 md:flex-row justify-start gap-x-5">
                <!-- Añadir la clase flex para que justify-center y items-center funcionen -->
                <div class="flex basis-1/4 min-h-40 text-2xl text-center justify-center items-center px-5 bg-zinc-900 rounded-xl">
                    <p>Grado Académico</p>
                </div>
                <div class="flex basis-1/4 min-h-40 text-2xl text-center justify-center items-center px-5 bg-zinc-900 rounded-xl">
                    <p>Licencias y Certificaciones</p>
                </div>
            </div>
        </div>
    </div>




</template>

<script setup>
    import GratitudeBtn from '@/components/GratitudeBtn.vue'
</script>