<template>
  <div>
    <v-row justify='center'> 
      <v-col cols="7">
        <v-text-field
          v-model="word"
        ></v-text-field>
      </v-col>
      <v-col cols="1">
        <v-btn icon class="mt-3">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  export default {
  data () {
    return {
      word: '',
    }
  },
  methods: {
    search(){

      this.word = ''
    }
  }
}
</script>