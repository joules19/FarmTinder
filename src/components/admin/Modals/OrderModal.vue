<template>
    <TransitionRoot as="template" :show="isModalOpen">
        <Dialog as="div" class="relative z-10" @close="isModalOpen = false">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
                leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </TransitionChild>

            <div class="fixed inset-0 z-10 overflow-y-auto">
                <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <TransitionChild as="template" enter="ease-out duration-300"
                        enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
                        leave-from="opacity-100 translate-y-0 sm:scale-100"
                        leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                        <DialogPanel
                            class="relative w-[902px] h-[599px] transform overflow-hidden rounded-lg bg-white px-8 pt-5 pb-4 text-left shadow-xl transition-all my-8  p-6">
                            <div class="w-[838px] h-[495px]">
                                <div class="flex justify-between items-center h-[32px]">
                                    <div class=" ">
                                        <h1 class="text-[20px] text-[#1E211F] font-bold uppercase">Order Details</h1>
                                    </div>
                                    <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-[#E0F0E7]">
                                        <XMarkIcon class="h-6 w-6 text-[#00491E]" aria-hidden="true" />
                                    </div>
                                </div>
                                <div class="h-[336px]  my-9 ">
                                    <div class="flex flex-1 space-x-2 gap-4 justify-between p-0 mb-6">
                                        <div class="flex items-center">
                                            <div class="space-x-3 flex items-center">
                                                <p class="text-[#4F5250] font-medium text-[14px]"><span
                                                        class="text-[#A4A7A5] font-normal">Order #</span>
                                                    84394839</p>
                                            </div>
                                        </div>

                                        <div class="flex items-center">
                                            <div class="ml-[26px] py-2 px-[17px] bg-[#F0F7F3] rounded-[12px]">
                                                <p class="text-[#00491E] font-semibold text-[14px]">Completed</p>
                                            </div>
                                            <div class="pl-[26px] flex gap-3">
                                                <div>
                                                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M15.8333 3.8335H4.16667C3.24619 3.8335 2.5 4.57969 2.5 5.50016V17.1668C2.5 18.0873 3.24619 18.8335 4.16667 18.8335H15.8333C16.7538 18.8335 17.5 18.0873 17.5 17.1668V5.50016C17.5 4.57969 16.7538 3.8335 15.8333 3.8335Z"
                                                            stroke="#00491E" stroke-linecap="round"
                                                            stroke-linejoin="round" />
                                                        <path d="M2.5 8.8335H17.5" stroke="#00491E" stroke-linecap="round"
                                                            stroke-linejoin="round" />
                                                        <path d="M13.3335 2.1665V5.49984" stroke="#00491E"
                                                            stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M6.6665 2.1665V5.49984" stroke="#00491E"
                                                            stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>

                                                </div>
                                                <p class="text-[#4F5250] font-medium text-[14px]"><span
                                                        class="text-[#A4A7A5] font-normal">Added</span>
                                                    12/02/2022 12:55 am</p>
                                            </div>

                                        </div>


                                    </div>

                                    <div class="md:h-[279px] flex justify-between">
                                        <div
                                            class="flex flex-col md:w-[401px] md:h-[225px] px-6 pt-6 bg-[#F7F9F8] rounded-xl">
                                            <div class=" space-y-3">
                                                <div class="flex">
                                                    <div class="flex md:w-[136px] mr-6">
                                                        <p class=" text-[#A4A7A5] font-normal text-sm">
                                                            Seller
                                                        </p>
                                                    </div>
                                                    <div class="flex flex-1">
                                                        <p class="text-[#00491E] font-medium text-sm">
                                                            John Doe </p>
                                                    </div>
                                                </div>

                                                <div class="flex">
                                                    <div class="flex md:w-[136px] mr-6">
                                                        <p class=" text-[#A4A7A5] font-normal text-sm">
                                                            Customer
                                                        </p>
                                                    </div>
                                                    <div class="flex flex-1">
                                                        <p class="text-[#00491E] font-medium text-sm">
                                                            Samuel Doe
                                                        </p>
                                                    </div>
                                                </div>

                                                <div class="flex">
                                                    <div class="flex md:w-[136px] mr-6">
                                                        <p class=" text-[#A4A7A5] font-normal text-sm">
                                                            Delivery Type
                                                        </p>
                                                    </div>
                                                    <div class="flex flex-1 ">
                                                        <p class="text-[#00491E] font-medium text-sm">
                                                            Pick up
                                                        </p>
                                                    </div>
                                                </div>

                                                <div class="flex">
                                                    <div class="flex md:w-[136px] mr-6">
                                                        <p class=" text-[#A4A7A5] font-normal text-sm">
                                                            Customer Phone
                                                        </p>
                                                    </div>
                                                    <div class="flex flex-1 ">
                                                        <p class="text-[#00491E] font-medium text-sm">
                                                            08065748343
                                                        </p>
                                                    </div>
                                                </div>

                                                <div class="flex">
                                                    <div class="flex md:w-[136px] mr-6">
                                                        <p class=" text-[#A4A7A5] font-normal text-sm">
                                                            Customer Address
                                                        </p>
                                                    </div>
                                                    <div class="flex flex-1 ">
                                                        <p class="text-[#00491E] font-medium text-sm">
                                                            No. 10 Ademola Crescent, Yaba, Lagos
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="flex flex-col  h-[279px] md:w-[401px] justify-between">

                                            <div class="md:h-[25px] p-2 flex items-center">
                                                <p class=" text-[#A4A7A5] font-normal text-sm">
                                                    Items
                                                </p>
                                            </div>

                                            <div
                                                class="md:h-[69px] p-2 mt-2 border-[1px] border-gray-100 rounded-xl  flex items-center">
                                                <div class="w-[59px] h-[53]">
                                                    <img src="@/assets/images/fish.png" alt="product_img">
                                                </div>
                                                <div class="flex flex-col justify-between flex-1  pl-3 space-y-1">
                                                    <div class="h-5  flex items-center">
                                                        <p class="font-medium text-sm text-[#111312]">Cat Fish</p>
                                                    </div>
                                                    <div class="flex justify-between">
                                                        <div class="h-4  flex items-center">
                                                            <p class="text-[#4F5250] font-semibold text-[12px]"><span
                                                                    class="text-[#A4A7A5] font-normal">Unit Price</span>
                                                                ₦ 2,000.00 x 2</p>
                                                        </div>
                                                        <div class="h-4  flex items-center">
                                                            <p class="text-[#008067] font-semibold text-[12px]">
                                                                ₦ 4,000.00</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                class="md:h-[69px] p-2 border-[1px] border-gray-100 rounded-xl  flex items-center">
                                                <div class="w-[59px] h-[53]">
                                                    <img src="@/assets/images/fish.png" alt="product_img">
                                                </div>
                                                <div class="flex flex-col justify-between flex-1  pl-3 space-y-1">
                                                    <div class="h-5  flex items-center">
                                                        <p class="font-medium text-sm text-[#111312]">Cat Fish</p>
                                                    </div>
                                                    <div class="flex justify-between">
                                                        <div class="h-4 flex items-center">
                                                            <p class="text-[#4F5250] font-semibold text-[12px]"><span
                                                                    class="text-[#A4A7A5] font-normal">Unit Price</span>
                                                                ₦ 2,000.00 x 2</p>
                                                        </div>
                                                        <div class="h-4 flex items-center">
                                                            <p class="text-[#008067] font-semibold text-[12px]">
                                                                ₦ 4,000.00</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="md:h-[80px] md:w-[227px] self-end">
                                                <div class=" ">
                                                    <div class="flex">
                                                        <div class="flex  mr-6">
                                                            <p class=" text-[#A4A7A5] font-normal text-sm">
                                                                Sub-total
                                                            </p>
                                                        </div>
                                                        <div class="flex flex-1 justify-end">
                                                            <p class="text-[#1E211F] font-normal text-sm">
                                                                N 30,000.00 </p>
                                                        </div>
                                                    </div>

                                                    <div class="flex">
                                                        <div class="flex  mr-6">
                                                            <p class=" text-[#A4A7A5] font-normal text-sm">
                                                                Vat (10%)
                                                            </p>
                                                        </div>
                                                        <div class="flex flex-1 justify-end">
                                                            <p class="text-[#1E211F] font-normal text-sm">
                                                                N 3,000.00
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div class="flex">
                                                        <div class="flex  mr-6">
                                                            <p class=" text-[#A4A7A5] font-normal text-sm">
                                                                Delivery
                                                            </p>
                                                        </div>
                                                        <div class="flex flex-1 justify-end ">
                                                            <p class="text-[#00491E] font-medium text-sm">
                                                                --
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div class="flex">
                                                        <div class="flex mr-6">
                                                            <p class=" text-[#A4A7A5] font-normal text-sm">
                                                                Total
                                                            </p>
                                                        </div>
                                                        <div class="flex flex-1 justify-end ">
                                                            <p class="text-[#00491E] font-semibold text-sm">
                                                                N 33,000.00
                                                            </p>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>


                                <div class="h-[55px] flex items-center justify-center">
                                    <button type="button"
                                        class="inline-flex w-[301px] h-full justify-center items-center rounded-md border border-transparent bg-[#008737] px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-[#008737] focus:outline-none sm:text-sm"
                                        @click="isModalOpen = false">Done</button>

                                </div>
                            </div>

                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>
  
<script lang="ts" setup>
import { ref } from 'vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { CheckIcon, XMarkIcon } from '@heroicons/vue/24/outline'

const isModalOpen = ref(true)

</script>