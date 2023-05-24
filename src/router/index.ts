import { createRouter, createWebHistory } from 'vue-router';
import { CreateProduct, OrderView, ProductDetails, ProductView, UserView, DashboardView } from "@/views/admin/index";
import { WebsiteLayout, AdminLayout } from '@/views/layout/index';
import HomeView from '@/views/website/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {

      name: "Admin",
      path: "/admin",
      component: AdminLayout,
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
          path: 'admin/products/create-product',
          name: 'CreateProduct',
          component: CreateProduct,
        },

        {
          path: "/admin/products/:productId",
          component: ProductDetails,
          name: "ProductDetails",
          props: true,
          meta: { requiresAuth: true },
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

      ]
    },

  ]
})

export default router
