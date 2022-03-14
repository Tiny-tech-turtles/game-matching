<template>
  <v-container>
    <v-card
      width="100%"
      persistent
    >
      <v-card-title class="headline">
        ユーザー情報
      </v-card-title>

      <v-card-text>
        <v-text-field :rules="formRules" v-model="info.name" placeholder="名前" />
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
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
import { UserModel } from '@/store/models/UserModel'

export default {
  props: {
    user: {
      type: Object,
      default: null,
    },
    uid: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      info: null,
      propety: null,
    }
  },
  computed: {
    formRules() {
      const required = v => !!v || '必須'
      const format = v => (v.length <= 10) || "10文字以内で入力してください"
      const rules = (this.info.name.length === 0) ? [required]: [format]
      return rules
    }
  },
  created() {
    this.synUserInfo()
    this.propety = UserModel.getPropeties()
  },
  methods: {
    ...mapActions({
      saveUser: 'auth/saveUser',
      updateUser: 'users/update',
    }),
    async saveUserInfo(user) {
      user.name = (user.name.length > 10) ? user.name.slice(0, 10) : user.name
      await this.updateUser({
        userID: this.uid,
        doc: user,
      })
      this.saveUser({ user })
      this.$router.push("/profile")
    },
    synUserInfo() {
      this.info = { ...this.user }
    },
  },
}
</script>
