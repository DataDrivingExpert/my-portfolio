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

    <div class="flex flex-col gap-y-10 w-3/4 mx-auto my-12 py-5 justify-start">
        <!-- Aplicamos la clase `fadeInUp` cuando la condición de scroll es verdadera -->
        <h5 
            id="fst-animation"
            :class="{'animate__animated animate__fadeInUp': inView.fst, 'animate__animated animate__fadeOutDown': !inView.fst,}" 
            class="text-2xl md:text-6xl font-semibold"
        >
            Bienvenido
        </h5>
        <div class="flex flex-col md:flex-row gap-5 justify-evenly">
            <div 
            :class="{'animate__animated animate__fadeInUp': inView.fst, 'animate__animated animate__fadeOutDown': !inView.fst,}" 
            class="p-8 w-full md:w-1/2 text-justify rounded-lg bg-gradient-to-tl from-[#202022] from-45% to-[#37373B] to-80%">
                <p>
                    Conozca mi experiencia y formación académica de primera fuente. Consulte a los contactos de referencia o comuníquese
                    conmigo, agendando una cita virtual a través de mi calendario.
                </p>
            </div>
        </div>
        <h5 
            id="snd-animation"
            :class="{'animate__animated animate__fadeInUp': inView.snd, 'animate__animated animate__fadeOutDown': !inView.snd,}" 
            class="text-2xl md:text-6xl font-semibold"
        >
            Resumen
        </h5>
        <div 
        :class="{'animate__animated animate__fadeInUp': inView.snd, 'animate__animated animate__fadeOutDown': !inView.snd,}"
        class="flex flex-col md:flex-row gap-5 md:justify-center">
            <div class="basis-1/3 p-5 rounded-lg border-2">
                <p class="text-sm text-sky-500">Certificación más reciente</p>
                <p class="font-semibold">Linear Algebra For Machine Learning and Data Science</p>
            </div>
            <div class="basis-1/3 p-5 rounded-lg border-2">
                <p class="text-sm text-sky-500">Último cargo</p>
                <p class="font-semibold">Analista de datos</p>
                <p class="text-sm text-sky-500">Ámbito</p>
                <p class="font-semibold">Práctica Profesional II</p>
            </div>
            <div class="basis-1/3 p-5 rounded-lg border-2">
                <p class="text-sm text-sky-500">Último proyecto</p>
                <p class="font-semibold">Portfolio profesional VueJS</p>
            </div>
        </div>

        <h5 id="trd-animation" 
        :class="{'animate__animated animate__fadeInUp': inView.trd, 'animate__animated animate__fadeOutDown': !inView.trd,}"
        class="text-2xl md:text-6xl">
            Más información
        </h5>
        <div 
            :class="{'animate__animated animate__fadeInUp': inView.trd, 'animate__animated animate__fadeOutDown': !inView.trd,}" 
            class="p-8 w-full md:w-1/2 mx-auto text-justify rounded-lg border-2">
                <p>
                    Explore entre los proyectos, conozca mi formación 
                    ¡y pongámonos en contacto!
                </p>
            </div>
        
        <RouterLink 
        to='/proyectos'
        class="max-w-fit mx-auto py-3 px-5 text-center text-xl bg-gradient-to-br from-violet-600 to-sky-500 rounded-lg">
            Ir a proyectos
        </RouterLink>
    </div>

</template>

<script setup>
import { ref, onMounted, onUnmounted, reactive} from 'vue';
import {RouterLink} from 'vue-router';

const inView = reactive({
    fst: false,
    snd: false,
    trd: false,
});

// Función para detectar el scroll y activar la animación
const scrollBehavior = () => {

    const fstElement = document.getElementById('fst-animation')
    const fstPosition = fstElement.getBoundingClientRect()
    const sndElement = document.getElementById('snd-animation')
    const sndPosition = sndElement.getBoundingClientRect()
    const trdElement = document.getElementById('trd-animation')
    const trdPosition = trdElement.getBoundingClientRect()

    if (window.scrollY >= fstPosition.top/2) {
        inView.fst = true;
    } else {
        inView.fst = false;
    }

    if(window.scrollY >= sndPosition.top){
        inView.snd = true;
    } else {
        inView.snd = false;
    }

    if(window.scrollY >= trdPosition.top){
        inView.trd = true;
    } else {
        inView.trd = false;
    }
};

// Configuramos el evento de scroll
onMounted(() => {
    window.addEventListener('scroll', scrollBehavior);
});

// Limpiamos el evento cuando el componente se destruye
onUnmounted(() => {
    window.removeEventListener('scroll', scrollBehavior);
});
</script>
