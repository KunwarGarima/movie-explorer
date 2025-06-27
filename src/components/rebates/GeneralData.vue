<template>
    <div class="p-4">
        <v-toolbar flat density="comfortable"  class="bg-transparent">
  <v-toolbar-items >
    <v-btn variant="text" density="comfortable" class="text-medium text-none text-black">
      <v-icon start>mdi-magnify</v-icon>
      Search
    </v-btn>
    <v-btn variant="text" density="comfortable" class="text-medium text-none text-black">
      <v-icon start>mdi-filter-outline</v-icon>
      Filters
    </v-btn>

    <v-btn variant="text" density="comfortable" class="text-medium text-none text-black">
      <v-icon start>mdi-dots-triangle</v-icon>
      Group by
    </v-btn>
  </v-toolbar-items>
  <v-spacer></v-spacer>
  <v-btn  class="bg-orange-darken-2 text-white text-none" >
    + Add rebate
  </v-btn>
</v-toolbar>
      <v-data-table
      :headers="headers"
      :items="filteredItems"
      :items-per-page="12"
      item-value="id"
      show-select
   class="elevation-1 custom-header"
    >
      <template #item.status="{ item }">
        <v-chip
      class="ma-2"
     :color="statusColor(item.status)"
      label
       size="small"
    >
     
      {{ item.status.toUpperCase() }}
    </v-chip>
     
      </template>
      <template #item.price="{ item }">
        <span class="font-medium">-${{ item.price }}</span>
      </template>
      <template #item.action="{ item }">
  <div class="d-flex align-center justify-start" style="gap: 15px;">
    <div class="d-flex flex-column align-center">
      <span class="text-sm font-weight-medium">{{ item.vehicles }}</span>
      <span class="text-caption">Vehicles</span>
    </div>
    <v-switch
      v-model="item.enabled"
      density="compact"
      hide-details
    ></v-switch>
    <v-menu>
      <template #activator="{ props }">
        <v-btn icon variant="text" size="x-small" v-bind="props">
          <v-icon size="18">mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item title="Edit" />
        <v-list-item title="Delete" />
      </v-list>
    </v-menu>
  </div>
</template>
<template #bottom>
  <div class="d-flex justify-end align-center px-4 py-2">
    <v-btn
      icon
      variant="text"
      @click="page--"
    >
      <v-icon>mdi-chevron-left</v-icon>
    </v-btn>
    <v-btn
      v-for="pg in pageCount"
      :key="pg"
      variant="flat"
      size="small"
      class="mx-1"
      :color="pg === page ? 'orange-darken-2' : 'grey-lighten-7'"
      :class="pg === page ? 'text-white font-weight-bold' : 'text-black'"
      @click="page = pg"
    >
      {{ pg }}
    </v-btn>
    <v-btn
      icon
      variant="text"
      @click="page++"
    >
      <v-icon>mdi-chevron-right</v-icon>
    </v-btn>
  </div>
</template>
      
    </v-data-table>
    </div>
  </template>
  
  <script>
  export default {
    data () {
      return {
        search: '',
        filterLocation: '',
        page: 1,
    itemsPerPage: 5,
        headers: [
        { title: 'Period', key: 'period', headerProps: { class: 'text-grey-darken-1' }},
        { title: 'Status', key: 'status', class: 'text-grey-darken-1' },
        { title: 'Program Name', key: 'programName', class: 'text-grey-darken-1' },
        { title: 'Cash Type', key: 'cashType', class: 'text-grey-darken-1' },
        { title: 'Price', key: 'price', class: 'text-grey-darken-1' },
        { title: 'Actions', key: 'action',class: 'text-grey-darken-1' },
        // align: 'end',        
        // sortable: false
        ],
      items: [
        {
          id: 1,
          period: '1 Sept 2024 - 10 Oct 2024',
          status: 'active',
          programName: 'Sept - Oct 2024 Retail Customer Bonus',
          cashType: 'Dealer Cash',
          price: 1000,
          vehicles: 10,
          enabled: true
        },
        {
          id: 2,
          period: '1 Oct 2024 - 14 Nov 2024',
          status: 'published',
          programName: 'Oct - Nov 2024 Retail Customer Bonus',
          cashType: 'Consumer Cash',
          price: 5000,
          vehicles: 8,
          enabled: false
        },
        {
          id: 3,
          period: '15 Dec 2024 - 1 Jan 2025',
          status: 'unpublished',
          programName: 'Dec - Jan 2025 Retail Customer Bonus',
          cashType: 'Dealer Cash',
          price: 2000,
          vehicles: 6,
          enabled: false
        },
        {
          id: 4,
          period: '7 Jan 2023 - 1 Feb 2023',
          status: 'inactive',
          programName: 'Jan - Feb 2023 Retail Customer Bonus',
          cashType: 'Consumer Cash',
          price: 1000,
          vehicles: 2,
          enabled: false
        },
        {
          id: 5,
          period: '7 Jan 2023 - 1 Feb 2023',
          status: 'inactive',
          programName: 'Jan - Feb 2023 Retail Customer Bonus',
          cashType: 'Consumer Cash',
          price: 1000,
          vehicles: 2,
          enabled: false
        },
        {
          id: 6,
          period: '7 Jan 2023 - 1 Feb 2023',
          status: 'inactive',
          programName: 'Jan - Feb 2023 Retail Customer Bonus',
          cashType: 'Consumer Cash',
          price: 1000,
          vehicles: 2,
          enabled: false
        },
        {
          id: 7,
          period: '7 Jan 2023 - 1 Feb 2023',
          status: 'inactive',
          programName: 'Jan - Feb 2023 Retail Customer Bonus',
          cashType: 'Consumer Cash',
          price: 1000,
          vehicles: 2,
          enabled: false
        }
      ]
      }
    },
    computed: {
  
    uniqueLocations () {
      return [...new Set(this.items.map(item => item.location))]
    },
    filteredItems() {
      return this.items.filter(item =>
        item.period.toLowerCase().includes(this.search.toLowerCase())
      )
    },
    pageCount() {
      return Math.ceil(this.filteredItems.length / 5);
    },
  pagesToShow() {
    const maxPages = 5
    const half = Math.floor(maxPages / 2)
    let start = Math.max(1, this.page - half)
    let end = Math.min(start + maxPages - 1, this.pageCount)

  
    if (end - start < maxPages - 1) {
      start = Math.max(1, end - maxPages + 1)
    }

    const pages = []
    for (let i = start; i <= end; i++) {
      pages.push(i)
    }
    return pages
  }
  },

  methods: {
    statusColor(status) {
      switch (status.toLowerCase()) {
        case 'active': return 'green';
        case 'inactive': return 'grey';
        case 'published': return 'blue';
        case 'unpublished': return 'red';
        default: return 'orange';
      }
    }
  }
  }
  </script>
  <style>
  .custom-header thead tr {
    background-color: #f5f5f5 !important;
    color: #757575;
}

</style>
  

  