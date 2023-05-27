<template>
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
                    <h2 class="block text-[20px] text-dark-1">Yellow Corn</h2>
                    <div class="md:w-full md:h-[60px]  mt-[-16px] ">
                        <p class="text-gray-1 font-normal text-[10px]">Indulge in the golden delight of our
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
                                    <div class="w-[14px] h-[14px] text-gray-1">
                                        <img :src="UserIcon" alt="">
                                    </div>
                                    <p class="text-gray-1 font-normal text-[12px]">Sammy Doe Farms</p>
                                </div>

                                <div class="flex gap-1 items-start">
                                    <div class="w-[15px] h-[15px] self-center">
                                        <img :src="StarIcon" alt="">
                                    </div>
                                    <p class="text-gray-1 font-normal text-[14px]">4.5</p>
                                </div>
                            </div>

                            <div class="flex items-start gap-1">
                                <div class="w-[14px] h-[14px] self-center">
                                    <img :src="GreyMapPinIcon" alt="">
                                </div>
                                <p class="text-gray-1 font-normal text-[12px]">Yaba, Lagos</p>
                            </div>
                        </div>


                        <div class="flex justify-between items-center">
                            <p class="font-medium text-sm text-dark-1">₦800.00 <span
                                    class="font-medium text-xs  text-[#BFBFBF]">/Kg</span></p>
                            <p class="font-normal text-xs  text-gray-1">1000Kg<span
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
                            class="md:w-[52px] md:h-[52px] rounded-full bg-white flex items-center justify-center text-primary-1 hover:bg-[#01A985] hover:text-white">
                            <ShoppingCartIcon class="w-[26px] h-[26px]" />
                        </div>
                        <div
                            class="md:w-[35px] md:h-[35px] rounded-full bg-white flex items-center justify-center text-primary-1 hover:bg-[#01A985] hover:text-white">
                            <HeartIcon class="w-[22px] h-[22px]" />
                        </div>
                    </div>
                    <img class="h-full w-full object-cover rounded-l-[50px]" src="@/assets/images/Corn.png" alt="">
                </div>


                <div class="flex flex-col py-4 pr-[18px] rounded-r-[50px] justify-between md:w-[373px] md:h-[274px]">
                    <h2 class="block text-[24px] text-dark-1">Yellow Corn</h2>
                    <div class="md:w-full md:h-[80px] ">
                        <p class="text-gray-1 font-normal text-[12px]">Indulge in the golden delight of our
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
                                    <div class="w-[16px] h-[16px] text-gray-1">
                                        <img :src="UserIcon" alt="">
                                    </div>
                                    <p class="text-gray-1 font-normal text-[14px]">Sammy Doe Farms</p>
                                </div>

                                <div class="flex gap-1 items-start">
                                    <div class="w-[17px] h-[17px] self-center">
                                        <img :src="StarIcon" alt="">
                                    </div>
                                    <p class="text-gray-1 font-normal text-[14px]">4.5</p>
                                </div>
                            </div>

                            <div class="flex items-start gap-1">
                                <div class="w-[16px] h-[16px] self-center">
                                    <img :src="GreyMapPinIcon" alt="">
                                </div>
                                <p class="text-gray-1 font-normal text-[14px]">Yaba, Lagos</p>
                            </div>
                        </div>


                        <div class="flex justify-between items-center">
                            <p class="font-medium text-base text-dark-1">₦800.00 <span
                                    class="font-medium text-sm  text-[#BFBFBF]">/Kg</span></p>
                            <p class="font-normal text-sm  text-gray-1">1000Kg<span
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
                    <h2 class="block text-[20px] text-dark-1">Yellow Corn</h2>
                    <div class="md:w-full md:h-[60px]  mt-[-16px] ">
                        <p class="text-gray-1 font-normal text-[10px]">Indulge in the golden delight of our
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
                                    <div class="w-[14px] h-[14px] text-gray-1">
                                        <img :src="UserIcon" alt="">
                                    </div>
                                    <p class="text-gray-1 font-normal text-[12px]">Sammy Doe Farms</p>
                                </div>

                                <div class="flex gap-1 items-start">
                                    <div class="w-[15px] h-[15px] self-center">
                                        <img :src="StarIcon" alt="">
                                    </div>
                                    <p class="text-gray-1 font-normal text-[14px]">4.5</p>
                                </div>
                            </div>

                            <div class="flex items-start gap-1">
                                <div class="w-[14px] h-[14px] self-center">
                                    <img :src="GreyMapPinIcon" alt="">
                                </div>
                                <p class="text-gray-1 font-normal text-[12px]">Yaba, Lagos</p>
                            </div>
                        </div>


                        <div class="flex justify-between items-center">
                            <p class="font-medium text-sm text-dark-1">₦800.00 <span
                                    class="font-medium text-xs  text-[#BFBFBF]">/Kg</span></p>
                            <p class="font-normal text-xs  text-gray-1">1000Kg<span
                                    class="font-medium text-xs  text-[#BFBFBF]"> in Stock</span></p>

                        </div>


                    </div>
                </div>


            </div>

        </div>
    </div>
</template>

<script lang="ts" setup>
import { ShoppingCartIcon, } from '@heroicons/vue/24/outline';
import { HeartIcon, } from '@heroicons/vue/24/outline';
import UserIcon from '@/assets/svg/UserIcon.svg';
import StarIcon from '@/assets/svg/StarIcon.svg';
import GreyMapPinIcon from '@/assets/svg/GreyMapPinIcon.svg';
</script>