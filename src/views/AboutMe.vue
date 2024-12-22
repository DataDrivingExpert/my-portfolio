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
    <div class="flex gap-y-2 m-2 justify-evenly mt-12">
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
    <div class="px-5 py-2 text-center">
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
        <div class="w-full md:w-3/4 flex flex-col md:flex-row gap-5 justify-center items-stretch mb-12 mx-auto">
            <div class="basis-1/3 p-5 rounded-lg border-2">
                <p class="text-sm text-sky-500">Objetivo General</p>
                <p>
                    <b>Aplicar</b> mis conocimientos como científico de datos sobre los problemas actuales en la industria.
                    Para mejorar el rendimiento económico y la eficiencia operacional de las empresas mediante
                    el uso de agentes de inteligencia artificial.
                </p>
            </div>
            <div class="basis-1/3 p-5 rounded-lg border-2">
                <p class="text-sm text-sky-500">Objetivo Específico</p>
                <p>
                    <b>Desarrollar</b> proyectos del área de ciencia de datos, en distintos campos de aplicación. Para 
                    adquirir una experiencia más amplia, permitiéndome enfrentar y resolver desafíos actuales.
                </p>
            </div>
            <div class="basis-1/3 p-5 rounded-lg border-2">
                <p class="text-sm text-sky-500">Objetivo Específico</p>
                <p>
                    <b>Adquirir</b> de forma continua conocimientos actualizados sobre el campo mediante diplomados, cursos
                    de especialización y seminarios de inteligencia artificial. Con el objeto de adaptar las soluciones desarrolladas
                    a las tecnologías más nuevas de forma constante.
                </p>
            </div>
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
            backgroundColor: ['#A7A7A7', '#7F7F7F', '#5C5C5C', '#3A3A3A'],
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