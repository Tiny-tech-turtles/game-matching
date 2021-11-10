<template>
  <v-footer
    absolute fixed
    padless
  >
    <v-card absolute fixed width="100%">
      <v-tabs
        v-model="selected"
        background-color="deep-purple accent-4"
        centered
        dark
        grow
        icons-and-text
      >
        <v-tabs-slider></v-tabs-slider>
        <v-tab
          v-for="tab in tabs"
          :key="tab.icon"
          :to="tab.to"
        >
          <v-icon>{{ tab.icon }}</v-icon>
        </v-tab>
      </v-tabs>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data () {
      return {
        selected: '',
        tabs: [
          { title: 'setting', icon: 'mdi-account-cog', to: '/settings' },
          { title: 'home', icon: 'mdi-home', to: '/' },
          { title: 'search', icon: 'mdi-magnify', to: '/search' },
        ]
      }
    },
  }
</script>