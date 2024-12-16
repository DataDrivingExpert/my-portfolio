<template>
    <div class="relative w-full h-80">
        <img 
        src="@/assets/img/street_nout_gons.jpg" 
        alt="Atardecer en la carretera"
        class="w-full h-full object-cover opacity-60"
        />
    </div>
    <div class="m-2 px-5 py-2 text-center">
        <h5 class="text-3xl font-semibold mt-10">Acerca de mí</h5>
    </div>
    <div class="flex flex-col mt-2 px-5 py-2 gap-x-5 gap-y-5 justify-center md:flex-row sm:flex-wrap">
        <div class="basis-4/5 flex flex-row justify-between rounded-xl text-justify items-center">
            <div class="flex flex-col basis-1/3 p-5 gap-y-5">
                <h5 class="text-2xl font-semibold">Pasión</h5>
                <p>
                    Amo aprender temas nuevos sobre este maravilloso campo. El aprendizaje automático y el campo 
                    de inteligencia artificial en general es el lugar donde siempre quiero estar.
                </p>
                <h5 class="text-2xl font-semibold">Buena fuente de ingresos</h5>
                <p>
                    El área de las tecnologías de la información es amplia y de alta demanda. Lo cual me motiva 
                    a seguir perfeccionando mis habilidades, adquiriendo nuevos conocimientos constantemente.
                </p>
            </div>
            <div class="flex flex-col basis-1/3">
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
                    El área de las tecnologías de la información es amplia. Con una gran variedad de especialidades dentro de ella. Y de alta
                    demanda. Lo cual me motiva a seguir perfeccionando mis habilidades, adquiriendo nuevos conocimientos constantemente.
                </p>
            </div>
        </div>

    </div>
</template>

<script setup>
    import { Pie } from 'vue-chartjs';
    import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

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