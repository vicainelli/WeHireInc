<template>
  <div>
    <div
      class="flex justify-between items-center border-t border-cool-grey-100 p-3"
    >
      <div class="mr-3">
        <avatar class="" :size="60" :username="person.name"></avatar>
      </div>
      <div class="flex-1">
        <p class="m-0 p-0 text-xl font-thin text-cool-grey-500">
          {{ person.name }}
        </p>
        <p class="m-0 p-0 text-base font-bold text-cool-grey-700">
          {{ person.phone }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from 'vue-avatar'

export default {
  props: ['person'],
  components: {
    avatar: Avatar
  }
}
</script>
