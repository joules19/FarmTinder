<template lang="">
   <div class="w-[513px] h-[55px] flex flex-cols  gap-[2px]">
            <div class="bg-white w-[50.5px] rounded-l-[3px] flex flex-row items-center justify-center">
                <div class="text-[#353535]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-[26px] h-[26px]">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
                    </svg>
                </div>

            </div>

            <div class="bg-white w-[101px] flex flex-row items-center justify-center">
                <p class="text-[#353535] text-sm font-normal">Filter by</p>

            </div>

            <div class="bg-white w-[101px] flex justify-center items-center space-x-1">
                <p class="text-[#353535] text-sm font-normal">Status</p>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9L12 15L18 9" stroke="black" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
            </div>

            <div class="bg-white w-[101px] flex justify-center items-center space-x-1">
                <p class="text-[#353535] text-sm font-normal">Date</p>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9L12 15L18 9" stroke="black" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
            </div>

            <div class="bg-white w-[151.5px] rounded-r-[3px] flex justify-center items-center space-x-1">
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M2.625 2.625V7.875H7.875M3.5 7C4.72762 4.41 7.40513 2.625 10.5 2.625C11.5342 2.625 12.5582 2.82869 13.5136 3.22445C14.4691 3.6202 15.3372 4.20027 16.0685 4.93153C16.7997 5.6628 17.3798 6.53093 17.7756 7.48637C18.1713 8.44181 18.375 9.46584 18.375 10.5C18.375 11.5342 18.1713 12.5582 17.7756 13.5136C17.3798 14.4691 16.7997 15.3372 16.0685 16.0685C15.3372 16.7997 14.4691 17.3798 13.5136 17.7756C12.5582 18.1713 11.5342 18.375 10.5 18.375V18.375C8.41142 18.375 6.40838 17.5453 4.93153 16.0685C3.45469 14.5916 2.625 12.5886 2.625 10.5L3.5 7Z"
                        stroke="#A90606" stroke-width="2" />
                </svg>
                <p class="text-[#A90606] text-sm font-normal">Reset Filter</p>
            </div>

        </div>
 </template>
 
<script lang="ts">
import { defineComponent, type PropType } from "vue";
export default defineComponent({
    components: {

    },
    props: {
        text: {
            type: String as PropType<string>,
        },
    },

    setup() {

        return {
        };
    },
});

</script>