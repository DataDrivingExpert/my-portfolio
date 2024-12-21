<template>
    <div class="relative w-full h-80">
        <img 
        src="/img/haroldVasquez.jpg" 
        alt="Atardecer en la carretera"
        class="w-full h-full object-cover opacity-60"
        />
        <div class="absolute flex flex-col w-full md:w-fit items-center left-0 bottom-5 bg-black/45 rounded-xl px-10 py-5 md:ml-5">
            <h5 class="text-5xl font-semibold mb-5 text-center">Sobre mí</h5>
            <p>Más que sólo una carrera. Un estilo de vida</p>
        </div>
    </div>
    <div class="m-2 px-5 py-2 text-center">
        <h5 class="text-3xl font-semibold mt-10">¿Por qué Ingeniería Civil en Informática?</h5>
    </div>
    <div class="flex flex-col mt-2 px-5 py-2 gap-x-5 gap-y-10 justify-center">
        <div class="basis-4/5 flex flex-col lg:flex-row justify-between rounded-xl text-justify items-center">
            <div class="flex flex-col basis-1/3 p-5 gap-y-5">
                <h5 class="text-2xl font-semibold">Pasión</h5>
                <p>
                    Me encanta aprender temas nuevos sobre este maravilloso campo. El aprendizaje automático y el campo 
                    de inteligencia artificial en general es el lugar donde siempre quiero estar.
                </p>
                <h5 class="text-2xl font-semibold">Buena fuente de ingresos</h5>
                <p>
                    El área de las tecnologías de la información es amplia y de alta demanda. Lo cual me motiva 
                    a seguir perfeccionando mis habilidades, adquiriendo nuevos conocimientos constantemente.
                </p>
            </div>
            <div class="hidden sm:flex sm:flex-col sm:basis-1/5 md:basis-1/3">
                <div>
                    <Pie :data="data" :options="config"/>
                </div>
            </div>
            <div class="flex flex-col basis-1/3 p-5 gap-y-5">
                <h5 class="text-2xl font-semibold">Habilidades</h5>
                <p>
                    Me gustan las matemáticas y la computación. Tengo experiencia liderando la planificación y control del trabajo en equipo.
                    Aptitudes muy necesarias en esta área.
                </p>
                <h5 class="text-2xl font-semibold">Objetivos</h5>
                <p>
                    Siempre he apuntado a ser la mejor versión de mí mismo. Esta área está muy involucrada con la mejora continua. Llegando a
                    ser crucial en todos sus ámbitos. Lo cual se encuentra en línea con mi objetivo personal y profesional.
                </p>
            </div>
        </div>
        <h5 class="text-3xl font-semibold mt-10 text-center">Objetivos profesionales</h5>
        <div class="basis-full flex flex-col md:flex-row md:flex-wrap gap-y-5 justify-center items-center mb-12">
            <FlipCard />
            <FlipCard />
            <FlipCard />
        </div>

    </div>
</template>

<script setup>
    import { Pie } from 'vue-chartjs';
    import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
    import FlipCard from '@/components/FlipCard.vue';
    // chartJS
    ChartJS.register(ArcElement, Tooltip, Legend)

    const data = {
        labels: ['Pasión', 'Habilidades', 'Rentabilidad', 'Objetivos'],
        datasets: [
            {
            backgroundColor: ['#2B2B2B', '#3C3C3C', '#555555', '#9B9B9B'],
            data: [65, 15, 10, 10]
            }
        ]
    }

    const config = {
        responsive: true,
        maintainAspectRatio: false,
        borderColor: "#FFFFFF00",

    };
</script>