<template>
  <div>
    <EditUserInfoCard
      :user-info="user"
      :save-user-info="saveUserInfo"
    />
  </div>
</template>

<script>
import { mapGetters,  mapActions } from 'vuex'
import EditUserInfoCard from '@/components/settings/EditUserInfoCard'

export default {
  components: {
    EditUserInfoCard,
  },
  computed: {
    ...mapGetters({
      user: 'auth/user',
      uid: 'auth/uid',
    }),
    isAdminUser() {
      return this.user.role === 'admin'
    }
  },
  methods: {
    ...mapActions({
      logout: 'auth/logout',
      saveUser: 'auth/saveUser',
      updateUser: 'users/update',
    }),
    async saveUserInfo(userInfo) {
      await this.updateUser({
        userID: this.uid,
        doc: userInfo,
      })
      this.saveUser({ user: userInfo })
    },
  }
}
</script>