<template>
    <div class="bg-[#F8F8F8] flex self-center items-center justify-center rounded-t-xl md:w-[30%] md:h-[66px]">
        <h1 class=" font-semibold text-[28px] text-dark-1">
            {{ title }}
        </h1>
    </div>

    <div class="flex flex-col space-y-20 md:h-[1412px] md:w-[1280px] bg-[#F8F8F8] rounded-3xl">
        <div class="flex flex-wrap gap-5 justify-between md:h-[1125px] md:w-[1212px] mx-auto mt-[35px]">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
        <div class="md:w-[186.19px] md:h-[59.5px] self-center">
            <button type="button"
                class="items-center w-full h-full rounded-md border-2 border-primary-1 bg-transparent px-8 py-4 text-sm font-medium text-primary-1 hover:bg-primary-1 hover:border-0 hover:text-white focus:outline-none">{{
                    btnTitle }}</button>
        </div>
    </div>
</template>


<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";
import { ShoppingCartIcon, } from '@heroicons/vue/24/outline';
import { HeartIcon, } from '@heroicons/vue/24/outline';

import ProductCard from '@/components/website/Cards/ProductCard.vue';

export default defineComponent({
    props: {
        title: {
            required: true,
            type: String as PropType<string>
        },
        btnTitle: {
            required: true,
            type: String as PropType<string>
        }
    },

    components: { ProductCard },

    setup(props) {

        return {}
    }
})

</script>
