<template>
<div>
  <v-card v-if="user" class="mt-2" tile>
    <v-list three-line>
      <v-list-item>
        <v-list-item-avatar >
          <v-img v-if="user.imageURL" :src="user.imageURL"></v-img>
          <v-img v-else src="https://cdn.vuetifyjs.com/images/lists/1.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{ user.name }}</v-list-item-title>
          <v-list-item-subtitle>{{ user.id }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-card-actions>
        <v-btn
          color="secondary"
          rounded
          @click="toggleUserInfoDialog"
        >
          詳細
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn color="primary" rounded @click="follow()">フォローする</v-btn>
    </v-card-actions>
  </v-card>
  <EditUserInfoCard
    :visible="UserInfoDialog"
    :user-info="user"
    :close-dialog="closeUserInfoDialog"
  />
</div>
</template>

<script>
import EditUserInfoCard from '@/components/UserInfoCardDialog'

export default {
  components:{
    EditUserInfoCard,
  },
  props: {
    user: {
      type: Object,
      default: null,
    },
    userId: {
      type: String,
      default: null,
    },
    index: {
      type: Number,
      default: null,
    },
  },
  data(){
    return{
      UserInfoDialog: false
    }
  },
  methods: {
    toggleUserInfoDialog() {
      this.UserInfoDialog = !this.UserInfoDialog
    },
    closeUserInfoDialog() {
      this.UserInfoDialog = false
    },
  }
}
</script>
