<template>
  <v-container>
    <v-row class="justify-end">
      <v-btn to="/settings">プロフィールの編集</v-btn>
    </v-row>
    <v-row>
      <v-card class="user-info-card" persistent>
        <v-img class="background-image" :src="info.backgroundImageUrl" />
        <v-card-title>
          <v-row>
            <v-col cols="3">
              <v-img class="avatar-image" :src="info.avatarImageUrl" />
            </v-col>
            <v-col cols="9">
              <p class="name-style headline">
                {{ info.name }} ({{ info.age }})
              </p>
              <v-card-subtitle class="id-style text-h7"
                >@{{ info.id }}</v-card-subtitle
              >
            </v-col>
          </v-row>
        </v-card-title>

        <v-divider />

        <v-card-text>
          <v-row>
            <v-col cols="3"><p class="text-subtitle-1">レベル</p></v-col>
            <v-col cols="9"
              ><p class="text-h6">{{ info.level }}</p></v-col
            >
            <v-col cols="3"><p class="text-subtitle-1">デバイス</p></v-col>
            <v-col cols="9"
              ><p class="text-h6">{{ info.devicese }}</p></v-col
            >
            <v-col cols="3"><p class="text-subtitle-1">ジャンル</p></v-col>
            <v-col cols="9">
              <p
                v-for="genre in separatedGenrese"
                :key="genre[0]"
                class="text-h6"
              >
                {{ genre[0] }}, {{ genre[1] }}
              </p>
            </v-col>
            <v-col cols="3"><p class="text-subtitle-1">タイプ</p></v-col>
            <v-col cols="9"
              ><p class="text-h6">{{ info.type }}</p></v-col
            >
          </v-row>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
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
      separatedGenrese: [],
    }
  },
  created() {
    this.$emit('loading', 3000)
    this.synUserInfo()
    this.separateGenrese()
  },
  methods: {
    synUserInfo() {
      this.info = { ...this.user }
    },
    separateGenrese() {
      for (let i = 0; i < this.info.genrese.length; i += 2) {
        this.separatedGenrese.push(this.info.genrese.slice(i, i + 2))
      }
    },
  },
}
</script>

<style>
.user-info-card {
  margin-top: 20px;
}
.background-image {
  max-height: 300px;
}
.avatar-image {
  padding-left: 50px;
  padding-top: 50px;
  margin-right: 20px;
  max-width: 100px;
  border-radius: 100%;
}
.name-style {
  margin-top: 16px;
}
.id-style {
  padding-left: 0px;
  padding-top: 0px;
}
</style>
