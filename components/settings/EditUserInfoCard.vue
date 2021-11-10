<template>
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
      <v-spacer></v-spacer>
      <v-btn
        color="primary"
        :disabled="!info.name"
        @click="saveUserInfo(info)"
      >
        保存
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { UserModel } from '@/store/models/UserModel'

export default {
  props: {
    userInfo: {
      type: Object,
      default: null,
    },
    saveUserInfo: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      info: null,
      propety: null,
    }
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
