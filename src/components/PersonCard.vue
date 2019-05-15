<template>
  <div>
    <router-link :to="type + '/' + person.id">
      <div
        class="flex justify-between items-center border-t border-cool-grey-100 p-3 hover:bg-blue-vivid-050"
      >
        <div class="mr-3">
          <avatar class="" :size="48" :username="person.name"></avatar>
        </div>
        <div class="flex-1">
          <p class="m-0 p-0 text-xl font-thin text-cool-grey-500">
            {{ person.name }}
          </p>
          <p class="m-0 p-0 text-base font-bold text-cool-grey-600">
            {{ person.phone }}
          </p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import Avatar from 'vue-avatar'

export default {
  props: ['person', 'type'],
  components: {
    avatar: Avatar
  }
}
</script>
