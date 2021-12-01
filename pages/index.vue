<template>
  <v-container>
    <UserList :users="users" />
    {{ users }}
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import UserList from '@/components/UserList'

export default {
  components:{
    UserList,
  },
  data(){
    return {
    }
  },
  computed: {
  ...mapGetters({
      users: 'users/list'
    })
  },
  methods:{
    ...mapActions({
    }),
  }
}
</script>


