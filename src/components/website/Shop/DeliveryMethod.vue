<template>
    <div :class="{ 'md:h-[635px]': !defaultDelivery }"
        class="flex md:w-[634px] md:h-[528px] sm:rounded-[20px] bg-white p-[40px]">
        <div class="flex flex-col md:w-[554px] md:h-[312px]">
            <div class="md:mb-[24px]">
                <p class="font-bold text-sm text-dark-1">How do you want your order</p>
            </div>

            <div class="flex flex-col gap-2 w-full md:max-h-[554px]">

                <div @click="() => setIsPickUp()" :class="{ 'border-[1px] border-primary-1 md:h-[168px] ': isPickUp }"
                    class="flex flex-col justify-between w-full md:h-[75px] border-[1px] border-gray-1  sm:rounded-[12px] md:px-[27px] md:pb-[20px] md:pt-[10px] ">

                    <div class="flex w-full md:h-[50px]">
                        <div :class="{ 'text-primary-1': isPickUp }"
                            class="flex gap-1 flex-col justify-between md:w-[474.28px] h-full text-gray-1">
                            <p class="font-semibold text-lg">Pick Up</p>
                            <p class="font-normal text-xs">I want to pick up my order</p>
                        </div>
                        <div class="flex flex-1 h-full items-center">
                            <CheckIcon v-if="isPickUp" class="text-primary-1 md:h-[26px] md:w-[26px] " />
                        </div>
                    </div>

                    <Transition name="fade" appear mode="out-in">
                        <div v-if="isPickUp" class="flex flex-col justify-between flex-1 mt-4">
                            <div class="w-full flex flex-col md:h-[40px]">
                                <p class="font-semibold text-xs text-[#111312]">Pick up location</p>
                                <p class="font-normal text-sm text-gray-1">No. 24 Arewa Street, Yaba, Lagos
                                    State
                                </p>
                            </div>

                            <div class="flex gap-1">
                                <div>
                                    <MapPinIcon class="text-primary-1 md:h-[16px] md:w-[16px] " />
                                </div>
                                <div>
                                    <router-link to="/">
                                        <p class="text-primary-1 font-semibold text-xs">
                                            Find on Map
                                        </p>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </Transition>

                </div>
                <div @click="() => setIsDelivery()"
                    :class="{ 'md:h-[168px] border-[1px] border-primary-1': isDelivery, 'md:h-[435px]': !defaultDelivery }"
                    class="flex flex-col justify-between w-full md:h-[75px] border-[1px] border-gray-1  sm:rounded-[12px] md:px-[27px] md:pb-[20px] md:pt-[10px] ">

                    <div class="flex w-full md:h-[50px]">
                        <div :class="{ 'text-primary-1': isDelivery }"
                            class="flex gap-1 flex-col justify-between md:w-[474.28px] h-full text-gray-1">
                            <p class="font-semibold text-lg">Delivery</p>
                            <p class="font-normal text-xs">I want my order delivered</p>
                        </div>
                        <div class="flex flex-1 h-full items-center">
                            <CheckIcon v-if="isDelivery" class="text-primary-1 md:h-[26px] md:w-[26px] " />
                        </div>
                    </div>

                    <Transition name="fade" appear mode="out-in">
                        <div v-if="isDelivery" class="flex flex-col justify-between flex-1 mt-4">
                            <div class="w-full flex flex-col gap-3 md:h-[40px]">
                                <div class="flex justify-between md:h-[22.36px]">
                                    <p class="text-xs font-normal text-[#616161] "> Use my TAO profile address
                                    </p>
                                    <div class="flex items-center">
                                        <label class="relative inline-flex items-center justify-center cursor-pointer">
                                            <input type="checkbox" v-model="defaultDelivery" class="sr-only peer">
                                            <div
                                                class="w-11 h-6 bg-[#ECECEC] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-gray-5 peer-checked:after:bg-primary-1 after:border-[#F7F7F7] after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600">
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <div v-if="defaultDelivery">
                                    <p class="font-semibold text-xs text-[#111312]">TAO Profile Address</p>
                                    <p class="font-normal text-sm text-gray-1">No. 24 Arewa Street, Yaba, Lagos
                                        State
                                    </p>
                                </div>

                                <div v-if="!defaultDelivery">
                                    <div class=" md:h-[277.26px] md:w-[334px] flex flex-col gap-4">
                                        <p class="font-semibold text-xs text-[#111312]">Enter Delivery Address
                                        </p>

                                        <div class="flex flex-col justify-between md:h-[249.29px] w-full">
                                            <div>
                                                <label for="productName"
                                                    class="pl-1 block text-sm font-normal text-gray-6">Street
                                                    Address</label>
                                                <div class="mt-[5px] bg-white">
                                                    <input type="text" name="productName"
                                                        class="block w-full md:h-[48.1px] px-[21px] bg-white rounded-[12px] border-[1px] border-gray-200  focus:outline-none focus:ring-[1.5px] focus:ring-primary-1/20 focus:border-transparent sm:text-sm"
                                                        placeholder="Enter street address " />
                                                </div>
                                            </div>

                                            <div>
                                                <label for="productName"
                                                    class="pl-1 block text-sm font-normal text-gray-6">City</label>
                                                <div class="mt-[5px] bg-white">
                                                    <input type="text" name="productName"
                                                        class="block w-full md:h-[48.1px] px-[21px] bg-white rounded-[12px] border-[1px] border-gray-200  focus:outline-none focus:ring-[1.5px] focus:ring-primary-1/20 focus:border-transparent sm:text-sm"
                                                        placeholder="Enter city name " />
                                                </div>
                                            </div>

                                            <div>
                                                <label for="productName"
                                                    class="pl-1 block text-sm font-normal text-gray-6">State
                                                </label>
                                                <div class="mt-[5px] bg-white">
                                                    <select id="sellers"
                                                        class=" block bg-white border-[1px] border-gray-200 rounded-[12px] md:h-[48.1px] px-[21px] text-gray-900  text-sm w-full focus:outline-none focus:ring-[1.5px] focus:ring-[#F0F7F3] focus:border-transparent sm:text-sm">
                                                        <option selected>--Select State--</option>
                                                        <option value="US">Lagos</option>
                                                        <option value="CA">Ekiti</option>
                                                    </select>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </Transition>

                </div>



            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, defineComponent, type PropType, ref } from "vue";
import { CheckIcon, MapPinIcon } from '@heroicons/vue/24/outline'

const isPickUp = ref(false)
const setIsPickUp = () => {
    isPickUp.value = true;
    isDelivery.value = false;
    defaultDelivery.value = true;
}

const isDelivery = ref(false)
const setIsDelivery = () => {
    isDelivery.value = true;
    isPickUp.value = false;
}

const defaultDelivery = ref(true)


</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
