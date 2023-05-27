<template>
    <div class="max-w-7xl flex justify-between">

        <DHeaderText title="Products" />

        <div class="flex items-center">
            <nav class="flex" aria-label="Breadcrumb">
                <ol role="list" class="flex items-center space-x-2">
                    <li v-for="page in pages" :key="page.name">
                        <div class="flex items-center">
                            <svg class="h-5 w-5 flex-shrink-0 text-gray-300" xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                            </svg>
                            <a :href="page.href" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                                :aria-current="page.current ? 'page' : undefined">{{ page.name }}</a>
                        </div>
                    </li>
                </ol>
            </nav>
        </div>
    </div>

    <!-- Card Component for product insights -->
    <ProductsHeader :val1=1290 :val2=1110 :val3=90 />

    <div class="flex mt-[22px] justify-between">

        <DFilterPanel />

        <div class="h-[55px] flex justify-center items-center">
            <DRoundButton path="products/create-product" title="Create Product" />

        </div>
    </div>

    <ProductTable :products="products" />
</template>
   
<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";
import type Product from "@/types/Product";
import ProductsHeader from '@/components/admin/Cards/ProductsHeader.vue';
import DFilterPanel from '@/components/admin/UI/DFilterPanel.vue';
import DRoundButton from '@/components/admin/UI/DRoundButton.vue';
import DSquareButton from '@/components/admin/UI/DSquareButton.vue';
import ProductTable from '@/components/admin/Tables/ProductTable.vue';
import DHeaderText from '@/components/admin/UI/DHeaderText.vue';

const products: Product[] = [
    {
        id: 1,
        productName: "Catfish",
        category: 'Fish',
        sku: '4Kg',
        unitPrice: 'N 3,000.00',
        orders: 'N 566,000',
        status: false,
        dateAdded: '12/09/2021 12:35 am',
    },

    {
        id: 2,
        productName: "Hagefish",
        category: 'Fish',
        sku: '40Kg',
        unitPrice: 'N 31,000.00',
        orders: 'N 566,000',
        status: true,
        dateAdded: '12/09/2021 12:35 am',
    },

    {
        id: 3,
        productName: "Hagefish",
        category: 'Fish',
        sku: '40Kg',
        unitPrice: 'N 31,000.00',
        orders: 'N 566,000',
        status: false,
        dateAdded: '12/09/2021 12:35 am',
    },


    {
        id: 4,
        productName: "Catfish",
        category: 'Fish',
        sku: '4Kg',
        unitPrice: 'N 3,000.00',
        orders: 'N 566,000',
        status: true,
        dateAdded: '12/09/2021 12:35 am',
    },

    {
        id: 5,
        productName: "Catfish",
        category: 'Fish',
        sku: '4Kg',
        unitPrice: 'N 3,000.00',
        orders: 'N 566,000',
        status: true,
        dateAdded: '12/09/2021 12:35 am',
    },



    {
        id: 6,
        productName: "Hagefish",
        category: 'Fish',
        sku: '40Kg',
        unitPrice: 'N 31,000.00',
        orders: 'N 566,000',
        status: true,
        dateAdded: '12/09/2021 12:35 am',
    },






    // More plans...
]

const pages = [
    { name: 'Dashboard', href: '/', current: false },
    { name: 'Products', href: '/products', current: true },
]

export default defineComponent({
    props: {
        products: {
            required: true,
            type: Array as PropType<Product[]>,
        },
    },
    setup(props) {
        return { products, pages };
    },
    components: { ProductsHeader, DFilterPanel, DRoundButton, DSquareButton, ProductTable, DHeaderText }
});
</script>
  
<style></style>