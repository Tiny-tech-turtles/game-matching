<template>
  <v-overlay :opacity="opacity" :z-index="zIndex">
    <div class="white rounded-lg" style="width: 480px" align="center">
      <v-progress-circular indeterminate class="my-12" color="primary" :size="size" />
    </div>
  </v-overlay>
</template>

<script>

export default {
  data() {
    return {
      opacity: 0.1,
      zIndex: 1000,
      size: 100,
    }
  },
}
</script>