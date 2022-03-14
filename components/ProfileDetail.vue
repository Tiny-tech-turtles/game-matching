<template>
  <v-container>
    <v-row class="justify-end">
      <v-btn to="/settings">プロフィールの編集</v-btn>
    </v-row>
    <v-row>
      <v-card class="user-info-card" persistent>
        <v-card-title class="headline">
          {{ info.name }} ({{ info.age }})
        </v-card-title>

        <v-card-subtitle class="text-h7"> @{{ info.id }} </v-card-subtitle>

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
</style>
