<template>
  <DHeaderText title="Dashboard" :size=40 />

  <DashboardPanel />

  <UserTable :users="users" />
</template>
 
<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";
import type User from "@/types/User";
import UserTable from "@/components/admin/Tables/UserTable.vue";
import DashboardPanel from '@/components/admin/Cards/DashboardPanel.vue';
import DHeaderText from '@/components/admin/UI/DHeaderText.vue';



const users: User[] = [
  {
    id: 1,
    name: 'Danladi Yaro',
    email: 'danladiyaro@mail.com',
    phone: '08023453311',
    type: 'Buyer',
    transactions: '₦ 20,000,483.00',
    dateJoined: '12/09/2021 12:35 am',
    status: true,
    orders: "N30,000.00"
  },
  {
    id: 2,
    name: 'Danladi Yaro',
    email: 'danladiyaro@mail.com',
    phone: '08023453311',
    type: 'Buyer',
    transactions: '₦ 20,000,483.00',
    dateJoined: '12/09/2021 12:35 am',
    status: false,
    orders: "N30,000.00"
  },
  {
    id: 3,
    name: 'Danladi Yaro',
    email: 'danladiyaro@mail.com',
    phone: '08023453311',
    type: 'Seller',
    transactions: '₦ 20,000,483.00',
    dateJoined: '12/09/2021 12:35 am',
    status: true,
    orders: "N30,000.00"
  },
  {
    id: 4,
    name: 'Danladi Yaro',
    email: 'danladiyaro@mail.com',
    phone: '08023453311',
    type: 'Buyer',
    transactions: '₦ 20,000,483.00',
    dateJoined: '12/09/2021 12:35 am',
    status: false,
    orders: "N30,000.00"
  },
  {
    id: 5,
    name: 'Danladi Yaro',
    email: 'danladiyaro@mail.com',
    phone: '08023453311',
    type: 'Seller',
    transactions: '₦ 20,000,483.00',
    dateJoined: '12/09/2021 12:35 am',
    status: true,
    orders: "N30,000.00"
  },
  {
    id: 6,
    name: 'Danladi Yaro',
    email: 'danladiyaro@mail.com',
    phone: '08023453311',
    type: 'Buyer',
    transactions: '₦ 20,000,483.00',
    dateJoined: '12/09/2021 12:35 am',
    status: false,
    orders: "N30,000.00"
  },

  // More plans...
]

export default defineComponent({
  components: { UserTable, DashboardPanel, DHeaderText },

  setup() {
    return { users };
  },
});
</script>