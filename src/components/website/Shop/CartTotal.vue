<template>
    <div class="flex self-end items-center justify-center rounded-[20px] w-full md:h-[185px] bg-white">
        <div class="flex justify-between flex-col gap-2 md:w-[441px] md:h-[129px] ">
            <div class="flex justify-between w-full md:h-[]">
                <div class="flex md:w-[157px] items-center">
                    <p class="text-gray-5 font-normal text-[20px] leading-[16px]">Subtotal</p>
                </div>
                <div class="flex flex-1 justify-end  ">
                    <p class="text-dark-1 font-medium text-[20px]">₦42,000.00</p>
                </div>
            </div>

            <div class="flex flex-col justify-between w-full md:h-[]">
                <div class="flex justify-between w-full">
                    <div class="md:w-[157px]">
                        <p class="text-gray-5 font-normal text-[20px]">Discount</p>
                    </div>
                    <div class="flex flex-1 justify-end">
                        <p class="text-dark-1 font-medium text-[20px]">0.00</p>
                    </div>
                </div>

                <div class="md:w-[157px]">
                    <p class="text-gray-5 font-normal text-[12px]">Have a <span
                            class="text-primary-1 font-semibold">coupon?</span></p>
                </div>
            </div>

            <div class="border-t-[1px] border-[#EBEBEB]"></div>

            <div class="flex justify-between w-full md:h-[] md:mt-2">
                <div class="md:w-[157px] items-center">
                    <p class="text-gray-5 font-normal text-[20px]">Total</p>
                </div>
                <div class="flex flex-1 justify-end">
                    <p class="text-dark-1 font-medium text-[20px]">₦42,000.00</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { MinusIcon, PlusIcon } from '@heroicons/vue/24/outline'


</script>
