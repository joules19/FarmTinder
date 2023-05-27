<template>
    <!-- PAGE HEADER -->
    <ShopHeader />

    <!-- Product Filter -->
    <ProductFilter />

    <div
        class="mx-auto md:mt-[111px] md:mb-[176px] flex flex-col space-y-20 md:h-[1280px] md:w-[1280px] bg-[#F8F8F8] rounded-3xl">
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
    </div>
</template>
   
<script lang="ts" setup>
import { computed, defineComponent, type PropType } from "vue";
import ProductCard from '@/components/website/Cards/ProductCard.vue';
import { ShopHeader, ProductFilter } from '@/components/website/Shop/index';




</script>
