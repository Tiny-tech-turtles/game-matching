<template>
  <v-footer
    app
    fixed
    padless
  >
    <v-card fixed width="100%">
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
          :to="existAuth"
        >
          <v-icon>mdi-account-cog</v-icon>
        </v-tab>
        <v-tab
          to="/"
        >
          <v-icon>mdi-home</v-icon>
        </v-tab>
        <v-tab
          to="/search"
        >
          <v-icon>mdi-magnify</v-icon>
        </v-tab>
      </v-tabs>
    </v-card>
  </v-footer>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      selected: '',
    }
  },
  computed: {
    ...mapGetters({
      user: 'auth/user',
      uid: 'auth/uid',
    }),
    existAuth() {
      return this.user?.name ? '/profile' : '/settings'
    }
  },
}
</script>