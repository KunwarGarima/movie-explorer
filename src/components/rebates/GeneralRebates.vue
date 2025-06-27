<template>
    <v-card>
      <div>
        <v-tabs
          v-model="tab"
           slider-color="orange-darken-2"
          bg-color="white"
          selected-class="text-black bg-white"
          class="text-none"

        >
          <v-tab
            text="General"
            value="general"
            class="text-none"
            :class="tab === 'general' ? 'text-black font-weight-bold' : 'bg-grey-lighten-5 text-black'"
           
          ></v-tab>
          <v-tab
          class="text-none"
            text="Pricing"
            value="pricing"
            :class="tab === 'pricing' ? 'text-black font-weight-bold' : 'bg-grey-lighten-5 text-black'"
          ></v-tab>
          <v-tab
            text="Comments"
            value="comments"
            class="text-none"
            :class="tab === 'comments' ? 'text-black font-weight-bold' : 'bg-grey-lighten-5 text-black'"
          ></v-tab>
        </v-tabs>
  
        <v-tabs-window v-model="tab">
          <v-tabs-window-item value="general">
            <div class="pa-4">
          <GeneralData/>
           
          </div>
          </v-tabs-window-item>
  
          <v-tabs-window-item value="pricing">
            <v-card flat>
              <v-card-text>
                <p>
                  Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
                </p>
                <p>
                  Suspendisse feugiat. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In hac habitasse platea dictumst. Fusce ac felis sit amet ligula pharetra condimentum.
                </p>
                <p>
                  Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Nam commodo suscipit quam. In consectetuer turpis ut velit. Sed cursus turpis vitae tortor. Aliquam eu nunc.
                </p>
                <p>
                  Etiam ut purus mattis mauris sodales aliquam. Ut varius tincidunt libero. Aenean viverra rhoncus pede. Duis leo. Fusce fermentum odio nec arcu.
                </p>
                <p class="mb-0">
                  Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
                </p>
              </v-card-text>
            </v-card>
          </v-tabs-window-item>
  
          <v-tabs-window-item value="comments">
            <v-card flat>
              <v-card-text>
                <p>
                  Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
                </p>
                <p class="mb-0">
                  Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis.
                </p>
              </v-card-text>
            </v-card>
          </v-tabs-window-item>
        </v-tabs-window>
      </div>
    </v-card>
  </template>
  
  <script>
  import GeneralData from "./GeneralData.vue"
  export default {
    components:{
        GeneralData
    },
  
    data: () => ({
      tab: 'general',
      headers: [
      { title: 'Program Name', key: 'program' },
      { title: 'Cash Type', key: 'cashType' },
      { title: 'Price', key: 'price' },
      { title: 'Status', key: 'status' },
      { title: 'Vehicles', key: 'vehicles' },
      { title: 'Actions', key: 'actions', sortable: false },
    ],
    rebates: [
      {
        id: 1,
        program: 'Retail Customer Bonus',
        cashType: 'Consumer Cash',
        price: -1000,
        status: 'ACTIVE',
        vehicles: 12,
      },
      {
        id: 2,
        program: 'Dealer Cash Program',
        cashType: 'Dealer Cash',
        price: -1500,
        status: 'UNPUBLISHED',
        vehicles: 8,
      },
      {
        id: 3,
        program: 'Seasonal Discount',
        cashType: 'Consumer Cash',
        price: -2000,
        status: 'INACTIVE',
        vehicles: 5,
      },
    ],
    }),
    methods: {
    statusColor(status) {
      switch (status.toUpperCase()) {
        case 'ACTIVE':
          return 'blue';
        case 'PUBLISHED':
          return 'green';
        case 'UNPUBLISHED':
          return 'pink';
        case 'INACTIVE':
          return 'orange';
        default:
          return 'grey';
      }
    },
  },
  }
  </script>