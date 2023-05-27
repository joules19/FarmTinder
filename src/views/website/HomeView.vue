<template>
    <!-- SECTION A -->
    <TheHero />
    <TheEllipses />


    <!-- SECTION B ... Product Show Case -->
    <div class="flex flex-col relative md:mt-[150px] mx-auto md:w-[1280px] md:h-[1440px]">
        <ProductShowcase title="Popular On FarmTinder" btnTitle="See More" />
    </div>

    <!-- SECTION C -->
    <SectionC />

    <!-- SECTION D -->
    <SectionD />

    <!-- SECTION E // section with the multiple pictures-->
    <SectionE />

    <!-- SECTION F // section with the mobile app screens-->
    <SectionF />
</template>
   
<script lang="ts" setup>
import { computed, defineComponent, type PropType } from "vue";

import { TheHero, TheEllipses, ProductShowcase, SectionC, SectionD, SectionE, SectionF } from "@/components/website/Homepage/index";


</script>
