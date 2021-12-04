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
        <v-text-field v-model="info.name" placeholder="名前" />
        <v-text-field v-model="info.id" placeholder="ID" />
        <v-text-field v-model="info.age" placeholder="年齢" />
        <v-select
          v-model="info.level"
          placeholder="レベル"
          :items="propety.levels"
        />
        <v-select
          v-model="info.devicese"
          placeholder="デバイス"
          multiple
          :items="propety.devicese"
        />
        <v-select
          v-model="info.genrese"
          placeholder="ジャンル"
          multiple
          :items="propety.genrese"
        />
        <v-select
          v-model="info.type"
          placeholder="タイプ"
          :items="propety.typese"
        />
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-btn @click="closeDialog">閉じる</v-btn>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          @click="follow(user)"
        >
          フォローする
        </v-btn>
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