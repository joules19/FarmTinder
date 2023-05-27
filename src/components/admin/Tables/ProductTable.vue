<template>
    <div
        class="relative overflow-x-auto sm:rounded-lg -mx-4 mt-[22px] px-6 sm:-mx-6 pb-6 md:mx-0 md:rounded-[13px] bg-white pt-[32px]">

        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
            <thead class="text-xs text-gray-700 uppercase bg-white dark:bg-white dark:text-gray-400">
                <tr>
                    <th scope="col" class="text-left pb-3 text-sm font-medium uppercase text-[#00491E] leading-tight">
                        Product Name
                    </th>
                    <th scope="col" class="text-left pb-3 text-sm font-medium uppercase text-[#00491E]">
                        Category
                    </th>
                    <th scope="col" class="text-left pb-3 text-sm font-medium uppercase text-[#00491E]">
                        Sku
                    </th>
                    <th scope="col" class="text-left pb-3 text-sm font-medium uppercase text-[#00491E]">
                        Unit Price
                    </th>
                    <th scope="col" class="text-left pb-3 text-sm font-medium uppercase text-[#00491E]">
                        Orders
                    </th>
                    <th scope="col" class="text-left pb-3 text-sm font-medium uppercase text-[#00491E]">
                        Status
                    </th>
                    <th scope="col" class="text-left pb-3 text-sm font-medium uppercase text-[#00491E]">
                        Date Added
                    </th>
                    <th scope="col" class="text-left pb-3 text-sm font-medium uppercase text-[#00491E]">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(product, productIdx) in products" :key="product.id"
                    class="bg-white border-b border-gray-200 px-6 hover:bg-gray-100 text-dark-2 font-light">
                    <th scope="row" class="py-4 text-[13px] whitespace-nowrap font-light">
                        {{ product.productName }}
                    </th>
                    <td class="py-4 text-[13px]">
                        {{ product.category }}
                    </td>
                    <td class="py-4 text-[13px]">
                        {{ product.sku }}
                    </td>
                    <td class="py-4 text-[13px]">
                        {{ product.unitPrice }}
                    </td>
                    <td class="py-4 text-[13px] text-normal">
                        20 | <span class=" font-bold">{{ product.orders }}</span>
                    </td>

                    <td v-if="product.status" class="py-4 text-[13px] text-primary-2">
                        Active
                    </td>
                    <td v-if="product.status == false" class="py-4 text-[13px] text-red-400">
                        In-Active
                    </td>
                    <td class="py-4 text-[13px]">
                        {{ product.dateAdded }}
                    </td>
                    <td>
                        <DSquareButton path="products/23" title="Action" />
                    </td>
                </tr>
            </tbody>

        </table>
        <div class="py-4">

        </div>
    </div>
</template>

<script lang="ts">
import DSquareButton from "./../UI/DSquareButton.vue";
import type Product from "./../../../types/Product";

import { defineComponent, type PropType } from "vue";
export default defineComponent({
    components: {
        DSquareButton
    },
    props: {
        products: {
            required: true,
            type: Array as PropType<Product[]>,
        },
    },

    setup() {

        return {
        };
    },
});
</script>