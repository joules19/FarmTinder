<template lang="">
   <div class="flex flex-row mt-[17px] flex-wrap content-start gap-[32px]">
        <div class="flex flex-col p-4 md:h-[174px] bg-white rounded-[13px] shadow-xs justify-between flex-1">

            <div class="grid justify-items-stretch">
                <div
                    class="justify-self-start p-[10px] rounded-full bg-gradient-to-r from-[#7D00A9] to-[#560075] text-white">
                    <svg width="30" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M14.9581 5.02051V21.9191L4.47852 18.9305V10.3202L12.6712 10.787L14.9581 5.02051Z"
                            fill="white" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M25.6181 4.63471L15.7844 4.0376L18.2216 10.2454L28.0553 9.64827L25.6181 4.63471Z"
                            fill="white" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M15.6411 5.02051L17.928 10.787L26.1201 10.3202V18.9305L15.6411 21.9191V5.02051Z"
                            fill="white" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M4.9806 4.63471L2.5437 9.64827L12.3774 10.2454L14.8143 4.0376L4.9806 4.63471Z"
                            fill="white" />
                    </svg>

                </div>
            </div>
            <div class="grid grid-cols-3">
                <div>
                    <p class="mb-2 text-xs text-[#979797]">
                        All
                    </p>
                    <p class="text-[26px] font-bold text-[#353535]">
                        {{val1.toLocaleString()}}
                    </p>
                </div>
                <div class="">
                    <p class="mb-2 text-xs text-[#979797]">
                        Active
                    </p>
                    <p class="text-[26px] font-bold text-[#353535]">
                        {{val2.toLocaleString()}}

                    </p>
                </div>
                <div class="">
                    <p class="mb-2 text-xs text-[#979797]">
                        Inactive
                    </p>
                    <p class="text-[26px] font-bold text-[#353535]">
                        {{val3.toLocaleString()}}

                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";
export default defineComponent({
    components: {

    },
    props: {

        val1: {
            type: Number as PropType<Number>,
        },

        val2: {
            type: Number as PropType<Number>,
        },

        val3: {
            type: Number as PropType<Number>,
        },
    },

    setup() {

        return {
        };
    },
});

</script>