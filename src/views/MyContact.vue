<template>
    <div class="relative w-full h-80">
        <img 
        src="/img/JoshSorenson.jpg" 
        alt="Atardecer en la carretera"
        class="w-full h-full object-cover opacity-60"
        />
        <div class="absolute flex flex-col left-5 bottom-5 bg-black/45 rounded-xl px-10 py-5">
            <h5 class="text-2xl sm:text-5xl font-semibold mb-5">Trabajemos juntos</h5>
            <p class="text-sm leading-7 sm:text-base">¡Pongámonos en contacto! Escríbame al correo o agendemos una cita virtual</p>
        </div>
    </div>

    <div class="flex flex-col items-center justify-center h-fit m-2 md:h-[500px]">
        <div class="w-full md:w-3/4 flex flex-col items-center md:flex-row p-5 bg-gradient-to-tl from-[#202022] from-45% to-[#37373B] to-80% rounded-lg">
            <div class="h-fit w-fit">
                <div id="avatar" class="h-[200px] w-[200px] bg-white rounded-full p-1">
                    <img 
                        src="/img/myself.JPG"
                        alt="Osvaldo Herrera"
                        class="h-full w-full object-cover rounded-full"
                    />
                </div>
            </div>
            <div id="contact" class="flex flex-col h-full w-full p-5 gap-5">
                <p>Trabajemos en conjunto. Me encuentro frecuentemente en LinkedIn, por tanto nuestra comunicación podría ser más fluida a través de este medio.</p>
                <p class="text-lg">Puede encontrarme en:</p>
                <div class="flex flex-col md:flex-row gap-5 justify-center">
                    <a 
                    class="px-3 text-center bg-gradient-to-br from-blue-600/85 from-40% to-sky-500/85 rounded-lg transition ease-in-out hover:-traslate-y-5 hover:scale-110"
                    href="https://www.linkedin.com/in/herreracuevas/">
                        LinkedIn
                    </a>
                    <button 
                    class="px-3 text-center bg-gradient-to-br from-red-600/85 from-40% to-rose-700/85 rounded-lg transition ease-in-out hover:-traslate-y-5 hover:scale-110"
                    @click="copyTextToClipboard('herrera.cuevaso.e@gmail.com')">
                            Email
                    </button>
                </div>
                <p class="text-lg">Agende directamente una cita en mi calendario:</p>
                <a 
                class="px-3 text-center bg-gradient-to-br from-violet-600 to-sky-500 rounded-lg w-full sm:w-fit mx-auto transition ease-in-out hover:-traslate-y-5 hover:scale-110"
                href="https://calendar.app.google/toxTDDouwciXWqbb6">
                    Google Calendar
                </a>
            </div>
        </div>
    </div>

</template>

<script setup>
import { useToast } from "vue-toast-notification";

const notifier = useToast();

// Método para copiar el texto al portapapeles
const copyTextToClipboard = async (msg) => {
  try {
    // Usar la API Clipboard para copiar el texto
    await navigator.clipboard.writeText(msg);
    notifier.success(`¡Contacto copiado al portapapeles! : ${msg}`, {
        duration: 3000,
        position: 'top'
    })
  } catch (err) {
    //console.log(err)
  }
};
</script>