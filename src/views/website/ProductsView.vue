<template>
    <!-- PAGE HEADER -->
    <div class="relative md:h-[358px] md:w-[1440px] mt-[-90px] z-[-10]">
        <div class=" w-full md:h-full bg-[url('@/assets/images/Rectangle1.png')] bg-cover bg-center">
            <div class="relative w-full h-full flex flex-col justify-center items-center bg-[#4C5452]/40">
                <div class="flex flex-col justify-center items-center gap-4 w-[996px] h-[290px] z-[1] text-white">
                    <div class="md:w-[974px] md:h-[97px]">
                        <h1 class=" font-semibold text-[80px] text-center">
                            Product
                        </h1>
                    </div>

                    <div class="flex justify-center w-[full] h-[19px]">
                        <nav class="flex" aria-label="Breadcrumb">
                            <ol role="list" class="flex items-center space-x-4 ">
                                <li>
                                    <div>
                                        <a href="#" class="text-white hover:text-gray-200">
                                            <span class="">FarmTinder</span>
                                        </a>
                                    </div>
                                </li>
                                <li v-for="page in pages" :key="page.name">
                                    <div class="flex items-center">
                                        <ChevronRightIcon class="h-5 w-5 flex-shrink-0 text-text-white"
                                            aria-hidden="true" />
                                        <a :href="page.href" class="ml-4 text-sm font-medium text-white hover:text-gray-200"
                                            :aria-current="page.current ? 'page' : undefined">{{ page.name }}</a>
                                    </div>
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
   
<script lang="ts" setup>
import { computed, defineComponent, type PropType } from "vue";
import { ShoppingCartIcon, MagnifyingGlassIcon } from '@heroicons/vue/24/outline';
import { HeartIcon, } from '@heroicons/vue/24/outline';
import { ChevronRightIcon, HomeIcon } from '@heroicons/vue/20/solid'
//import SearchIcon from '@/assets/svg/SearchIcon.svg';
import FilterIcon from '@/assets/svg/FilterIcon.svg';
import StarIcon from '@/assets/svg/StarIcon.svg';
import GreenCartIcon from '@/assets/svg/GreenCartIcon.svg';
import GreyMapPinIcon from '@/assets/svg/GreyMapPinIcon.svg';
import ProductShowcase from '@/components/website/Homepage/ProductShowcase.vue.js'


import ProductCard from '@/components/website/Cards/ProductCard.vue';

const pages = [
    { name: 'Shop', href: '#', current: false },
    { name: 'Yellow Corn', href: '#', current: false },
]



</script>
