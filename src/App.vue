<template>
  <div id="app">
    <HeaderApp />
    <router-view />
    <div id="nav"></div>
  </div>
</template>
<script>
import HeaderApp from '@/components/HeaderApp.vue'
export default {
  components: {
    HeaderApp
  }
}
</script>
