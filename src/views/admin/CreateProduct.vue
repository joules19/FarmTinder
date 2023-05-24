<template>
    <div class="max-w-7xl flex justify-between">

        <DHeaderText title="New Product" />

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

    <div class="mt-[27px] px-8 py-8 bg-white rounded-[13px] ">

        <div class="flex border-b-[1px] border-gray-200 gap-8">

            <ProductForm />
            <ImageUploader />

        </div>

        <div class="md:h-[89px] pt-[34px] flex items-end justify-end ">
            <DGroupButton path0="/" path1="/" title0="Cancel" title1="Create Product" />
        </div>

    </div>
</template>
   
<script lang="ts">
import { computed, defineComponent, ref, type PropType } from "vue";
import DGroupButton from '@/components/admin/UI/DGroupButton.vue';
import ProductForm from '@/components/admin/Forms/ProductForm.vue';
import ImageUploader from '@/components/admin/ImageUploader.vue';
import DHeaderText from "@/components/admin/UI/DHeaderText.vue";


const pages = [
    { name: 'Dashboard', href: '/', current: false },
    { name: 'Products', href: '/products', current: false },
    { name: 'New Product', href: '/products/create-product', current: true }
]


export default defineComponent({
    setup(props) {
        return { pages };
    },
    components: { DGroupButton, ProductForm, ImageUploader, DHeaderText }
});
</script>
  