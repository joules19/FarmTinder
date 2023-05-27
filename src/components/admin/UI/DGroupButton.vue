<template>
    <div class="flex ">
        <span class="isolate inline-flex">
            <button type="button" @click="$router.push(`${path0}`)"
                class="relative bg-white -ml-px inline-flex items-center px-8 py-3 text-[16px] font-normal text-[#949494]">
                {{ title0 }}</button>
            <button type="button" @click="$router.push(`${path1}`)"
                class="relative -ml-px inline-flex items-center rounded-r-md bg-primary-2 px-12 py-3 text-[16px] font-normal text-white focus:z-10 hover:bg-[#0F9E49]">
                {{ title1 }}</button>
        </span>
    </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";
export default defineComponent({
    components: {

    },
    props: {

        path0: {
            type: String as PropType<string>,
        },

        path1: {
            type: String as PropType<string>,
        },

        title0: {
            type: String as PropType<string>,
        },

        title1: {
            type: String as PropType<string>,
        },

    },

    setup() {

        return {
        };
    },
});
</script>