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

    <div class="">
        <div class="flex flex-col gap-y-2 m-2 justify-evenly md:flex-row md:gap-x-2 md:gap-y-0">
            <div class="relative basis-3/4 bg-zinc-800 rounded-xl px-10 py-10 text-justify leading-9">
                <div class="h-[200px] w-[200px] bg-white rounded-full p-1 absolute -top-20 right-2">
                    <img 
                    src="@/assets/img/myself.JPG" 
                    alt="Osvaldo Herrera"
                    class="h-full w-full object-cover rounded-full"
                    />

                </div>
                <h1 class="text-3xl font-semibold mt-20 text-stone-400">Osvaldo Herrera</h1>
                <h2 class="italic text-yellow-50">
                    Aspirante a Data Scientist 
                    <span class="text-white">|</span> 
                    Ingeniero Civil Informático 
                    <span class="text-white">|</span> 
                    Desarrollo de soluciones basadas en Data Science 
                    <span class="text-white">|</span> 
                    Desarrollador Web
                </h2>
                <p>
                    Soy estudiante de último semestre de la carrera Ingeniería Civil en Informática. Mi meta profesional actual es convertirme
                    en un científico de datos con una formación amplia. Incluyendo conocimientos profundos en la ingeniería de datos.
                    He participado en proyectos de distinta naturaleza: Desarrollo de aplicaciones web y móviles. Así también, construcción
                    de <em>middlewares</em> combinando tecnologías para un monitoreo en tiempo real de datos provenientes de microcontroladores. Finalmente,
                    dentro de mis experiencias más recientes, he liderado en el desarrollo de soluciones basadas en técnicas de ciencia de datos para
                    resolver procesos manuales de manera más eficiente.
                </p>
            </div>
            <div class="invisible basis-1/4 bg-zinc-800 rounded-xl text-md italic text-center md:visible md:px-5 md:py-10">
                <p class="transition transform hover:-translate-y-1 hover:bg-violet-500 py-2 px-2 bg-zinc-900 rounded-xl mb-2 ">Machine Learning</p>
                <p class="transition transform hover:-translate-y-1 hover:bg-violet-500 py-2 px-2 bg-zinc-900 rounded-xl mb-2">Manejo y visualización de datos</p>
                <p class="transition transform hover:-translate-y-1 hover:bg-violet-500 py-2 px-2 bg-zinc-900 rounded-xl mb-2">Bases de datos SQL y NoSQL</p>
                <p class="transition transform hover:-translate-y-1 hover:bg-violet-500 py-2 px-2 bg-zinc-900 rounded-xl mb-2">Full Stack Dev</p>
                <p class="transition transform hover:-translate-y-1 hover:bg-violet-500 py-2 px-2 bg-zinc-900 rounded-xl">Django, Django Rest Framework, Vue JS</p>
            </div>
        </div>
        <div class="basis-4/4 bg-zinc-800 rounded-xl px-10 py-10 m-2">
            <p>OTRO CONTENIDO</p>
            
        </div>
    </div>

</template>

<script setup>
    import GratitudeBtn from '@/components/GratitudeBtn.vue'

</script>