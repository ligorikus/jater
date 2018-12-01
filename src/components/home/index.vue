<template>
  <main>
    <div v-if="isAuthenticated">

    </div>
  </main>
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
