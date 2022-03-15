<template>
  <v-container>
    <v-card class="user-info-card" persistent>
      <h3 class="headline">ユーザー情報</h3>
      <v-card-title>
        <v-row>
          <v-col cols="3">
            <div
              @dragover.prevent
              @drop.prevent="dropFiles($event)"
              @click="dropAreaClick"
            >
              <v-img class="avatar-image" :src="avatarImage" />
              <v-file-input
                ref="input"
                accept="image/*"
                multiple
                style="display: none"
                @change="addFiles($event)"
              />
            </div>
          </v-col>
          <v-col cols="9">
            <v-text-field
              v-model="info.name"
              :rules="formRules"
              placeholder="名前"
            />
            <v-text-field v-model="info.id" placeholder="ID" />
            <v-text-field v-model="info.age" placeholder="年齢" />
          </v-col>
        </v-row>
      </v-card-title>

      <v-divider />

      <v-card-text>
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
      default: '',
    },
  },
  data() {
    return {
      info: null,
      propety: null,
      avatarImage: '',
    }
  },
  computed: {
    formRules() {
      const required = (v) => !!v || '必須'
      const format = (v) => v.length <= 10 || '10文字以内で入力してください'
      const rules = this.info.name.length === 0 ? [required] : [format]
      return rules
    },
  },
  created() {
    this.avatarImage = '/avatar.png'
    this.synUserInfo()
    this.propety = UserModel.getPropeties()
  },
  methods: {
    ...mapActions({
      saveUser: 'auth/saveUser',
      updateUser: 'users/update',
    }),
    async saveUserInfo(user) {
      user.name = user.name.length > 10 ? user.name.slice(0, 10) : user.name
      await this.updateUser({
        userID: this.uid,
        doc: user,
      })
      this.saveUser({ user })
      this.$router.push('/profile')
    },
    synUserInfo() {
      this.info = { ...this.user }
      this.avatarImage = this.info.avatarImageUrl
    },
    dropAreaClick() {
      this.$refs.input.$refs.input.click()
    },
    dropFiles(event) {
      const files = Array.from(event.dataTransfer?.files)
      this.addFiles(files)
    },
    addFiles(files) {
      if (files[0]) {
        this.avatarImage = URL?.createObjectURL(files[0])
        this.info.avatarImageUrl = this.avatarImage
      }
    },
  },
}
</script>

<style>
.avatar-image {
  padding-left: 50px;
  padding-top: 50px;
  margin-right: 20px;
  max-width: 100px;
  border-radius: 100%;
}
</style>
