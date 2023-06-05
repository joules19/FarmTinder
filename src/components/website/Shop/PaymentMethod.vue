<template>
    <div class="flex md:w-[634px] md:h-[528px] sm:rounded-[20px] bg-white p-[40px]">
        <div class="flex flex-col md:w-[554px] md:h-[312px]">
            <div class="md:mb-[24px]">
                <p class="font-bold text-sm text-dark-1">How do you want to pay for your order</p>
            </div>

            <div class="flex flex-col gap-2 w-full md:max-h-[554px]">

                <div @click="() => setIsBoatAccount()"
                    :class="{ 'border-[1px] border-primary-1 md:h-[168px] ': isBoatAccount }"
                    class="flex flex-col justify-between w-full md:h-[75px] border-[1px] border-gray-1  sm:rounded-[12px] md:px-[27px] md:pb-[20px] md:pt-[10px] ">

                    <div class="flex w-full md:h-[50px]">
                        <div :class="{ 'text-primary-1': isBoatAccount }"
                            class="flex gap-1 flex-col justify-between md:w-[474.28px] h-full text-gray-1">
                            <p class="font-semibold text-lg">BoAT Bank Balance</p>
                            <p class="font-normal text-xs">I want to pay from my BoAT Account Balance</p>
                        </div>
                        <div class="flex flex-1 h-full items-center">
                            <CheckIcon v-if="isBoatAccount" class="text-primary-1 md:h-[26px] md:w-[26px] " />
                        </div>
                    </div>

                    <Transition name="fade" appear mode="out-in">
                        <div v-if="isBoatAccount" class="flex mt-4 md:h-[62px] w-full bg-[#A5CF61] rounded-xl">
                            <div class="flex flex-col justify-center items-center px-8 flex-1">
                                <p class="flex self-start text-[#0A4C3e] text-[10px] font-semibold">Account Bal</p>
                                <p class="flex self-start text-white text-lg font-medium mt-[-5px]">₦100,000.00</p>
                            </div>
                        </div>
                    </Transition>

                </div>
                <div @click="() => setIsCardPayment()"
                    :class="{ 'md:h-[320px] border-[1px] border-primary-1': isCardPayment }"
                    class="flex flex-col justify-between w-full md:h-[75px] border-[1px] border-gray-1  sm:rounded-[12px] md:px-[27px] md:pb-[20px] md:pt-[10px] ">

                    <div class="flex w-full md:h-[50px]">
                        <div :class="{ 'text-primary-1': isCardPayment }"
                            class="flex gap-1 flex-col justify-between md:w-[474.28px] h-full text-gray-1">
                            <p class="font-semibold text-lg">Card Payment</p>
                            <p class="font-normal text-xs">I want to pay with my card</p>
                        </div>
                        <div class="flex flex-1 h-full items-center">
                            <CheckIcon v-if="isCardPayment" class="text-primary-1 md:h-[26px] md:w-[26px] " />
                        </div>
                    </div>

                    <Transition name="fade" appear mode="out-in">
                        <div v-if="isCardPayment" class="flex flex-col justify-between flex-1 mt-4">
                            <div class="w-full flex gap-2 md:h-[40px]">
                                <div>
                                    <div class=" md:h-[191.36px] md:w-[334px] flex flex-col gap-4">
                                        <p class="font-semibold text-xs text-[#111312]">Card Details
                                        </p>

                                        <div class="flex flex-col justify-between md:h-[163.36px] w-full">
                                            <div>
                                                <label for="productName"
                                                    class="pl-1 block text-sm font-normal text-gray-6">Card Number</label>
                                                <div class="mt-[5px] bg-white">
                                                    <input type="text" name="productName"
                                                        class="block w-full  md:h-[48.1px] px-[21px] bg-white rounded-[12px] border-[1px] border-gray-200 placeholder:text-xs focus:outline-none focus:ring-[1.5px] focus:ring-primary-1/20 focus:border-transparent sm:text-sm"
                                                        placeholder="Card number " />
                                                </div>
                                            </div>

                                            <div class="flex justify-between ">
                                                <div>
                                                    <label for="Ccv"
                                                        class="pl-1 block text-sm font-normal text-gray-6">CCV</label>
                                                    <div class="mt-[5px] bg-white">
                                                        <input type="text" name="productName"
                                                            class="block md:w-[161px] md:h-[48.1px] px-[21px] bg-white rounded-[12px] border-[1px] border-gray-200 placeholder:text-xs  focus:outline-none focus:ring-[1.5px] focus:ring-primary-1/20 focus:border-transparent sm:text-sm"
                                                            placeholder="Cvv" />
                                                    </div>
                                                </div>

                                                <div>
                                                    <label for="Exp"
                                                        class="pl-1 block text-sm font-normal text-gray-6">Exp</label>
                                                    <div class="mt-[5px] bg-white">
                                                        <input type="text" name="productName"
                                                            class="block md:w-[161px] md:h-[48.1px] px-[21px] bg-white rounded-[12px] border-[1px] border-gray-200 placeholder:text-xs focus:outline-none focus:ring-[1.5px] focus:ring-primary-1/20 focus:border-transparent sm:text-sm"
                                                            placeholder="Expiry date" />
                                                    </div>
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

const isBoatAccount = ref(false)
const setIsBoatAccount = () => {
    isBoatAccount.value = true;
    isCardPayment.value = false;
}

const isCardPayment = ref(false)
const setIsCardPayment = () => {
    isCardPayment.value = true;
    isBoatAccount.value = false;
}

</script>

<style lang="">
    
</style>