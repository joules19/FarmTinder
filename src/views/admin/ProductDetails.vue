<template>
    <div class="max-w-7xl">
        <h1 class="text-2xl text-[#00491E] font-bold">Product Details</h1>
    </div>

    <div class="flex flex-col mt-[27px] p-6 pb-[150px] bg-white rounded-[13px]">
        <div class="flex bg-white justify-between flex-1 gap-[22px] pb-[32px] border-gray-100 border-b">
            <div class="w-[87px] h-[81]">
                <img src="@/assets/images/fish.png" alt="product_img">
            </div>
            <div class="flex flex-col flex-1 gap-3">
                <div class="flex flex-1 justify-between">
                    <p class="text-[#00491E] font-medium text-[20px]">CatFish</p>
                    <div class="flex space-x-3">
                        <div class="justify-self-start p-[4px] rounded-md bg-[#F4E1E1]">
                            <svg width="22" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 6H5H21" stroke="#A90606" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path
                                    d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z"
                                    stroke="#A90606" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>

                        <div class="justify-self-start p-[4px] rounded-md bg-[#E0F0E7]">
                            <svg width="22" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 20H21" stroke="#008737" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path
                                    d="M16.5 3.50023C16.8978 3.1024 17.4374 2.87891 18 2.87891C18.2786 2.87891 18.5544 2.93378 18.8118 3.04038C19.0692 3.14699 19.303 3.30324 19.5 3.50023C19.697 3.69721 19.8532 3.93106 19.9598 4.18843C20.0665 4.4458 20.1213 4.72165 20.1213 5.00023C20.1213 5.2788 20.0665 5.55465 19.9598 5.81202C19.8532 6.06939 19.697 6.30324 19.5 6.50023L7 19.0002L3 20.0002L4 16.0002L16.5 3.50023Z"
                                    stroke="#008737" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>


                <div class="flex flex-1 space-x-2 gap-4 justify-between p-0">
                    <div class="flex items-center">
                        <div class="space-x-3 flex items-center">
                            <p class=" text-xs text-[#8B8E8D] font-normal">Status</p>
                            <div class="flex items-center">
                                <label class="relative inline-flex items-center justify-center cursor-pointer">
                                    <input type="checkbox" value="" class="sr-only peer">
                                    <div
                                        class="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-[#00491E] after:border-[#F7F7F7] after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#E6ECE8]">
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div class="ml-[26px] py-2 px-[17px] bg-[#F0F7F3] rounded-[12px]">
                            <p class="text-[#00491E] font-semibold text-[14px]">Active</p>
                        </div>
                    </div>

                    <div class="flex items-center">
                        <div class="py-2 px-[17px] bg-[#F7F7F7] rounded-[12px]">
                            <p class="font-semibold text-[#6D736F] text-[14px]">Fish</p>
                        </div>
                        <div class="pl-[26px] flex gap-3">
                            <div>
                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M15.8333 3.8335H4.16667C3.24619 3.8335 2.5 4.57969 2.5 5.50016V17.1668C2.5 18.0873 3.24619 18.8335 4.16667 18.8335H15.8333C16.7538 18.8335 17.5 18.0873 17.5 17.1668V5.50016C17.5 4.57969 16.7538 3.8335 15.8333 3.8335Z"
                                        stroke="#00491E" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M2.5 8.8335H17.5" stroke="#00491E" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M13.3335 2.1665V5.49984" stroke="#00491E" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M6.6665 2.1665V5.49984" stroke="#00491E" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>

                            </div>
                            <p class="text-[#4F5250] font-medium text-[14px]"><span
                                    class="text-[#A4A7A5] font-normal">Added</span>
                                12/02/2022 12:55 am</p>
                        </div>

                    </div>


                </div>

            </div>
        </div>

        <div class="flex flex-col gap-4 mt-[18px] max-w-[975px] mx-6">
            <h2 class="text-[#00491E] font-bold text-[14px]">Product Description</h2>
            <p class=" text-[#313432] font-normal text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                anim id est laborum.
            </p>
        </div>

        <div class="flex mt-[21px] mx-6 ">
            <div class="flex flex-col md:w-[229px] md:h-[179px] px-8 pt-6 pb-8 bg-[#F7F9F8] flex-1 rounded-xl">
                <div class=" space-y-4">
                    <div class="flex">
                        <div class="flex md:w-[80px]">
                            <p class=" text-[#A4A7A5] font-normal text-xs">
                                Unit Price
                            </p>
                        </div>
                        <div class="flex flex-1">
                            <p class="text-[#00491E] font-medium text-xs">
                                N 3,000.00 </p>
                        </div>
                    </div>

                    <div class="flex">
                        <div class="flex md:w-[80px]">
                            <p class=" text-[#A4A7A5] font-normal text-xs">
                                SKU
                            </p>
                        </div>
                        <div class="flex flex-1">
                            <p class="text-[#00491E] font-medium text-xs">
                                40Kg
                            </p>
                        </div>
                    </div>

                    <div class="flex">
                        <div class="flex md:w-[80px]">
                            <p class=" text-[#A4A7A5] font-normal text-xs">
                                Sales
                            </p>
                        </div>
                        <div class="flex flex-1 ">
                            <p class="text-[#00491E] font-medium text-xs">
                                20kg | N 550,000.00
                            </p>
                        </div>
                    </div>

                    <div class="flex">
                        <div class="flex md:w-[80px]">
                            <p class=" text-[#A4A7A5] font-normal text-xs">
                                Last Sale
                            </p>
                        </div>
                        <div class="flex flex-1 ">
                            <p class="text-[#00491E] font-medium text-xs">
                                12 Mar 2023 12:55 am
                            </p>
                        </div>
                    </div>
                </div>
            </div>



            <div class="flex flex-col flex-1 pl-9 py-2">
                <div class=" flex flex-col gap-[12px]">
                    <h2 class="text-[#00491E] font-bold text-[14px]">Seller</h2>
                    <div class="flex gap-[12px] ">
                        <img class="h-[37.24px] w-[40] rounded-xl" src="@/assets/images/ayo.jpeg" alt="profile_pic" />
                        <p class="text-[#00491E] font-medium text-[14px] flex items-center">John Doe</p>
                    </div>
                    <p class=" text-[#313432] font-normal text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi u
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
   
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    props: {

    },
    setup(props) {
        return {};
    },
});
</script>
  