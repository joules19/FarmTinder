<template>
    <div
        class="relative overflow-x-auto sm:rounded-lg -mx-4 mt-[22px] px-6 sm:-mx-6 pb-6 md:mx-0 md:rounded-[13px] bg-white pt-[32px]">

        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
            <thead class="text-xs text-gray-700 uppercase bg-white dark:bg-white dark:text-gray-400">
                <tr>
                    <th scope="col" class="text-left pb-3 text-sm font-medium uppercase text-[#00491E] leading-tight">
                        Customer Name
                    </th>
                    <th scope="col" class="text-left pb-3 text-sm font-medium uppercase text-[#00491E]">
                        Product
                    </th>
                    <th scope="col" class="text-left pb-3 text-sm font-medium uppercase text-[#00491E]">
                        Qty
                    </th>
                    <th scope="col" class="text-left pb-3 text-sm font-medium uppercase text-[#00491E]">
                        Unit Price
                    </th>
                    <th scope="col" class="text-left pb-3 text-sm font-medium uppercase text-[#00491E]">
                        Total
                    </th>
                    <th scope="col" class="text-left pb-3 text-sm font-medium uppercase text-[#00491E]">
                        Status
                    </th>
                    <th scope="col" class="text-left pb-3 text-sm font-medium uppercase text-[#00491E]">
                        Date
                    </th>
                    <th scope="col" class="text-left pb-3 text-sm font-medium uppercase text-[#00491E]">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(order, orderIdx) in orders" :key="order.id"
                    class="bg-white border-b border-gray-200 px-6 hover:bg-gray-100 text-dark-2 font-light">
                    <th scope="row" class="py-4 text-[13px] whitespace-nowrap font-light">
                        {{ order.customerName }}
                    </th>
                    <td class="py-4 text-[13px]">
                        {{ order.product }}
                    </td>
                    <td class="py-4 text-[13px]">
                        {{ order.quantity }}
                    </td>
                    <td class="py-4 text-[13px]">
                        {{ order.unitPrice }}
                    </td>
                    <td class="py-4 text-[13px] text-normal">
                        20 | <span class=" font-bold">{{ order.total }}</span>
                    </td>

                    <td v-if="order.status === 'Completed'" class="py-4 text-[13px] text-primary-2">
                        {{ order.status }}
                    </td>
                    <td v-if="order.status === 'Canceled'" class="py-4 text-[13px] text-red-400">
                        {{ order.status }}
                    </td>
                    <td v-if="order.status === 'Pending'" class="py-4 text-[13px] text-[#F0A92B]">
                        {{ order.status }}
                    </td>

                    <td class="py-4 text-[13px]">
                        {{ order.date }}
                    </td>

                    <td>
                        <button type="button" @click="toggleModal"
                            class="inline-flex text-[13px] items-center border border-transparent bg-primary-2 px-4 py-1 text-sm font-normal text-white shadow-sm hover:bg-[#0F9E49] focus:outline-none">
                            Action
                        </button>
                    </td>
                </tr>
            </tbody>

        </table>
        <div class="py-4">

        </div>
    </div>
</template>

<script lang="ts">
import DSquareButton from "../UI/DSquareButton.vue";
import type Order from "../../../types/Order";
import { defineComponent, ref, type PropType } from "vue";
import OrderModal from "../Modals/OrderModal.vue";

export default defineComponent({
    components: {
        DSquareButton,
        OrderModal
    },

    props: {
        orders: {
            required: true,
            type: Array as PropType<Order[]>,
        },
        isOpen: {
            //required: true,
            type: Boolean as PropType<boolean>
        }
    },
    setup(props) {

        const isOpen = ref(false)

        function toggleModal() {
            console.log(87777);

            isOpen.value = !isOpen
        }


        return {
            toggleModal
        };
    },
});
</script>