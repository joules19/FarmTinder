<template>
    <div class="pt-2">
        <h1 class="text-2xl text-[#00491E] font-bold">{{ title }}</h1>
    </div>
</template>


<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";


export default defineComponent({
    props: {
        title: {
            required: true,
            type: String as PropType<string>
        }
    },
    setup(props) {
        return {};
    },
});
</script>




