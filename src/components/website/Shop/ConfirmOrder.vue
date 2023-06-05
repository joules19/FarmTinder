<template>
    <div class="flex md:w-[634px] md:h-[528px] sm:rounded-[20px] bg-white p-[40px]">
        <div class="flex flex-col justify-between md:w-[554px] md:h-[367px]">
            <div class="md:mb-[24px]">
                <p class="font-bold text-sm text-dark-1">Please confirm your order</p>
            </div>

            <div class="flex flex-col justify-between w-full md:h-[310px]">
                <div class="relative w-full md:h-[34px] flex justify-between">
                    <div class="absolute bottom-0 h-full md:w-[353px] left-[17%] flex border-b-[1px] border-[#D9D9D9]/60">
                    </div>
                    <p class="font-normal text-sm text-[#000]">Payment Method</p>
                    <p class="font-light text-sm text-dark-1">Card Payment</p>
                </div>
                <div class="relative w-full md:h-[34px] flex justify-between">
                    <div class="absolute bottom-0 h-full md:w-[353px] left-[17%] flex border-b-[1px] border-[#D9D9D9]/60">
                    </div>
                    <p class="font-normal text-sm text-[#000]">Card Number</p>
                    <p class="font-light text-sm text-dark-1">Ending with 5763</p>
                </div>

                <div class="relative w-full md:h-[34px] flex justify-between">
                    <div class="absolute bottom-0 h-full md:w-[353px] left-[17%] flex border-b-[1px] border-[#D9D9D9]/60">
                    </div>
                    <p class="font-normal text-sm text-[#000]">Card Exp. Date</p>
                    <p class="font-light text-sm text-dark-1">12/28</p>
                </div>

                <div class="relative w-full md:h-[34px] flex justify-between">
                    <div class="absolute bottom-0 h-full md:w-[353px] left-[17%] flex border-b-[1px] border-[#D9D9D9]/60">
                    </div>
                    <p class="font-normal text-sm text-[#000]">Delivery Type</p>
                    <p class="font-light text-sm text-dark-1">Home Delivery</p>
                </div>

                <div class="relative w-full md:h-[34px] flex justify-between">
                    <div class="absolute bottom-0 h-full md:w-[353px] left-[17%] flex border-b-[1px] border-[#D9D9D9]/60">
                    </div>
                    <p class="font-normal text-sm text-[#000]">Delivery Address</p>
                    <p class="font-light text-sm text-dark-1">No. 45 Ademola Crescent</p>
                </div>

                <div class="relative w-full md:h-[34px] flex justify-between">
                    <div class="absolute bottom-0 h-full md:w-[353px] left-[17%] flex border-b-[1px] border-[#D9D9D9]/60">
                    </div>
                    <p class="font-normal text-sm text-[#000]">State</p>
                    <p class="font-light text-sm text-dark-1">Lagos</p>
                </div>

                <div class="relative w-full md:h-[34px] flex justify-between">
                    <div class="absolute bottom-0 h-full md:w-[353px] left-[17%] flex border-b-[1px] border-[#D9D9D9]/60">
                    </div>
                    <p class="font-normal text-sm text-[#000]">City</p>
                    <p class="font-light text-sm text-dark-1">Yaba</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, defineComponent, type PropType, ref } from "vue";
import { CheckIcon, MapPinIcon } from '@heroicons/vue/24/outline';


</script>

<style scoped></style>
