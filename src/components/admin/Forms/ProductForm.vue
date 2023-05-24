<template>
    <div class="md:w-[517px] md:h-[646px] flex flex-col">
        <div>
            <label for="productName" class="block text-sm font-normal text-[#00491E]">Product Name</label>
            <div class="mt-[6px] bg-white">
                <input type="text" name="productName"
                    class="block w-full md:h-[54px] px-[21px] bg-white rounded-[4px] border-[1.5px] border-gray-200  focus:outline-none focus:ring-[3px] focus:ring-[#F0F7F3] focus:border-transparent sm:text-sm"
                    placeholder="Add a title for your product i.e. Fish " />
            </div>
        </div>

        <div class="mt-[24px]">
            <label for="productCategory" class="block text-sm font-normal text-[#00491E]">Product Categorhgfvgfy</label>
            <div class="mt-[6px] bg-white">
                <select id="categories"
                    class=" block bg-white border-[1.5px] border-gray-200 rounded-[4px] md:h-[54px] px-[21px] placeholder-red-200 text-gray-900 text-sm w-full focus:outline-none focus:ring-[3px] focus:ring-[#F0F7F3] focus:border-transparent sm:text-sm">
                    <option selected>--Select Category--</option>
                    <option value="US">Category1</option>
                    <option value="CA">Category2</option>
                    <option value="FR">Category3</option>
                    <option value="DE">Category4</option>
                </select>
            </div>
        </div>



        <div class="mt-[24px]">
            <label for="text" class="block text-sm font-normal text-[#00491E]">Seller</label>
            <div class="mt-[6px]">
                <select id="sellers"
                    class=" block bg-white border-[1.5px] border-gray-200 rounded-[4px] md:h-[54px] px-[21px] text-gray-900  text-sm w-full focus:outline-none focus:ring-[3px] focus:ring-[#F0F7F3] focus:border-transparent sm:text-sm">
                    <option selected>--Select Seller--</option>
                    <option value="US">Seller1</option>
                    <option value="CA">Seller2</option>
                    <option value="FR">Seller3</option>
                    <option value="DE">Seller4</option>
                </select>
            </div>
        </div>



        <div class="mt-[24px] flex justify-between gap-4">
            <div class=" w-[309px]">
                <label for="email" class="block text-sm font-normal text-[#00491E]">Unit Price</label>
                <div class="mt-[6px] bg-white">
                    <input type="text" name="productName"
                        class="block px-[21px] w-full md:h-[54px] bg-white rounded-[4px] border-[1.5px] border-gray-200  focus:outline-none focus:ring-[3px] focus:ring-[#F0F7F3] focus:border-transparent sm:text-sm"
                        placeholder="How much does it cost" />
                </div>
            </div>

            <div class=" w-[184px]">
                <label for="email" class="block text-sm font-normal text-[#00491E]">Per</label>
                <div class="mt-[6px]">
                    <select id="sellers"
                        class=" block bg-white border-[1.5px] border-gray-200 rounded-[4px] md:h-[54px] px-[21px] text-gray-900  text-sm w-full focus:outline-none focus:ring-[3px] focus:ring-[#F0F7F3] focus:border-transparent sm:text-sm">
                        <option selected>Kg</option>
                        <option value="US">1Kg</option>
                        <option value="CA">2Kg</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="mt-[24px]">
            <label for="description" class="block text-sm font-normal text-[#00491E]">Description</label>
            <div class="mt-[6px]">
                <textarea rows="4" name="description" id="comment"
                    class="block w-full p-[21px] md:h-[180px] bg-white rounded-[4px]  border-[1.5px] border-gray-200 focus:outline-none focus:ring-[3px] focus:ring-[#F0F7F3] focus:border-transparent sm:text-sm" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({

    setup(props) {
        return {};
    },
})
</script>