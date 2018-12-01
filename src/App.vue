<template>
  <div id="app">
    <header>
      <header-view></header-view>
    </header>
    <router-view/>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import HeaderView from './components/header-view'
  export default {
    name: 'app',
    components: {
      HeaderView
    },
    data () {
      return {
      }
    }
  }
</script>

<style>
  html, body {
    width: 90%;
    margin: 0 auto;
    padding: 0px;
    background: #fafafa;
  }
</style>
