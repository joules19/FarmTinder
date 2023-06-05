<template>
    <div class="flex items-center w-full md:h-[120px] rounded-[20px] bg-white">
        <div class="flex justify-between md:w-[1159px] md:h-[94px] mx-auto my-auto">
            <div class="md:w-[98px] md:h-[91px]">
                <img src="@/assets/images/Rectangle3.png" alt="">
            </div>

            <div class="flex flex-col justify-between  md:w-[1039px] md:h-[94px]">
                <div class="flex items-center md:max-w-[70px] md:h-[19px]">
                    <p class="font-medium text-base text-dark-1">Onions</p>
                </div>

                <div class="flex justify-between md:w-full md:h-[43px] items-center">
                    <div class="flex md:w-[113px] h-fullitems-center">
                        <p class="font-medium text-base text-dark-1">₦800.00 <span class="text-gray-5">/Kg</span></p>
                    </div>

                    <div class="flex md:w-[319px] h-full items-center justify-between">
                        <div class="flex justify-between items-center md:w-[144px] md:h-[35px]">
                            <div
                                class="flex items-center justify-center md:h-[35px] md:w-[35px] rounded-[10px] bg-primary-1/[0.16] ">
                                <MinusIcon class="text-primary-1 md:h-[26px] md:w-[26px] " />
                            </div>

                            <div
                                class="flex items-center justify-center md:h-[35px] p-2 md:w-[62px] border-[1px] border-[#D0D8D5] rounded-[10px]">
                                <p class="font-normal text-base text-gray-1">20</p>
                            </div>

                            <div
                                class="flex items-center justify-center md:h-[35px] md:w-[35px] rounded-[10px] bg-primary-1/[0.16] ">
                                <PlusIcon class="text-primary-1 md:h-[26px] md:w-[26px] " />
                            </div>

                        </div>
                        <div class="flex items-center md:w-[112px] h-full">
                            <p class="font-medium text-xl text-dark-1">₦16,000.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { MinusIcon, PlusIcon } from '@heroicons/vue/24/outline'


</script>
