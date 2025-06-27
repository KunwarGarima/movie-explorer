<template>
  <v-app>
    <v-layout>
    <AppDrawer />
    <v-main>
      <TopBar />
      <router-view />
    </v-main>
    </v-layout>
  </v-app>
</template>

<script>
import AppDrawer from './components/AppDrawer.vue'
import TopBar from './components/TopBar.vue'

export default {
  components: { AppDrawer, TopBar }
}
</script>
