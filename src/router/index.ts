import { createRouter, createWebHistory } from 'vue-router';
import { CreateProduct, OrderView, ProductDetails, ProductView, UserView, DashboardView } from "@/views/admin/index";
import { WebsiteLayout, AdminLayout } from '@/views/layout/index';
import { ShopView, HomeView, ProductsView, ShoppingCart, FavouritesView, CheckoutView, OrderComplete } from '@/views/website/index';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
          meta: { transition: 'fade' },
        },
        {
          path: '/shop',
          name: 'shop',
          component: ShopView,
          meta: { transition: 'fade' },

        },
        {
          path: '/product/:productId',
          name: 'product',
          component: ProductsView,
        },
        {
          path: '/cart',
          name: 'cart',
          component: ShoppingCart,
        },

        {
          path: '/favourites',
          name: 'favourites',
          component: FavouritesView,
        },
        {
          path: '/cart/checkout',
          name: 'checkout',
          component: CheckoutView,
        },
        {
          path: '/cart/order-complete/:id',
          name: 'order-complete',
          component: OrderComplete,
        },
      ]
    },
    {
      name: "admin",
      path: "/admin",
      component: AdminLayout,
      redirect: '/dashboard',
      children: [

        {
          path: '/admin',
          name: 'dashboard',
          component: DashboardView,
          meta: { transition: 'fade' },
        },

        {
          path: '/admin/products',
          name: 'Products',
          component: ProductView,
          meta: { transition: 'fade' },
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



  ],


})


export default router
