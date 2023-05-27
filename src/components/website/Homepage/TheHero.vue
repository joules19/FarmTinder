<template>
    <div class="relative md:h-[689px] md:w-[1440px]">
        <div class="mt-[-80px] w-full md:h-full bg-[url('@/assets/images/Hero-img.png')] bg-cover bg-center">
            <div class="relative w-full h-full flex flex-col justify-center items-center bg-[#4C5452]/20">
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
                                class="block w-full h-[78px] opacity-90 pl-[32px] pr-[72px] py-[21px] rounded-[32px] text-[#373737] text-[22px] focus:outline-none focus:ring-1 focus:ring-inset focus:ring-primary"
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
</template>

<script setup lang="ts">
import SearchIcon from '@/assets/svg/SearchIcon.svg';


</script>