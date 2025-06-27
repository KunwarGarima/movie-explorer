<template>
    <v-navigation-drawer
      v-model="drawer"
      :rail="rail"
      permanent
      @click="rail = false"
      class="sidebar"
     
    >
      <UserInfo />
      <v-btn
        icon
        class="toggle-btn"
        @click.stop="rail = !rail"
        variant="flat"
      >
        <v-icon>{{ rail ? 'mdi-chevron-right' : 'mdi-chevron-left' }}</v-icon>
      </v-btn>
  
      <v-divider class="my-2" />
      <SidebarMenu
        :menu-groups="menuGroups"
        :expanded-groups="expandedGroups"
      />
    </v-navigation-drawer>
  </template>
  
  <script>
  import UserInfo from './UserInfo.vue'
  import SidebarMenu from './SidebarMenu.vue'
  
  export default {
    components: {
      UserInfo,
      SidebarMenu,
    },
    data() {
      return {
        drawer: true,
        rail: true,
        expandedGroups: {
          rebatesExpanded: false,
          pricingExpanded: true,
        },
        menuGroups: [
          {
            title: 'Pricing Offers',
            icon: 'mdi-tag-outline',
            model: 'pricingExpanded',
            children: [
              { title: 'Dashboard', icon: 'mdi-view-dashboard' },
              { title: 'Add/Edit', icon: 'mdi-pencil' },
              { title: 'Rebates List', icon: 'mdi-format-list-bulleted' }
            ]
          },
          {
            title: 'Marketing',
            icon: 'mdi-volume-high',
            children: [
              { title: 'Dashboard', icon: 'mdi-view-dashboard' },
              { title: 'Add/Edit', icon: 'mdi-pencil' },
              { title: 'Rebates List', icon: 'mdi-format-list-bulleted' }
            ]
          },
          {
            title: 'CMS',
            icon: 'mdi-cog-outline',
            children: [
              { title: 'Dashboard', icon: 'mdi-view-dashboard' },
              { title: 'Add/Edit', icon: 'mdi-pencil' },
              { title: 'Rebates List', icon: 'mdi-format-list-bulleted' }
            ]
          },
          {
            title: 'Inventory',
            icon: 'mdi-clipboard-list-outline',
            children: [
              { title: 'Dashboard', icon: 'mdi-file-document-outline' },
              { title: 'Add/Edit', icon: 'mdi-package-variant' },
              { title: 'Rebates List', icon: 'mdi-format-list-bulleted' }
            ]
          },
          {
            title: 'Requests',
            icon: 'mdi-format-list-checkbox',
            children: [
              { title: 'Dashboard', icon: 'mdi-file-document-outline' },
              { title: 'Add/Edit', icon: 'mdi-package-variant' },
              { title: 'Rebates List', icon: 'mdi-format-list-bulleted' }
            ]
          },
          {
            title: 'Analytics',
            icon: 'mdi-google-analytics',
            children: [
              { title: 'Dashboard', icon: 'mdi-chart-bar' },
              { title: 'Add/Edit', icon: 'mdi-pencil' },
              { title: 'Rebates List', icon: 'mdi-format-list-bulleted' }
            ]
          },
          {
            title: 'SEO',
            icon: 'mdi-magnify',
            children: [
              { title: 'Dashboard', icon: 'mdi-magnify' },
              { title: 'Add/Edit', icon: 'mdi-pencil' },
              { title: 'Rebates List', icon: 'mdi-format-list-bulleted' }
            ]
          },
          {
            title: 'Automation',
            icon: 'mdi-link',
            children: [
              { title: 'Dashboard', icon: 'mdi-link-variant' },
              { title: 'Add/Edit', icon: 'mdi-pencil' },
              { title: 'Rebates List', icon: 'mdi-format-list-bulleted' }
            ]
          },
          {
            title: 'Apps & Integrations',
            icon: 'mdi-puzzle-outline',
            children: [
              { title: 'Dashboard', icon: 'mdi-puzzle-outline' },
              { title: 'Add/Edit', icon: 'mdi-pencil' },
              { title: 'Rebates List', icon: 'mdi-format-list-bulleted' }
            ]
          },
          {
            title: 'Administration',
            icon: 'mdi-shield-account-outline',
            children: [
              { title: 'Dashboard', icon: 'mdi-account-cog-outline' },
              { title: 'Add/Edit', icon: 'mdi-pencil' },
              { title: 'Rebates List', icon: 'mdi-format-list-bulleted' }
            ]
          },
          {
            title: 'Root',
            icon: 'mdi-shape-outline',
            children: [
              { title: 'Dashboard', icon: 'mdi-apps' },
              { title: 'Add/Edit', icon: 'mdi-pencil' },
              { title: 'Rebates List', icon: 'mdi-format-list-bulleted' }
            ]
          }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .sidebar {
    position: relative;
  }
  
  .toggle-btn {
    position: absolute;
    top: 10px;
    right: -20px;
    z-index: 10;
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 50%;
  }
  </style>
  