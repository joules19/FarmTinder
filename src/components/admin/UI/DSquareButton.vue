<template>
    <button type="button" @click="$router.push(`${path}`)"
        class="inline-flex text-[13px] items-center border border-transparent bg-primary-2 px-4 py-1 text-sm font-normal text-white shadow-sm hover:bg-[#0F9E49] focus:outline-none focus:ring-2 focus:ring--500 focus:ring-offset-2">
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