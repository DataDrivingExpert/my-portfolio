<template>
    <div class="flex flex-col-reverse gap-y-2 justify-center gap-x-2 sm:flex-row">
        <div class="bg-gradient-to-tl from-[#202022] from-45% to-[#37373B] to-80% rounded-xl px-5 py-10">
            <h5 class="text-3xl font-semibold text-gray-200" v-text="title"></h5>
            <p>Institución <em class="font-medium text-sky-500" v-text="company"></em></p>
            <p>En rol de <em class="font-medium text-sky-500" v-text="position"></em></p>
            <p>Desde <em class="bg-gray-700 rounded-xl px-2" v-text="start"></em> hasta <em class="bg-gray-700 rounded-xl px-2" v-text="end"></em></p>
            <p class="font-medium text-sky-500">Descripción</p>
            <p>
                <em v-text="desc"></em>
            </p>
            <div class="flex flex-row py-1 mt-2 gap-x-2 justify-start">
                <p>Contacto referencial</p>
                <p class="font-medium text-sky-500" v-text="refEmail"></p>
                <div @click="copyTextToClipboard(refEmail)" class="h-[30px] w-[30px] p-1 rounded-lg bg-white/5 transition transform hover:-translate-y-2 hover:bg-white/20 cursor-pointer">
                    <ClipboardDocumentIcon class="h-full w-full text-white" />
                </div>
            </div>
            <div class="basis-1/4 p-5">
                <slot></slot>
            </div>
        </div>

    </div>
</template>

<script setup>
defineProps({
  title: String,
  company: String,
  position: String,
  start: String,
  end: String,
  desc: String,
  refEmail: String,
})

import { ClipboardDocumentIcon } from "@heroicons/vue/24/outline";
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