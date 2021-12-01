<template>
  <v-container>
    <SearchForm />
    <UserList :users="users" />
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import SearchForm from '@/components/SearchForm'
import UserList from '@/components/UserList'

export default {
  components:{
    UserList,
    SearchForm,
  },
  data(){
    return{

    }
  },
  computed: {
    ...mapGetters({
      users: 'users/list'
    })
  },
  methods: {
    ...mapActions({
    }),
    searsh(text){
      console.log(text)
    }
  }
}
</script>