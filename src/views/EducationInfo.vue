<template>
    <div class="relative w-full h-80">
        <video
            src="@/assets/video/Nicola_Narracci.mp4"
            autoplay
            loop
            muted
            playsinline
            class="w-full h-full object-cover opacity-80"
            ></video>
        <div class="absolute flex flex-col basis-4/4 md:basis-2/4 left-5 bottom-5 bg-black/45 rounded-xl px-10 py-5">
            <h5 class="text-2xl sm:text-5xl font-semibold mb-5">Educación continua</h5>
            <p class="text-sm leading-7 sm:text-base">Me encuentro comprometido con la excelencia. Amo aprender, porque me apasiona lo que hago.</p>
        </div>
    </div>
    <div class="flex flex-col gap-y-2 m-2">
        <h5 class="text-2xl sm:text-3xl font-semibold text-center my-5">Formación académica</h5>
        <EducationCard
            grade="Ingeniero Civil en Informática"
            inst="Universidad Autónoma de Chile"
            start="03/2020"
            end="08/2025"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. In esse ex fuga id eos autem maiores accusamus, aut numquam. Repellat molestiae nemo repudiandae dicta. Voluptas dolore explicabo cumque. Deleniti, omnis."
        />
        <h5 class="text-3xl font-semibold text-center my-5">Certificaciones</h5>
        <EducationCard
            grade="Mathematics and Statistics for Machine Learning Specialization"
            inst="Luis Serrano - DeepLearning.ai"
            start="10/2024"
            end="03/2025"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. In esse ex fuga id eos autem maiores accusamus, aut numquam. Repellat molestiae nemo repudiandae dicta. Voluptas dolore explicabo cumque. Deleniti, omnis."
        />
        <EducationCard
            grade="SCRUM Foundation Professional Certificate (SFPC)"
            inst="Certiprof"
            start="10/2024"
            end="03/2025"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. In esse ex fuga id eos autem maiores accusamus, aut numquam. Repellat molestiae nemo repudiandae dicta. Voluptas dolore explicabo cumque. Deleniti, omnis."
        />
        <EducationCard
            grade="Data Engineering Foundations"
            inst="LinkedIn Learning"
            start="12/2024"
            end="12/2024"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. In esse ex fuga id eos autem maiores accusamus, aut numquam. Repellat molestiae nemo repudiandae dicta. Voluptas dolore explicabo cumque. Deleniti, omnis."
        />
        
    </div>
</template>

<script setup>
    import EducationCard from '@/components/EducationCard.vue'
</script>