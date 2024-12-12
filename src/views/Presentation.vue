<template>
    <div class="relative w-full h-80">
        <video
            src="../assets/video/tech.mp4"
            autoplay
            loop
            muted
            playsinline
            class="w-full h-full object-cover"
            ></video>
        <GratitudeBtn name="Josh" class="absolute bottom-5 right-2 z-50"></GratitudeBtn>

    </div>

    <div class="">
        <div class="flex flex-col gap-y-2 m-2 justify-evenly md:flex-row md:gap-x-2 md:gap-y-0">
            <div class="basis-3/4 bg-zinc-800 rounded-xl px-10 py-10 text-justify leading-9">
                <h1 class="text-3xl font-semibold">Osvaldo Herrera</h1>
                <h2 class="italic text-sky-500">Aspirante a Data Scientist | Ingeniero Civil Informático | Desarrollo de soluciones basadas en Data Science | Desarrollador Web</h2>
                <p>
                    Soy estudiante de último semestre de la carrera Ingeniería Civil en Informática. Mi meta profesional actual es convertirme
                    en un científico de datos con una formación amplia. Incluyendo conocimientos profundos en la ingeniería de datos.
                    He participado en proyectos de distinta naturaleza: Desarrollo de aplicaciones web y móviles. Así también, construcción
                    de <em>middlewares</em> combinando tecnologías para un monitoreo en tiempo real de datos provenientes de microcontroladores. Finalmente,
                    dentro de mis experiencias más recientes, he liderado en el desarrollo de soluciones basadas en técnicas de ciencia de datos para
                    resolver procesos manuales de manera más eficiente.
                </p>
            </div>
            <div class="invisible basis-1/4 bg-zinc-800 rounded-xl md:visible md:px-5 md:py-10">
                <p>Presentación</p>
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