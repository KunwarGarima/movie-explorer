<template>
    <v-app-bar app   color="white" class=" px-4"   density="compact">
      <v-text-field
        variant="text"
        placeholder="Search"
        prepend-inner-icon="mdi-magnify"
        hide-details
        density="comfortable"
        class="search-bar"
      />
  
      <v-spacer />
      <v-menu>
        <template #activator="{ props }">
          <v-btn
            v-bind="props"
            variant="text"
            class="text-capitalize font-weight-medium"
          >
            EN
            <v-icon end size="18">mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item title="English" />
          <v-list-item title="Dutch" />
        </v-list>
      </v-menu>
      <v-btn icon>
        <v-icon>mdi-earth</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-bell-outline</v-icon>
      </v-btn>
      <v-avatar size="32" class="ml-3 mr-2">
        <img src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y" alt="User Avatar"   width="63"
        height="30" />
      </v-avatar>
    </v-app-bar>
  </template>
  
  
  