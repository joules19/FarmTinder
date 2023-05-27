<template lang="">
    <div
        class="relative overflow-x-auto sm:rounded-lg pb-12 -mx-4 mt-[22px] px-6 sm:-mx-6 md:mx-0 md:rounded-[13px] bg-white pt-[32px]">

        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
            <thead class="text-xs text-gray-700 uppercase bg-white dark:bg-white dark:text-gray-400">
                <tr>
                    <th scope="col" class="text-left pb-3 text-sm font-medium uppercase text-[#00491E] leading-tight">
                        Name
                    </th>
                    <th scope="col" class="text-left pb-3 text-sm font-medium uppercase text-[#00491E]">
                        Email
                    </th>
                    <th scope="col" class="text-left pb-3 text-sm font-medium uppercase text-[#00491E]">
                        Phone
                    </th>
                    <th scope="col" class="text-left pb-3 text-sm font-medium uppercase text-[#00491E]">
                       Type
                    </th>
                    <th scope="col" class="text-left pb-3 text-sm font-medium uppercase text-[#00491E]">
                       Orders
                    </th>
                    <th scope="col" class="text-left pb-3 text-sm font-medium uppercase text-[#00491E]">
                        Date Joined
                    </th>
                    <th scope="col" class="text-left pb-3 text-sm font-medium uppercase text-[#00491E]">
                        Status
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(user, userIdx) in users" :key="user.id"
                    class="bg-white border-b border-gray-200 px-6 hover:bg-gray-100 text-dark-2 font-light">
                    <th scope="row" class="py-4 text-[13px] whitespace-nowrap font-light">
                        {{ user.name }}
                    </th>
                    <td class="py-4 text-[13px]">
                        {{ user.email }}
                    </td>
                    <td class="py-4 text-[13px]">
                        {{ user.phone }}
                    </td>
                    <td class="py-4 text-[13px]">
                        {{ user.type }}
                    </td>
                    <td class="py-4 text-[13px] text-normal">
                        20 | <span class=" font-bold">{{ user.orders }}</span>
                    </td>
                    <td class="py-4 text-[13px]">
                        {{ user.dateJoined }}
                    </td>
                    <td v-if="user.status" class="py-4 text-[13px] text-primary-2">
                        Active
                    </td>
                    <td v-if="user.status == false" class="py-4 text-[13px] text-red-400">
                        In-Active
                    </td>
                </tr>
            </tbody>

        </table>
        <!-- <div class="py-4 flex justify-center items-center space-x-4 translate-x-[-100px]">
            <p class="font-medium text-base text-primary-2 uppercase">View All</p>
            <div>
                <svg width="23" height="8" viewBox="0 0 23 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.3536 4.35355C22.5488 4.15829 22.5488 3.84171 22.3536 3.64645L19.1716 0.464466C18.9763 0.269204 18.6597 0.269204 18.4645 0.464466C18.2692 0.659728 18.2692 0.976311 18.4645 1.17157L21.2929 4L18.4645 6.82843C18.2692 7.02369 18.2692 7.34027 18.4645 7.53553C18.6597 7.7308 18.9763 7.7308 19.1716 7.53553L22.3536 4.35355ZM0 4.5H22V3.5H0V4.5Z" fill="#008737"/>
                </svg>
            </div>
        </div> -->
    </div>
</template>



<script lang="ts">
import DSquareButton from "./../UI/DSquareButton.vue";
import type User from "./../../../types/User";

import { defineComponent, type PropType } from "vue";
export default defineComponent({
    components: {
        DSquareButton
    },
    props: {
        users: {
            required: true,
            type: Array as PropType<User[]>,
        },
    },

    setup() {

        return {
        };
    },
});
</script>