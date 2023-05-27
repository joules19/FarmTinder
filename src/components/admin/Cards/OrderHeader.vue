<template lang="">
   <div class="flex flex-row mt-[17px] flex-wrap content-start gap-[32px]">
        <div class="flex flex-col p-4 md:h-[174px] bg-white rounded-[13px] shadow-xs justify-between flex-1">

            <div class="grid justify-items-stretch">
                <div
                    class="justify-self-start p-[10px] rounded-full bg-gradient-to-r from-[#7D00A9] to-[#560075] text-white">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5195 6.41683C15.5486 6.35186 15.5623 6.28106 15.5594 6.20996H15.5833C15.4808 3.76391 13.4612 1.8335 11.0045 1.8335C8.54791 1.8335 6.52825 3.76391 6.42573 6.20996C6.41365 6.27839 6.41365 6.3484 6.42573 6.41683H6.35407C5.17937 6.41683 3.92365 7.1923 3.55909 9.2769L2.84616 14.9553C2.26286 19.1245 4.40973 20.1668 7.21282 20.1668H14.8119C17.6069 20.1668 19.689 18.6576 19.1705 14.9553L18.4657 9.2769C18.0363 7.25067 16.8211 6.41683 15.6626 6.41683H15.5195ZM14.2021 6.41683C14.1766 6.35078 14.1631 6.28073 14.1622 6.20996C14.1622 4.45225 12.7324 3.02735 10.9686 3.02735C9.20484 3.02735 7.77502 4.45225 7.77502 6.20996C7.7871 6.27839 7.7871 6.3484 7.77502 6.41683H14.2021ZM8.33891 11.1364C7.89149 11.1364 7.52877 10.763 7.52877 10.3025C7.52877 9.842 7.89149 9.46868 8.33891 9.46868C8.78634 9.46868 9.14905 9.842 9.14905 10.3025C9.14905 10.763 8.78634 11.1364 8.33891 11.1364ZM12.8352 10.3025C12.8352 10.763 13.1979 11.1364 13.6453 11.1364C14.0928 11.1364 14.4555 10.763 14.4555 10.3025C14.4555 9.842 14.0928 9.46868 13.6453 9.46868C13.1979 9.46868 12.8352 9.842 12.8352 10.3025Z" fill="white"/>
</svg>
                </div>
            </div>
            <div class="grid grid-cols-4">
                <div>
                    <p class="mb-2 text-xs text-[#979797]">
                        All
                    </p>
                    <p class="text-[26px] font-bold text-dark-2">
                        {{val1.toLocaleString()}}
                    </p>
                </div>
                <div class="">
                    <p class="mb-2 text-xs text-[#979797]">
                        Completed
                    </p>
                    <p class="text-[26px] font-bold text-dark-2">
                        {{val2.toLocaleString()}}

                    </p>
                </div>
                <div class="">
                    <p class="mb-2 text-xs text-[#979797]">
                        Pending
                    </p>
                    <p class="text-[26px] font-bold text-dark-2">
                        {{val3.toLocaleString()}}

                    </p>
                </div>
                <div class="">
                    <p class="mb-2 text-xs text-[#979797]">
                        Cancelled
                    </p>
                    <p class="text-[26px] font-bold text-[#A90606]">
                        {{val4.toLocaleString()}}

                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";
import { ShoppingCartIcon } from '@heroicons/vue/24/solid'
export default defineComponent({
    components: {
        ShoppingCartIcon
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

        val4: {
            type: Number as PropType<Number>,
        },
    },

    setup() {

        return {
        };
    },
});

</script>