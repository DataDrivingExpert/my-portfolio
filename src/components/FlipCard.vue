<template>
    <Swiper
        :modules="[EffectFlip]"
        :effect="'flip'"
        :grab-cursor="true"
        :loop="true"
        class="w-full h-full max-w-[350px] max-h-[350px] mx-auto"
    >
        <swiper-slide class="flex justify-center items-center w-full h-full">
            <div class="bg-gradient-to-tl from-[#3F3F40] from-45% to-[#F2F2F2] to-95% h-full rounded-md p-2">
                <img 
                    src="/img/street_nout_gons.jpg" 
                    alt="Atardecer en la carretera"
                    class="w-full h-full object-cover rounded-lg"
                />    
            </div>
        </swiper-slide>
        <swiper-slide class="bg-gradient-to-tl from-[#202022] from-45% to-[#37373B] to-80% rounded-lg">
            <div class="p-5 rounded-lg items-center justify-center text-sm md:text-base text-justify">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore delectus rerum dolore maiores dolorum consequuntur, quibusdam dolorem voluptate assumenda libero et aspernatur cupiditate iste officiis debitis, laudantium aliquam eos veniam!
                </p>
            </div>     
        </swiper-slide>
    </Swiper>
</template>

<script setup>
    import { Swiper, SwiperSlide } from 'swiper/vue'
    import { EffectFlip } from 'swiper/modules'
    import 'swiper/css'
    import 'swiper/css/effect-flip'
</script>
