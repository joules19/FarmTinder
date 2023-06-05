<template>
    <!-- PAGE HEADER -->
    <div class="relative md:h-[180px] md:w-[1440px] mt-[-50px] z-[-10]">
        <div class=" w-full md:h-full bg-white bg-cover bg-center">
            <div class="relative w-full h-full flex flex-col justify-center items-center bg-[#F8F8F8]">
                <div class="flex flex-col justify-center items-center gap-3 md:w-[996px] md:h-[93px] z-[1] text-[dark-1]">
                    <div class="md:w-[974px] md:h-[97px]">
                        <h1 class=" font-semibold mt-6 text-[40px] text-center">
                            Order Completed
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="flex items-center md:w-[1280px] md:h-[747px] md:mt-[84px] md:mb-[161px] mx-auto bg-gray-4 rounded-[50px]">
        <div class="flex items-center md:w-[1191px] md:h-[635px] mx-auto rounded-[20px] bg-white">
            <div class="flex flex-col justify-between items-center md:w-[1111px] md:h-[451.5px] mx-auto">
                <div class="flex items-center justify-center md:w-[1111px] md:h-[191px] w-full">
                    <div class="flex items-center justify-center md:w-[189px] md:h-[191px] rounded-full bg-primary-5">
                        <CheckIcon class="text-white md:w-[78px] md:h-[78px]" />
                    </div>
                </div>

                <div class="flex flex-col items-center justify-between md:w-[414px] md:h-[121px]">
                    <h1 class="text-[32px] font-semibold text-dark-1">Order Successful</h1>
                    <p class="text-[16px] font-normal text-dark-1 text-center leading-[24px]">Your order has been completed
                        and is being
                        processed. you
                        can track your order with the order ID <span
                            class="text-[16px] font-semibold text-primary-1">#2345594</span> </p>



                </div>

                <div class="flex justify-between md:w-[471.73px] md:h-[59.5px]">
                    <div class="md:w-[237.73px] h-full">
                        <button type="button"
                            class="items-center w-full h-full rounded-md bg-primary-1 px-8 py-4 text-sm font-medium text-white focus:outline-none">Continue
                            Shopping</button>

                    </div>
                    <div class="md:w-[214px] h-full">
                        <button type="button"
                            class="items-center w-full h-full rounded-md border-2 border-primary-1 bg-transparent px-8 py-4 text-sm font-medium text-primary-1 hover:bg-primary-1 hover:border-0 hover:text-white focus:outline-none">Track
                            Order</button>
                    </div>
                </div>
            </div>



        </div>
    </div>
</template>
   
<script lang="ts" setup>
import { computed, defineComponent, type PropType, ref, type Ref, watch } from "vue";
import { ChevronRightIcon, HomeIcon, } from '@heroicons/vue/20/solid'
import { CheckIcon, } from '@heroicons/vue/24/outline'

import { CartItemSm, CartTotal, DeliveryMethod, PaymentMethod, ConfirmOrder } from '@/components/website/Shop/index'

</script>
