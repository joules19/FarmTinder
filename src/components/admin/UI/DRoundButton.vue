<template>
    <button type="button" @click="$router.push(`${path}`)"
        class="inline-flex items-center rounded-full border border-transparent bg-[#008737] px-5 py-2 text-sm font-normal text-white shadow-sm hover:bg-[#0F9E49]">
        <svg class="mr-2" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M7.42688 1.87937L7.5 1.875C7.65308 1.87502 7.80084 1.93122 7.91523 2.03295C8.02963 2.13467 8.10271 2.27484 8.12063 2.42687L8.125 2.5V6.875H12.5C12.6531 6.87502 12.8008 6.93122 12.9152 7.03295C13.0296 7.13467 13.1027 7.27484 13.1206 7.42688L13.125 7.5C13.125 7.65308 13.0688 7.80084 12.9671 7.91523C12.8653 8.02963 12.7252 8.10271 12.5731 8.12063L12.5 8.125H8.125V12.5C8.12498 12.6531 8.06878 12.8008 7.96705 12.9152C7.86533 13.0296 7.72516 13.1027 7.57312 13.1206L7.5 13.125C7.34692 13.125 7.19916 13.0688 7.08477 12.9671C6.97037 12.8653 6.89729 12.7252 6.87937 12.5731L6.875 12.5V8.125H2.5C2.34692 8.12498 2.19916 8.06878 2.08477 7.96705C1.97037 7.86533 1.89729 7.72516 1.87937 7.57312L1.875 7.5C1.87502 7.34692 1.93122 7.19916 2.03295 7.08477C2.13467 6.97037 2.27484 6.89729 2.42687 6.87937L2.5 6.875H6.875V2.5C6.87502 2.34692 6.93122 2.19916 7.03295 2.08477C7.13467 1.97037 7.27484 1.89729 7.42688 1.87937L7.5 1.875L7.42688 1.87937Z"
                fill="white" />
        </svg>
        {{ title }}
    </button>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";
export default defineComponent({
    components: {

    },
    props: {

        path: {
            type: String as PropType<string>,
        },

        title: {
            type: String as PropType<string>,
        },

    },

    setup() {

        return {
        };
    },
});
</script>