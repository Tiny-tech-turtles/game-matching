<template>
  <v-app>
    <v-main>
      <Nuxt />
    </v-main>
    <TabBer />
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'
import TabBer from '@/components/TabBer'
export default {
  components:{
    TabBer,
  },
  async created(){
    await this.setUsersRef()
  },
  methods: {
    ...mapActions({
      setUsersRef: 'users/setListRef',
    }),
  }
}
</script>
