<template >
    <div class=" md:w-[285px] rounded-2xl md:h-[351px] bg-white">
        <div class="max-w-sm rounded-t-2xl  overflow-hidden ">
            <div class="md:h-[210px] w-full ">
                <img class="h-full object-cover" src="@/assets/images/Corn.png" alt="">
            </div>
            <div class="flex flex-col justify-between px-4 md:h-[101px] md:mt-4">
                <div class="flex flex-col md:h-[52px] justify-between pt-0 gap-1">
                    <div class="font-normal self-start text-xl text-[#7A7A7A]">Yellow Corn</div>
                    <div class="flex justify-between items-center">
                        <p class="font-medium text-base text-[#282828]">₦800.00 <span
                                class="font-medium text-sm  text-[#BFBFBF]">/Kg</span></p>
                        <p class="font-normal text-sm  text-[#7A7A7A]">1000Kg<span
                                class="font-medium text-sm  text-[#BFBFBF]"> in Stock</span></p>

                    </div>
                </div>

                <div class=" flex gap-2">
                    <img :src="MapPinIcon" alt="">
                    <p class="font-normal text-sm  text-[#7A7A7A]">Yaba, Lagos</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import MapPinIcon from '@/assets/svg/MapPinIcon.svg'

</script>
<style lang="">
    
</style>