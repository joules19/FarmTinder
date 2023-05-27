<template>
    <div class=" flex flex-col md:mt-[312px] md:w-[1280px] mx-auto md:h-[2318px]">
        <ProductShowcase title="From Popular Sellers" btnTitle="See More" />

        <div
            class="relative flex justify-between gap-6 bg-[#F8F8F8] items-center w-full md:h-[680px]  md:mt-[120px] rounded-[20px] mx-auto">
            <div class="flex flex-col justify-between md:w-[536px] md:h-[529.5px] md:ml-[99px]">
                <h1 class="font-medium text-[40px] text-dark-1">Opportunity for every Farmer on Farm Tinder</h1>

                <div class="w-full flex flex-col justify-between gap-2 md:h-[226px]">
                    <p class=" font-normal text-base text-gray-1">Discover a world of opportunity as a farmer on our
                        platform.
                        With us, you have the chance to transform
                        your agricultural prowess into a lucrative business. </p>

                    <p class=" font-normal text-base text-gray-1">Become a seller and tap into a wide customer base that
                        values
                        fresh, locally sourced produce. Our user-friendly interface and robust tools make it easy to
                        showcase
                        your crops, connect with buyers, and manage orders effortlessly. </p>

                    <p class=" font-normal text-base text-gray-1"> Join our community today and unlock the potential to
                        earn
                        money while doing what you love—farming. </p>
                </div>

                <div class="flex justify-between  md:w-[463.92px] md:h-[59.5px]">
                    <button type="button"
                        class="items-center md:w-[237.73px] h-full rounded-md bg-primary-1 px-4 text-sm font-medium text-white hover:bg-primary hover:border-0 hover:text-white focus:outline-none">Become
                        a Seller</button>
                    <button type="button"
                        class="items-center md:w-[186.19px] h-full rounded-md border-2 border-primary-1 px-4 text-sm font-medium text-primary-1 hover:bg-primary-1 hover:border-0 hover:text-white focus:outline-none">Discover
                        More</button>
                </div>
            </div>
            <div class="flex justify-center items-center md:w-[492px] md:h-[661px] absolute md:top-[163px] md:right-[88px]">
                <img class="w-full flex self-center md:h-full object-cover " src="@/assets/images/Rectangle 7.png" alt="">
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ProductShowcase } from "@/components/website/Homepage/index";

import GreyMapPinIcon from '@/assets/svg/GreyMapPinIcon.svg';
</script>