<template>
  <v-dialog
    v-if="info"
    v-model="isShown"
    width="500"
    persistent
    @keydown.esc="closeDialog"
    @click:outside="closeDialog"
  >
    <v-card
      width="100%"
      persistent
    >
      <v-card-title class="headline">
        ユーザー情報
      </v-card-title>

      <v-card-text>
        <v-row>
          <v-col cols="3"><p class="text-subtitle-1">名前</p></v-col>
          <v-col cols="9"><p class="text-h6">{{ info.name }}</p></v-col>
          <v-col cols="3"><p class="text-subtitle-1">ID</p></v-col>
          <v-col cols="9"><p class="text-h6">{{ info.id }}</p></v-col>
          <v-col cols="3"><p class="text-subtitle-1">年齢</p></v-col>
          <v-col cols="9"><p class="text-h6">{{ info.age }}</p></v-col>
          <v-col cols="3"><p class="text-subtitle-1">レベル</p></v-col>
          <v-col cols="9"><p class="text-h6">{{ info.level }}</p></v-col>
          <v-col cols="3"><p class="text-subtitle-1">デバイス</p></v-col>
          <v-col cols="9"><p class="text-h6">{{ info.devicese }}</p></v-col>
          <v-col cols="3"><p class="text-subtitle-1">ジャンル</p></v-col>
          <v-col cols="9"><p class="text-h6">{{ info.genrese }}</p></v-col>
          <v-col cols="3"><p class="text-subtitle-1">タイプ</p></v-col>
          <v-col cols="9"><p class="text-h6">{{ info.type }}</p></v-col>
        </v-row>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-btn @click="closeDialog">閉じる</v-btn>
        <v-spacer></v-spacer>
        <v-btn v-if="isFollowed" color="primary" rounded>フォロー中</v-btn>
        <v-btn v-else color="primary" rounded @click="followUser()">フォローする</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { UserModel } from '@/store/models/UserModel'

export default {
  props: {
    visible: {
      type: Boolean,
      required: true,
    },
    userInfo: {
      type: Object,
      default: null,
    },
    closeDialog: {
      type: Function,
      required: true,
    },
    followUser: {
      type: Function,
      required: true
    },
    isFollowed:{
      type: Boolean,
      require: true
    }
  },
  data() {
    return {
      info: null,
      isShown: null,
      propety: null,
    }
  },
  watch: {
    visible(value) {
      this.isShown = value
    },
    userInfo() {
      this.synUserInfo()
    },
  },
  created() {
    this.synUserInfo()
    this.propety = UserModel.getPropeties()
  },
  methods: {
    synUserInfo() {
      this.info = { ...this.userInfo }
    },
  },
}
</script>