<template>
  <v-container>
    <Loading v-if="isLoading" @loading="loading" />
    <EditUserInfoCard v-if="isVisible" :uid="uid" :user="user" />
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import Loading from '@/components/Loading'
import EditUserInfoCard from '@/components/settings/EditUserInfoCard'
export default {
  components: {
    Loading,
    EditUserInfoCard,
  },
  data() {
    return {
      isLoading: false,
      isVisible: false,
      toEdit: false,
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
      this.isLoading = false
      this.isVisible = true
    },
    loading(waitTime) {
      this.startLoading()
      setTimeout(this.finishLoading, waitTime)
    },
    unVisibleEditUserInfo() {
      new Promise((resolve) => {
        location.reload(() => {
          resolve()
        })
      }).then(() => {
        this.toEdit = false
      })
    },
  },
}
</script>

<style></style>
