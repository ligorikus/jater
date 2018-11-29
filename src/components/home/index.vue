<template>
  <div>
    <div v-if="isAuthenticated">
      <h1>Welcome to Jater!</h1>
    </div>
  </div>
</template>

<style>

</style>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'home',
    computed: {
      ...mapGetters(['isAuthenticated', 'authStatus']),
      loading: function () {
        return this.authStatus === 'loading' && !this.isAuthenticated
      }
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
  }
</script>
