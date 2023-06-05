<template>
    <!-- PAGE HEADER -->
    <div class="relative md:h-[262px] md:w-[1440px] mt-[-50px] z-[-10]">
        <div class=" w-full md:h-full bg-white bg-cover bg-center">
            <div class="relative w-full h-full flex flex-col justify-center items-center bg-[#F8F8F8]">
                <div class="flex flex-col justify-center items-center gap-3 md:w-[996px] md:h-[93px] z-[1] text-[dark-1]">
                    <div class="md:w-[974px] md:h-[97px]">
                        <h1 class=" font-semibold text-[44px] text-center">
                            Favourites
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
            <div class="flex items-center justify-center">
                <H1 class=" md:text-[32px] font-normal text-dark-2">Your items</H1>
            </div>
            <div class="flex justify-between h-full md:w-[585.73px] ">
                <div class="md:w-[97px] flex items-center justify-center font-light md:text-base ">
                    <router-link to="/">Clear Cart</router-link>
                </div>
                <div class="flex justify-between h-full md:w-[461.73px] gap-3 ">
                    <div class="md:w-[237.73px] h-full">
                        <button type="button"
                            class="items-center w-full h-full rounded-md bg-primary-1 px-8 py-4 text-sm font-medium text-white focus:outline-none">Checkout</button>

                    </div>
                    <div class="md:w-[214px] h-full">
                        <button type="button"
                            class="items-center w-full h-full rounded-md border-2 border-primary-1 bg-transparent px-8 py-4 text-sm font-medium text-primary-1 hover:bg-primary-1 hover:border-0 hover:text-white focus:outline-none">Continue
                            Shopping</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="relative w-full md:h-[747px] bg-gray-4 md:rounded-[50px] sm:rounded-[20px] pt-[53px]">
            <div class="flex justify-between flex-col md:w-[1189px] md:h-[619px] mx-auto">
                <div class="flex flex-col justify-between w-full md:h-[404px] mx-auto">
                    <CartItem />
                    <CartItem />
                    <CartItem />
                </div>

                <div class="flex self-end items-center justify-center rounded-[20px] md:w-[434px] md:h-[185px] bg-white">
                    <div class="flex justify-between flex-col gap-2 md:w-[398px] md:h-[129px] ">
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
                                <p class="text-gray-5 font-normal text-[20px] leading-[16px]">Total</p>
                            </div>
                            <div class="flex flex-1 justify-end">
                                <p class="text-dark-1 font-medium text-[20px]">₦42,000.00</p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>

    </div>
</template>
   
<script lang="ts" setup>
import { computed, defineComponent, type PropType } from "vue";
import { ChevronRightIcon, HomeIcon } from '@heroicons/vue/20/solid'
import { CartItem } from '@/components/website/Shop/index'


const pages = [
    { name: 'Favourites', href: '#', current: false },
]



</script>
