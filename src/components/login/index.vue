<template>
  <div>
    <form class="login" @submit.prevent="login">
      <h1>Sign in</h1>
      <label>User name</label>
      <input required v-model="email" type="text" placeholder="admin@admin.com"/>
      <label>Password</label>
      <input required v-model="password" type="password" placeholder="admin"/>
      <hr/>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
  import {AUTH_REQUEST} from '../../store/actions/auth'
  export default {
    name: 'login',
    data () {
      return {
        email: 'admin@admin.com',
        password: 'admin',
      }
    },
    methods: {
      login: function () {
        const { email, password } = this;
        this.$store.dispatch(AUTH_REQUEST, { email, password }).then(() => {
          this.$router.push('/')
        })
      }
    },
  }
</script>

<style>
  .login {
    display: flex;
    flex-direction: column;
    width: 300px;
    padding: 10px;
  }
</style>
