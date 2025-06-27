<template>
    <v-card class="pt-1">
      <div>
        <v-tabs
          v-model="tab"
          
          color="black"
          bg-color="white"
          selected-class="text-black bg-white"
          class="text-none"
          hide-slider
        >
          <v-tab
            append-icon="mdi-close"
            text="Rebates List"
            value="option-1"
            class="text-none"
            :class="tab === 'option-1'
                ? 'text-black font-weight-bold'
                : 'bg-grey-lighten-3 text-black'"
          ></v-tab>
          <v-tab
          class="text-none"
            text="1Sep 2024 - 10 Oct 2024"
            value="option-2"
            :class="tab === 'option-2'
                ? 'text-black font-weight-bold'
                : 'bg-grey-lighten-3 text-black'"
          ></v-tab>
          <v-tab
            text="15 Dec 2024 - 1 Jan 2023"
            value="option-3"
            class="text-none"
            :class="tab === 'option-3'
                ? 'text-black font-weight-bold'
                : 'bg-grey-lighten-3 text-black'"
          ></v-tab>
        </v-tabs>
  
        <v-tabs-window v-model="tab">
          <v-tabs-window-item value="option-1">
           <GeneralRebates/>
          </v-tabs-window-item>
  
          <v-tabs-window-item value="option-2">
            <v-card flat>
              <v-card-text>
                <p>
                  Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
                </p>
                <p>
                  Suspendisse feugiat. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In hac habitasse platea dictumst. Fusce ac felis sit amet ligula pharetra condimentum.
                </p>
               
              </v-card-text>
            </v-card>
          </v-tabs-window-item>
  
          <v-tabs-window-item value="option-3">
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
  import GeneralRebates from '../components/rebates/GeneralRebates.vue'
  export default {
    components:{
        GeneralRebates
    },
    data: () => ({
      tab: 'option-1',
    }),
  }
  </script>