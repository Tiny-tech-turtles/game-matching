<template>
  <v-container>
    <UserList :users="followUsers" />
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import UserList from '@/components/UserList'

export default {
  components: {
    UserList,
  },
  data() {
    return {
      followUsers: [],
    }
  },
  computed: {
    ...mapGetters({
      users: 'users/list',
      user: 'auth/user',
    }),
  },
  mounted() {
    this.users.forEach((user) => {
      if (
        this.user?.followUsers.some((followuser) => followuser.id === user.id)
      ) {
        this.followUsers.push(user)
      }
    })
  },
  methods: {
    ...mapActions({}),
  },
}
</script>
