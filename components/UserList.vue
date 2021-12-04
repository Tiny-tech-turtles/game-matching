<template>
  <div class="mt-8">
    <UserListItem
      v-for="(user, index) in users"
      :key="user.id"
      :user="user"
      :user-id="user.id"
      :index="index"
    />
  </div>
</template>

<script>

import UserListItem from '@/components/UserListItem'

export default {
  components: {
    UserListItem,
  },
  props: {
    users: {
      type: Array,
      default: () => [],
    },
  },
}
</script>