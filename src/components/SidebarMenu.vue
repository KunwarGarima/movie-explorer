<template>
  <v-list nav density="compact">
    <v-list-item prepend-icon="mdi-view-dashboard" title="Dashboard" color="orange"  to="/"
    
    />

    <template v-for="group in menuGroups" :key="group.title">
      <v-list-group
        v-if="group.children && group.children.length"
        v-model="expandedGroups[group.model]"
        :prepend-icon="group.icon"
      >
        <template #activator="{ props }">
          <v-list-item v-bind="props" :title="group.title" />
        </template>

        <v-list-item
          v-for="(child, index) in group.children"
          :key="index"
          :title="child.title"
          :prepend-icon="child.icon"
          :to="child.to"
        router
        exact
        color="orange-darken-2"
        />
      </v-list-group>

      <v-list-item
        v-else
        :prepend-icon="group.icon"
        :title="group.title"
        :to="group.to"
      router
      exact
      color="orange-darken-2"
      />
    </template>
  </v-list>
</template>

<script>
export default {
  props: {
    menuGroups: Array,
    expandedGroups: Object,
  }
}
</script>
