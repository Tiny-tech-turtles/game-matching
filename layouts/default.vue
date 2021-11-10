<template>
  <v-app>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <TabBer />
  </v-app>
</template>
<script>
import TabBer from '@/components/TabBer'
export default {
  components:{
    TabBer
  }
}
</script>
