<template>
  <DHeaderText title="Users" />

  <div class="mb-4 "></div>

  <DFilterPanel />

  <UserTable :users="users" />
</template>
 
<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";
import type User from "@/types/User";
import UserTable from "@/components/admin/Tables/UserTable.vue";
import DHeaderText from '@/components/admin/UI/DHeaderText.vue';
import DFilterPanel from '@/components/admin/UI/DFilterPanel.vue';


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

  {
    id: 7,
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
    id: 8,
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
    id: 9,
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
    id: 10,
    name: 'Danladi Yaro',
    email: 'danladiyaro@mail.com',
    phone: '08023453311',
    type: 'Buyer',
    transactions: '₦ 20,000,483.00',
    dateJoined: '12/09/2021 12:35 am',
    status: false,
    orders: "N30,000.00"
  },


]

export default defineComponent({
  components: { UserTable, DHeaderText, DFilterPanel },

  setup() {
    return { users };
  },
});
</script>