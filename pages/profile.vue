<template>
  <v-container>
      <Loading v-if="isLoading" @loading="loading" />
      <ProfileDetail v-if="isVisible" :user="user" :uid="uid" />
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import Loading from '@/components/Loading'
import ProfileDetail from '@/components/ProfileDetail'

export default {
  components: {
    Loading,
    ProfileDetail
  },
  data() {
    return {
      isVisible: false,
      isLoading: false,
    }
  },
  computed: {
    ...mapGetters({
      user: 'auth/user',
      uid: 'auth/uid',
    }),
  },
  created() {
    this.loading(3000)
  },
  methods: {
    startLoading() {
      this.isLoading = true
    },
    finishLoading() {
      this.isVisible=true
      this.isLoading = false
    },
    loading(waitTime) {
      this.startLoading()
        setTimeout(this.finishLoading, waitTime)
    }
  },
}
</script>

<style>

</style>