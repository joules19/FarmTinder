<template>
    <div class="md:h-[101px] md:w-[1280px] mx-auto rounded-[20px] md:mt-[-60px] z-[-1] bg-white">
    </div>
    <div class="flex justify-between md:h-[60px] md:w-[1212px] mx-auto  md:mt-[-43px]">
        <div class="relative rounded-2xl flex md:h-full md:w-[637px] shadow-md">
            <input type="text"
                class="block w-full h-full pl-[32px] opacity-90 placeholder:text-[15px] rounded-2xl pr-[52px] py-[10px] text-[#373737] text-[19px] focus:outline-none focus:ring-1 focus:ring-inset focus:ring-primary"
                placeholder="What are you looking for?" />
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-[20px] ">
                <MagnifyingGlassIcon class="md:w-[24px] md:h-[24px] text-primary-1" />
            </div>
        </div>

        <div class="flex justify-between h-full md:w-[555px] rounded-2xl">
            <div class="h-full md:w-[397px] opacity-90 rounded-2xl shadow-md">
                <select id="location" name="location"
                    class="mt-1 block w-full rounded-md border-gray-300 py-4 optional:text-[#373737] optional:after:bg-black after:p-6 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                    <option selected>All Categories</option>
                    <option>Fish</option>
                    <option>Legumes</option>
                </select>
            </div>
            <div class="flex justify-center items-center h-full md:w-[138px] opacity-90 rounded-2xl shadow-md">
                <div class="flex justify-between md:w-[74px] md:h-[28px]">
                    <p class=" text-[15px] text-[#BFBFBF]">Filter</p>
                    <img :src="FilterIcon" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import FilterIcon from '@/assets/svg/FilterIcon.svg';

</script>