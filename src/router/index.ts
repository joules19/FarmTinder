import { createRouter, createWebHistory } from 'vue-router';
import { CreateProduct, OrderView, ProductDetails, ProductView, UserView, DashboardView } from "@/views/admin/index";
import { WebsiteLayout, AdminLayout } from '@/views/layout/index';
import { ShopView, HomeView, ProductsView } from '@/views/website/index';
//import VueBodyClass from 'vue-body-class';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: "admin",
      path: "/admin",
      component: AdminLayout,
      meta: { bod: 'bg-primary-1' },
      redirect: '/dashboard',
      children: [

        {
          path: '/admin',
          name: 'dashboard',
          component: DashboardView,
        },

        {
          path: '/admin/products',
          name: 'Products',
          component: ProductView,
        },

        {
          path: '/admin/products/create-product',
          name: 'CreateProduct',
          component: CreateProduct,
        },

        {
          path: "/admin/products/:productId",
          component: ProductDetails,
          name: "ProductDetails",
          props: true,
        },

        {
          path: '/admin/orders',
          name: 'Orders',
          component: OrderView,
        },

        {
          path: '/admin/users',
          name: 'Users',
          component: UserView,
        },

      ]
    },

    {

      name: "Website",
      path: "/",
      component: WebsiteLayout,
      redirect: '/',
      children: [
        {
          path: '/',
          name: 'home',
          component: HomeView,
        },
        {
          path: '/shop',
          name: 'shop',
          component: ShopView,
        },
        {
          path: '/product/:productId',
          name: 'product',
          component: ProductsView,
        },

      ]
    },

  ],


})


export default router
