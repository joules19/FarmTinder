<template>
    <!-- PAGE HEADER -->
    <div class="relative md:h-[262px] md:w-[1440px] mt-[-50px] z-[-10]">
        <div class=" w-full md:h-full bg-white bg-cover bg-center">
            <div class="relative w-full h-full flex flex-col justify-center items-center bg-[#F8F8F8]">
                <div class="flex flex-col justify-center items-center gap-3 md:w-[996px] md:h-[93px] z-[1] text-[dark-1]">
                    <div class="md:w-[974px] md:h-[97px]">
                        <h1 class=" font-semibold text-[44px] text-center">
                            Checkout
                        </h1>
                    </div>

                    <div class="flex justify-center w-[full] h-[19px]">
                        <nav class="flex" aria-label="Breadcrumb">
                            <ol role="list" class="flex items-center space-x-4 ">
                                <li>
                                    <div>
                                        <router-link to="#" class="font-normal text-base text-[dark-1] hover:text-gray-200">
                                            <span class="">FarmTinder</span>
                                        </router-link>
                                    </div>
                                </li>
                                <li v-for="page in pages" :key="page.name">
                                    <div class="flex items-center">
                                        <ChevronRightIcon class="h-5 w-5 flex-shrink-0 text-[dark-1]" aria-hidden="true" />
                                        <router-link to="page.href"
                                            class="ml-4 text-base font-medium text-[dark-1] hover:text-gray-200"
                                            :aria-current="page.current ? 'page' : undefined">{{ page.name }}</router-link>
                                    </div>
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Cart -->
    <div class="md:w-[1280px] md:h-[846px] md:mt-[84px] md:mb-[161px] mx-auto ">
        <div class="flex justify-between md:ml-2 md:w-[1272px] md:h-[59.5px] md:mb-[40px]">
            <div class="flex justify-between items-center md:w-[467px] md:h-[24px] self-center">
                <p class=" md:text-[18px] font-normal text-primary-1">Delivery</p>
                <p class=" md:text-[15px] font-normal text-gray-5">- - - - - - -</p>
                <p class=" md:text-[18px] font-normal text-gray-1">Payment</p>
                <p class=" md:text-[15px] font-normal text-gray-5">- - - - - - -</p>
                <p class=" md:text-[18px] font-normal text-gray-1">Confirm Order</p>
            </div>
            <div class="flex justify-between h-full md:w-[471.73px]">
                <div class="md:w-[237.73px] h-full">
                    <button @click="setCheckoutStage('payment')" type="button"
                        class="items-center w-full h-full rounded-md bg-primary-1 px-8 py-4 text-sm font-medium text-white focus:outline-none">Continue
                        to payment</button>

                </div>
                <div class="md:w-[214px] h-full">
                    <button type="button"
                        class="items-center w-full h-full rounded-md border-2 border-primary-1 bg-transparent px-8 py-4 text-sm font-medium text-primary-1 hover:bg-primary-1 hover:border-0 hover:text-white focus:outline-none">Continue
                        Shopping</button>
                </div>
            </div>
        </div>
        <div class="relative w-full md:h-[747px] bg-gray-4 md:rounded-[50px] sm:rounded-[20px] pt-[53px]">
            <div class="flex justify-between md:w-[1191px] md:h-[528px] mx-auto sm:rounded-[20px]">

                <!-- COMPONENT THAT HANDLES THE DELIVERY METHOD-->
                <DeliveryMethod v-if="checkoutStage === 'delivery'" />

                <!-- COMPONENT THAT HANDLES THE PAYMENT METHOD-->
                <PaymentMethod v-if="checkoutStage === 'payment'" />

                <!-- COMPONENT THAT HANDLES THE ORDER CONFIRMATION -->
                <ConfirmOrder v-if="checkoutStage === 'confirm'" />

                <!-- MINI CART ON THE CHECKOUT PAGE -->
                <div class="flex flex-col justify-between md:w-[477px] h-full">
                    <div class="">
                        <p class="text-dark-1 font-bold text-base">Order Summary</p>
                    </div>
                    <CartItemSm />
                    <CartItemSm />
                    <CartItemSm />

                    <CartTotal />
                </div>
            </div>
        </div>

    </div>
</template>
   
<script lang="ts" setup>
import { computed, defineComponent, type PropType, ref, type Ref, watch } from "vue";
import { ChevronRightIcon, HomeIcon } from '@heroicons/vue/20/solid'
import { CartItemSm, CartTotal, DeliveryMethod, PaymentMethod, ConfirmOrder } from '@/components/website/Shop/index'

const pages = [
    { name: 'Cart', href: '#', current: false },
    { name: 'Checkout', href: '#', current: false },
]


type CheckoutStage = 'delivery' | 'payment' | 'confirm';

const checkoutStage = ref<CheckoutStage>("delivery");

const setCheckoutStage = (stage: CheckoutStage) => {
    checkoutStage.value = stage;
}

watch

</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
