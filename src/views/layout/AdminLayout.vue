<template>
    <!--SWITCHING THE ADMIN BACKGROND TO GRAY FROM THE WEBSITES WHITE  -->
    <div class="bg-gray-3 pb-56">
        <TransitionRoot as="template" :show="sidebarOpen">
            <Dialog as="div" class="relative z-40 md:hidden" @close="sidebarOpen = false">
                <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0"
                    enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100"
                    leave-to="opacity-0">
                    <div class="fixed inset-0 bg-gray-600 bg-opacity-75" />
                </TransitionChild>

                <div class="fixed inset-0 z-40 flex">
                    <TransitionChild as="template" enter="transition ease-in-out duration-300 transform"
                        enter-from="-translate-x-full" enter-to="translate-x-0"
                        leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0"
                        leave-to="-translate-x-full">
                        <DialogPanel class="relative flex w-full max-w-xs flex-1 flex-col bg-white pt-5 pb-4">
                            <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0"
                                enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100"
                                leave-to="opacity-0">
                                <div class="absolute top-0 right-0 -mr-12 pt-2">
                                    <button type="button"
                                        class="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                        @click="sidebarOpen = false">
                                        <span class="sr-only">Close sidebar</span>
                                        <XMarkIcon class="h-6 w-6 text-white" aria-hidden="true" />
                                    </button>
                                </div>
                            </TransitionChild>

                            <div class="mt-5 h-0 flex-1 overflow-y-auto">
                                <nav class="space-y-1 px-2">
                                    <a v-for="item in navigation" :key="item.name" :href="item.href"
                                        :class="[item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900', 'group flex items-center px-2 py-2 text-base font-medium rounded-md']">
                                        <component :is="item.icon"
                                            :class="[item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500', 'mr-4 flex-shrink-0 h-6 w-6']"
                                            aria-hidden="true" />
                                        {{ item.name }}
                                    </a>
                                </nav>
                            </div>

                        </DialogPanel>
                    </TransitionChild>
                    <div class="w-14 flex-shrink-0" aria-hidden="true">
                        <!-- Dummy element to force sidebar to shrink to fit close icon -->
                    </div>
                </div>
            </Dialog>
        </TransitionRoot>

        <!-- Header -->
        <div class="flex flex-1 flex-col ">
            <div class="sticky top-0 z-10 flex h-[72px] flex-shrink-0 bg-white pl-[46px] pr-[37px]">
                <div class="flex items-center justify-between">
                    <router-link to="/admin"> <img src="@/assets/images/agro logos_k.png" class="w-[147px] h-[27px]"
                            alt="agro logos"></router-link>
                </div>
                <button type="button"
                    class="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
                    @click="sidebarOpen = true">
                    <span class="sr-only">Open sidebar</span>
                    <Bars3BottomLeftIcon class="h-6 w-6" aria-hidden="true" />
                </button>
                <div class="flex flex-1 justify-between px-4">
                    <div class="flex flex-1">

                    </div>
                    <div class="ml-4 flex items-center md:ml-6">

                        <!-- Profile dropdown -->
                        <Menu as="div" class="relative mr-[10px]">
                            <div>
                                <MenuButton
                                    class="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#00491E] focus:ring-offset-2">
                                    <span class="sr-only">Open user menu</span>
                                    <img class="h-8 w-8 rounded-full" src="@/assets/images/ayo.jpeg" alt="profile_pic" />
                                </MenuButton>
                            </div>
                            <transition enter-active-class="transition ease-out duration-100"
                                enter-from-class="transform opacity-0 scale-95"
                                enter-to-class="transform opacity-100 scale-100"
                                leave-active-class="transition ease-in duration-75"
                                leave-from-class="transform opacity-100 scale-100"
                                leave-to-class="transform opacity-0 scale-95">
                                <MenuItems
                                    class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <MenuItem v-for="item in userNavigation" :key="item.name" v-slot="{ active }">
                                    <a :href="item.href"
                                        :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">{{
                                            item.name }}</a>
                                    </MenuItem>
                                </MenuItems>
                            </transition>
                        </Menu>

                        <div class="flex flex-col items-center">
                            <h3 class=" font-bold text-[14px] text-[#00491E]">Farouk Hamzat</h3>
                            <p class="text-[#979797] text-[12px]">Super Admin</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- All other routed components or page would go here -->
            <main class="flex-1 md:ml-[322px] pt-[33px] pb-10 mr-[37px]">

                <div class="max-w-7xl">
                    <!-- Replace with your content -->
                    <div class="">
                        <router-view>

                        </router-view>
                    </div>
                    <!-- /End replace -->
                </div>
            </main>
        </div>

        <!-- Static sidebar for desktop -->
        <div
            class="hidden md:fixed md:inset-y-0 md:flex md:w-80 md:flex-col mt-[72px] bg-[#f4f4f4] pl-[46px] pr-[25px] pb-8 ">
            <!-- Sidebar component, swap this element with another sidebar if you like -->

            <!-- First SIDEBAR Card -->
            <div class="flex flex-col bg-white items-center justify-center rounded-b-[13px] h-[274px] space-y-1 mb-8">
                <img class="h-[90px] w-[90px] rounded-full" src="@/assets/images/ayo.jpeg" alt="profile_pic" />
                <h3 class=" font-bold text-[18px] text-[#00491E]">Farouk Hamzat</h3>
                <p class="text-[#979797] text-[13px]">Super Admin</p>
            </div>

            <!-- SECOND SIDEBAR CARD -->
            <div class="flex flex-col overflow-y-auto bg-white py-[21px] px-[45px] h-[547px] rounded-[13px]">
                <div class=" uppercase pb-2 text-[10px] border-b-2 border-gray-100">
                    <h1 class=" text-[#808191]">Menu</h1>
                </div>

                <div class=" mt-3 flex flex-grow flex-col bg-white">
                    <nav class="flex-1 space-y-1 pb-2">
                        <RouterLink v-for="(item, itemIdx) in navigation" :key="item.name" :to="item.href"
                            class="flex flex-row py-1" @click="setActive(itemIdx)">
                            <div :class="[item.current ? 'bg-primary-4 text-white' : 'bg-gray-100 text-gray-400',
                                'flex items-center w-[32px] h-[32px] justify-center rounded-xl']">
                                <component :is="item.icon" class="w-[18px] h-[18px]" />
                            </div>
                            <div
                                class="group flex items-center ml-1 px-[16px] text-[13px] font-normal hover:bg-gray-100 rounded-md">

                                {{ item.name }}
                            </div>
                        </RouterLink>

                    </nav>
                </div>

                <div class=" pt-3 border-t-2 border-gray-100">
                    <a href="/" class="flex flex-row py-1">
                        <div
                            class="bg-gray-100 text-gray-400 flex items-center w-[32px] h-[32px] justify-center rounded-xl">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_4307_18097)">
                                    <path
                                        d="M16.2079 13.6052C15.9994 13.6052 15.8306 13.7743 15.8306 13.9824V19.2493H10.4516V4.75068H15.8302V10.0071C15.8302 10.2156 15.9994 10.3843 16.2075 10.3843C16.4156 10.3843 16.5848 10.2152 16.5848 10.0071V4.37343C16.5848 4.16493 16.4156 3.99618 16.2075 3.99618H10.4513V1.50318C10.4513 1.37905 10.3901 1.2628 10.2878 1.1923C10.1854 1.1218 10.0545 1.1068 9.939 1.15068L2.44537 4.02093C2.2995 4.0768 2.20312 4.21705 2.20312 4.37343V19.6273C2.20312 19.7837 2.29987 19.9243 2.44575 19.9798L9.93975 22.8392C9.98325 22.8557 10.029 22.8639 10.0744 22.8639C10.1497 22.8639 10.2244 22.841 10.2885 22.7972C10.3905 22.7267 10.452 22.6104 10.452 22.4863V20.0042H16.2083C16.4167 20.0042 16.5855 19.8351 16.5855 19.6269V13.9828C16.5851 13.7743 16.416 13.6052 16.2079 13.6052ZM8.80387 12.9939C8.80387 13.2024 8.63475 13.3712 8.42663 13.3712C8.2185 13.3712 8.04938 13.2021 8.04938 12.9939V10.9956C8.04938 10.7871 8.2185 10.6183 8.42663 10.6183C8.63475 10.6183 8.80387 10.7874 8.80387 10.9956V12.9939ZM21.6833 11.7279L18.9195 8.96418C18.7721 8.81643 18.5332 8.81643 18.3859 8.96418C18.2385 9.11155 18.2385 9.35043 18.3859 9.4978L20.5054 11.6173H13.1464C12.9379 11.6173 12.7691 11.7864 12.7691 11.9946C12.7691 12.2027 12.9382 12.3718 13.1464 12.3718H20.5054L18.3859 14.4913C18.2385 14.6387 18.2385 14.8776 18.3859 15.0249C18.4594 15.0988 18.5561 15.1356 18.6525 15.1356C18.7489 15.1356 18.8456 15.0988 18.9191 15.0249L21.6829 12.2612C21.8306 12.1142 21.8306 11.8753 21.6833 11.7279Z"
                                        fill="#808191" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_4307_18097">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div
                            class="group flex items-center ml-1 px-[16px] text-[13px] font-normal hover:bg-gray-100 rounded-md">
                            Sign Out
                        </div>
                    </a>



                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, } from 'vue'
import {
    Dialog,
    DialogPanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
    TransitionRoot,
} from '@headlessui/vue'
import {
    Bars3BottomLeftIcon,
    ShoppingCartIcon,
    GiftIcon,
    HomeIcon,
    ArrowRightOnRectangleIcon,
    UsersIcon,
    XMarkIcon,
} from '@heroicons/vue/24/solid'
//import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid'

const navigation = ref([
    { name: 'Dashboard', href: '/admin', icon: HomeIcon, current: true, },
    { name: 'Products', href: '/admin/products', icon: GiftIcon, current: false },
    { name: 'Orders', href: '/admin/orders', icon: ShoppingCartIcon, current: false },
    { name: 'Users', href: '/admin/users', icon: UsersIcon, current: false },
])

const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
]

const setActive = (ind: number) => {
    navigation.value.forEach(el => {
        el.current = false;
    });
    navigation.value[ind].current = true;
}


const sidebarOpen = ref(false)



</script>

<style>
.body {
    background-color: #abb6d6 !important;
}

.fade-enter-active,
.fade-leave-active {}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
