<template>
    <div class="max-w-7xl flex justify-between">

        <DHeaderText title="Orders" />
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

    <div class="mb-6">
        <OrderHeader :val1=267 :val2=200 :val3=20 :val4=47 />
    </div>

    <DFilterPanel />

    <OrderTable :orders="orders" />

    <OrderModal />
</template>
   
<script lang="ts">
import { computed, defineComponent, ref, type PropType } from "vue";
import DGroupButton from '@/components/admin/UI/DGroupButton.vue';
import ProductForm from '@/components/admin/Forms/ProductForm.vue';
import ImageUploader from '@/components/admin/ImageUploader.vue';
import DHeaderText from "@/components/admin/UI/DHeaderText.vue";
import OrderHeader from "@/components/admin/Cards/OrderHeader.vue";
import DFilterPanel from "@/components/admin/UI/DFilterPanel.vue";
import OrderTable from "@/components/admin/Tables/OrderTable.vue";
import OrderModal from "@/components/admin/Modals/OrderModal.vue";

import type Order from "@/types/Order";


const orders: Order[] = [
    {
        id: 1,
        customerName: "John Doe",
        product: 'Catfish',
        quantity: '10Kg',
        unitPrice: 'N 3,000.00',
        total: "N 30,000.00",
        status: "Completed",
        date: '12/09/2021 12:35 am',
    },

    {
        id: 2,
        customerName: "John Doe",
        product: 'Catfish',
        quantity: '10Kg',
        unitPrice: 'N 3,000.00',
        total: "N 30,000.00",
        status: "Canceled",
        date: '12/09/2021 12:35 am',
    },

    {
        id: 3,
        customerName: "John Doe",
        product: 'Catfish',
        quantity: '10Kg',
        unitPrice: 'N 3,000.00',
        total: "N 30,000.00",
        status: "Pending",
        date: '12/09/2021 12:35 am',
    },


    {
        id: 4,
        customerName: "John Doe",
        product: 'Catfish',
        quantity: '10Kg',
        unitPrice: 'N 3,000.00',
        total: "N 30,000.00",
        status: "Canceled",
        date: '12/09/2021 12:35 am',
    },

    {
        id: 5,
        customerName: "John Doe",
        product: 'Catfish',
        quantity: '10Kg',
        unitPrice: 'N 3,000.00',
        total: "N 30,000.00",
        status: "Completed",
        date: '12/09/2021 12:35 am',
    },



    {
        id: 6,
        customerName: "John Doe",
        product: 'Catfish',
        quantity: '10Kg',
        unitPrice: 'N 3,000.00',
        total: "N 30,000.00",
        status: "Completed",
        date: '12/09/2021 12:35 am',
    },

    {
        id: 6,
        customerName: "John Doe",
        product: 'Catfish',
        quantity: '10Kg',
        unitPrice: 'N 3,000.00',
        total: "N 30,000.00",
        status: "Pending",
        date: '12/09/2021 12:35 am',
    },

    {
        id: 8,
        customerName: "John Doe",
        product: 'Catfish',
        quantity: '10Kg',
        unitPrice: 'N 3,000.00',
        total: "N 30,000.00",
        status: "Completed",
        date: '12/09/2021 12:35 am',
    },

    {
        id: 9,
        customerName: "John Doe",
        product: 'Catfish',
        quantity: '10Kg',
        unitPrice: 'N 3,000.00',
        total: "N 30,000.00",
        status: "Pending",
        date: '12/09/2021 12:35 am',
    },

    {
        id: 10,
        customerName: "John Doe",
        product: 'Catfish',
        quantity: '10Kg',
        unitPrice: 'N 3,000.00',
        total: "N 30,000.00",
        status: "Completed",
        date: '12/09/2021 12:35 am',
    },

    {
        id: 11,
        customerName: "John Doe",
        product: 'Catfish',
        quantity: '10Kg',
        unitPrice: 'N 3,000.00',
        total: "N 30,000.00",
        status: "Pending",
        date: '12/09/2021 12:35 am',
    },




]

const pages = [
    { name: 'Dashboard', href: '/', current: false },
    { name: 'Orders', href: '/orders', current: true },
]

export default defineComponent({
    setup(props) {
        return { pages, orders };
    },
    components: { DGroupButton, ProductForm, ImageUploader, DHeaderText, OrderHeader, DFilterPanel, OrderTable, OrderModal }
});
</script>
  