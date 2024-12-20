<template>
    <div class="relative w-full h-80">
        <img 
        src="@/assets/img/JohnSorenson.jpg" 
        alt="Atardecer en la carretera"
        class="w-full h-full object-cover opacity-60"
        />
        <div class="absolute flex flex-col left-5 bottom-5 bg-black/45 rounded-xl px-10 py-5">
            <h5 class="text-2xl sm:text-5xl font-semibold mb-5">Trabajemos juntos</h5>
            <p class="text-sm leading-7 sm:text-base">¡Pongámonos en contacto! Escríbame al correo o agendemos una cita virtual</p>
        </div>
    </div>

    <div class="flex flex-col items-center justify-center h-fit md:h-[500px]">
        <div class="w-full md:w-3/4 flex flex-col items-center md:flex-row p-5 bg-gradient-to-tl from-[#202022] from-45% to-[#37373B] to-80% rounded-lg">
            <div class="h-fit w-fit">
                <div id="avatar" class="h-[200px] w-[200px] bg-white rounded-full p-1">
                    <img 
                        src="@/assets/img/myself.JPG" 
                        alt="Osvaldo Herrera"
                        class="h-full w-full object-cover rounded-full"
                    />
                </div>
            </div>
            <div id="contact" class="flex flex-col h-full w-full p-5">
                <p>Trabajemos en conjunto. Me encuentro frecuentemente en LinkedIn, por tanto nuestra comunicación podría ser más fluida a través de este medio.</p>
                <p class="">Puede encontrarme en:</p>
                <div class="flex flex-row gap-5 justify-evenly">
                    <p>LinkedIn</p>
                    <p>Email</p>
                </div>
                <p>Coordinemos una reunión. Agende directamente una cita en mi calendario:</p>
                <div class="flex flex-row gap-5 justify-evenly">
                    <p>Google Calendar</p>
                </div>
            </div>
        </div>
    </div>

</template>