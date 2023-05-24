<template>
    <div class="relative md:h-[689px] md:w-[1440px]">
        <div class="mt-[-80px] w-full md:h-full bg-[url('@/assets/images/Hero-img.png')] bg-cover bg-center">
            <div class="relative w-full h-full flex flex-col justify-center items-center bg-[#4C5452]/40">
                <div class="flex flex-col justify-between w-[996px] h-[290px] z-[1]">

                    <div class="flex flex-col gap-2 justify-between text-white w-full h-[148px]  mx-auto">
                        <div class="w-full h-[97px]  ">
                            <h1 class=" font-semibold text-[80px] text-center">
                                Savor Nature's Bounty
                            </h1>
                        </div>

                        <div class="w-full h-[39px] b">
                            <h3 class=" font-semibold text-[32px] text-center">
                                Shop Farm-Fresh Goodness Online
                            </h3>
                        </div>
                    </div>

                    <div class="flex items-center justify-center md:h-[78px]">
                        <div class="relative flex flex-1 mt-1 rounded-md shadow-sm ">
                            <input type="text"
                                class="block w-full h-[78px] opacity-90 pl-[32px] pr-[72px] py-[21px] rounded-[32px] text-[#373737] text-[22px] focus:outline-none focus:ring-1 focus:ring-inset focus:ring-[#008067]"
                                placeholder="What are you looking for?" />
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-[32px]">
                                <img :src="SearchIcon" />
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>

    </div>
    <!-- ELLIPSES -->
    <div class="flex relative mt-[-80px]">
        <div class="md:w-[405px] md:h-[202px] absolute top-[10px]">
            <img src="@/assets/images/Ellipse 1.png" alt="">
        </div>
        <div class="md:w-[405px] md:h-[202px]  absolute left-[315px] top-[35px]">
            <img src="@/assets/images/Ellipse 2.png" alt="">
        </div>
        <div class="md:w-[405px] md:h-[223px]  absolute top-[-20px] left-[654px] ">
            <img src="@/assets/images/Ellipse 4.png" alt="">
        </div>
        <div class="md:w-[405px] md:h-[202px]  absolute left-[1035px] top-[-22px]">
            <img src="@/assets/images/Ellipse 5.png" alt="">
        </div>
    </div>


    <!-- Product Show Case -->
    <div class="flex flex-col relative md:mt-[150px] mx-auto md:w-[1280px] md:h-[1440px]">
        <ProductShowcase title="Popular On FarmTinder" btnTitle="See More" />
    </div>

    <!-- SECTION C -->
    <div class="flex relative gap-2 p-[70px] justify-between items-center md:mt-[129px] md:w-[1440px] md:h-[595px]">
        <div class="absolute top-[102px] left-[91px]">
            <img src="@/assets/images/Rectangle 5.png" alt="">
        </div>

        <!-- SMALL ELLIPSES -->
        <div class="md:w-[12px] md:h-[72px] flex flex-col justify-between absolute md:top-[262px] md:left-[625px] ">
            <div class="bg-[#01A985] w-full rounded-full md:h-[12px]"></div>
            <div class="bg-[#E1F6F0] w-full rounded-full md:h-[12px]"></div>
            <div class="bg-[#E1F6F0] w-full rounded-full md:h-[12px]"></div>
            <div class="bg-[#E1F6F0] w-full rounded-full md:h-[12px]"></div>
        </div>

        <!-- IMAGE SLIDER -->
        <div class="flex flex-col items-start md:w-[684px] md:h-[546px]  absolute right-[91px]">
            <div
                class="flex rounded-[40px] pr-[16px] justify-between absolute top-0 self-center z-1 md:w-[581px] bg-white md:h-[242px] opacity-50">
                <div class="md:w-[270.5px] md:h-full ">
                    <img class="h-full w-full object-cover rounded-l-[50px]" src="@/assets/images/Corn.png" alt="">
                </div>
                <div class="flex flex-col py-2  justify-between md:w-[270.5px] md:h-full">
                    <h2 class="block text-[20px] text-[#282828]">Yellow Corn</h2>
                    <div class="md:w-full md:h-[60px]  mt-[-16px] ">
                        <p class="text-[#7A7A7A] font-normal text-[10px]">Indulge in the golden delight of our
                            yellow
                            corn,
                            a naturally
                            sweet and flavorful treat harvested fresh from the fields. Indulge in the golden delight of our
                            yellow corn, a naturally sweet and flavorful treat harvested fresh from the fields. </p>
                    </div>

                    <div class="flex flex-col md:w-full md:h-[78px] gap-4 justify-between ">
                        <div class="flex flex-col gap-1">
                            <div class="flex justify-between">
                                <div class="flex gap-1 items-center">
                                    <div class="w-[14px] h-[14px] text-[#7A7A7A]">
                                        <img :src="UserIcon" alt="">
                                    </div>
                                    <p class="text-[#7A7A7A] font-normal text-[12px]">Sammy Doe Farms</p>
                                </div>

                                <div class="flex gap-1 items-start">
                                    <div class="w-[15px] h-[15px] self-center">
                                        <img :src="StarIcon" alt="">
                                    </div>
                                    <p class="text-[#7A7A7A] font-normal text-[14px]">4.5</p>
                                </div>
                            </div>

                            <div class="flex items-start gap-1">
                                <div class="w-[14px] h-[14px] self-center">
                                    <img :src="GreyMapPinIcon" alt="">
                                </div>
                                <p class="text-[#7A7A7A] font-normal text-[12px]">Yaba, Lagos</p>
                            </div>
                        </div>


                        <div class="flex justify-between items-center">
                            <p class="font-medium text-sm text-[#282828]">₦800.00 <span
                                    class="font-medium text-xs  text-[#BFBFBF]">/Kg</span></p>
                            <p class="font-normal text-xs  text-[#7A7A7A]">1000Kg<span
                                    class="font-medium text-xs  text-[#BFBFBF]"> in Stock</span></p>

                        </div>


                    </div>
                </div>


            </div>

            <div
                class="flex rounded-[50px] pr-[16px] justify-between md:w-[684px] shadow-sm absolute top-[136px] bg-white self-center md:h-[274px] z-50">

                <!-- ICONS SECTION -->
                <div class="md:w-[270.5px] md:h-full relative">
                    <div
                        class="absolute flex md:left-[21px] md:top-[19.74px] md:w-[102px] md:h-[60.37px] justify-between items-center">
                        <div
                            class="md:w-[52px] md:h-[52px] rounded-full bg-white flex items-center justify-center text-[#01A985] hover:bg-[#01A985] hover:text-white">
                            <ShoppingCartIcon class="w-[26px] h-[26px]" />
                        </div>
                        <div
                            class="md:w-[35px] md:h-[35px] rounded-full bg-white flex items-center justify-center text-[#01A985] hover:bg-[#01A985] hover:text-white">
                            <HeartIcon class="w-[22px] h-[22px]" />
                        </div>
                    </div>
                    <img class="h-full w-full object-cover rounded-l-[50px]" src="@/assets/images/Corn.png" alt="">
                </div>


                <div class="flex flex-col py-4 pr-[18px] rounded-r-[50px] justify-between md:w-[373px] md:h-[274px]">
                    <h2 class="block text-[24px] text-[#282828]">Yellow Corn</h2>
                    <div class="md:w-full md:h-[80px] ">
                        <p class="text-[#7A7A7A] font-normal text-[12px]">Indulge in the golden delight of our
                            yellow
                            corn,
                            a naturally
                            sweet and flavorful treat harvested fresh from the fields. Indulge in the golden delight of our
                            yellow corn, a naturally sweet and flavorful treat harvested fresh from the fields. </p>
                    </div>

                    <div class="flex flex-col md:w-full md:h-[82px] gap-4 justify-between ">
                        <div class="flex flex-col gap-1">
                            <div class="flex justify-between">
                                <div class="flex gap-1 items-center">
                                    <div class="w-[16px] h-[16px] text-[#7A7A7A]">
                                        <img :src="UserIcon" alt="">
                                    </div>
                                    <p class="text-[#7A7A7A] font-normal text-[14px]">Sammy Doe Farms</p>
                                </div>

                                <div class="flex gap-1 items-start">
                                    <div class="w-[17px] h-[17px] self-center">
                                        <img :src="StarIcon" alt="">
                                    </div>
                                    <p class="text-[#7A7A7A] font-normal text-[14px]">4.5</p>
                                </div>
                            </div>

                            <div class="flex items-start gap-1">
                                <div class="w-[16px] h-[16px] self-center">
                                    <img :src="GreyMapPinIcon" alt="">
                                </div>
                                <p class="text-[#7A7A7A] font-normal text-[14px]">Yaba, Lagos</p>
                            </div>
                        </div>


                        <div class="flex justify-between items-center">
                            <p class="font-medium text-base text-[#282828]">₦800.00 <span
                                    class="font-medium text-sm  text-[#BFBFBF]">/Kg</span></p>
                            <p class="font-normal text-sm  text-[#7A7A7A]">1000Kg<span
                                    class="font-medium text-sm  text-[#BFBFBF]"> in Stock</span></p>

                        </div>


                    </div>
                </div>


            </div>

            <div
                class="flex rounded-[40px] pr-[16px] justify-between absolute bottom-0 self-center z-1 md:w-[581px] bg-white md:h-[242px] opacity-50">
                <div class="md:w-[270.5px] md:h-full ">
                    <img class="h-full w-full object-cover rounded-l-[50px]" src="@/assets/images/Corn.png" alt="">
                </div>
                <div class="flex flex-col py-2  justify-between md:w-[270.5px] md:h-full">
                    <h2 class="block text-[20px] text-[#282828]">Yellow Corn</h2>
                    <div class="md:w-full md:h-[60px]  mt-[-16px] ">
                        <p class="text-[#7A7A7A] font-normal text-[10px]">Indulge in the golden delight of our
                            yellow
                            corn,
                            a naturally
                            sweet and flavorful treat harvested fresh from the fields. Indulge in the golden delight of our
                            yellow corn, a naturally sweet and flavorful treat harvested fresh from the fields. </p>
                    </div>

                    <div class="flex flex-col md:w-full md:h-[78px] gap-4 justify-between ">
                        <div class="flex flex-col gap-1">
                            <div class="flex justify-between">
                                <div class="flex gap-1 items-center">
                                    <div class="w-[14px] h-[14px] text-[#7A7A7A]">
                                        <img :src="UserIcon" alt="">
                                    </div>
                                    <p class="text-[#7A7A7A] font-normal text-[12px]">Sammy Doe Farms</p>
                                </div>

                                <div class="flex gap-1 items-start">
                                    <div class="w-[15px] h-[15px] self-center">
                                        <img :src="StarIcon" alt="">
                                    </div>
                                    <p class="text-[#7A7A7A] font-normal text-[14px]">4.5</p>
                                </div>
                            </div>

                            <div class="flex items-start gap-1">
                                <div class="w-[14px] h-[14px] self-center">
                                    <img :src="GreyMapPinIcon" alt="">
                                </div>
                                <p class="text-[#7A7A7A] font-normal text-[12px]">Yaba, Lagos</p>
                            </div>
                        </div>


                        <div class="flex justify-between items-center">
                            <p class="font-medium text-sm text-[#282828]">₦800.00 <span
                                    class="font-medium text-xs  text-[#BFBFBF]">/Kg</span></p>
                            <p class="font-normal text-xs  text-[#7A7A7A]">1000Kg<span
                                    class="font-medium text-xs  text-[#BFBFBF]"> in Stock</span></p>

                        </div>


                    </div>
                </div>


            </div>

        </div>
    </div>

    <!-- SECTION D -->
    <div class=" flex flex-col md:mt-[312px] justify-between md:w-[1280px] mx-auto md:h-[2318px]">
        <ProductShowcase title="From Popular Sellers" btnTitle="See More" />

        <div
            class="relative flex justify-between gap-6 bg-[#F8F8F8] items-center w-full md:h-[680px]  md:mt-14 rounded-[20px] mx-auto">
            <div class="flex flex-col justify-between md:w-[536px] md:h-[529.5px] md:ml-[99px]">
                <h1 class="font-medium text-[40px] text-[#282828]">Opportunity for every Farmer on Farm Tinder</h1>

                <div class="w-full flex flex-col justify-between gap-2 md:h-[226px]">
                    <p class=" font-normal text-base text-[#7A7A7A]">Discover a world of opportunity as a farmer on our
                        platform.
                        With us, you have the chance to transform
                        your agricultural prowess into a lucrative business. </p>

                    <p class=" font-normal text-base text-[#7A7A7A]">Become a seller and tap into a wide customer base that
                        values
                        fresh, locally sourced produce. Our user-friendly interface and robust tools make it easy to
                        showcase
                        your crops, connect with buyers, and manage orders effortlessly. </p>

                    <p class=" font-normal text-base text-[#7A7A7A]"> Join our community today and unlock the potential to
                        earn
                        money while doing what you love—farming. </p>
                </div>

                <div class="flex justify-between  md:w-[463.92px] md:h-[59.5px]">
                    <button type="button"
                        class="items-center md:w-[237.73px] h-full rounded-md bg-[#008067] px-4 text-sm font-medium text-white hover:bg-[#008067] hover:border-0 hover:text-white focus:outline-none">Become
                        a Seller</button>
                    <button type="button"
                        class="items-center md:w-[186.19px] h-full rounded-md border-2 border-[#008067] px-4 text-sm font-medium text-[#008067] hover:bg-[#008067] hover:border-0 hover:text-white focus:outline-none">Discover
                        More</button>
                </div>
            </div>``
            <div class="flex justify-center items-center md:w-[492px] md:h-[661px] absolute md:top-[163px] md:right-[88px]">
                <img class="w-full flex self-center md:h-full object-cover " src="@/assets/images/Rectangle 7.png" alt="">
            </div>
        </div>
    </div>
</template>
   
<script lang="ts" setup>
import { computed, defineComponent, type PropType } from "vue";
import { ShoppingCartIcon, } from '@heroicons/vue/24/outline';
import { HeartIcon, } from '@heroicons/vue/24/outline';

import SearchIcon from '@/assets/svg/SearchIcon.svg';
import UserIcon from '@/assets/svg/UserIcon.svg';
import StarIcon from '@/assets/svg/StarIcon.svg';
import GreenCartIcon from '@/assets/svg/GreenCartIcon.svg';
import GreyMapPinIcon from '@/assets/svg/GreyMapPinIcon.svg';
import ProductShowcase from '@/components/website/ProductShowcase.vue'


import ProductCard from '@/components/website/Cards/ProductCard.vue';

</script>
