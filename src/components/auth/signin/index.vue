<template>
  <main>
    <form class="signin" @keyup.enter="signin" @submit.prevent="signin">
      <h1>Sign in</h1>
      <label>User name</label>
      <input required v-model="email" name="email" type="text" placeholder="admin@admin.com"/>
      <label>Password</label>
      <input required v-model="password" name="password" type="password" placeholder="admin"/>
      <hr/>
      <button type="submit">Sign in</button>
    </form>
  </main>
</template>

<script>
  import {AUTH_REQUEST} from '../../../store/actions/auth'
  import { USER_ME } from "../../../store/actions/user";

  export default {
    name: 'sign-in',
    data () {
      return {
        email: '',
        password: '',
      }
    },
    methods: {
      signin: function () {
        const { email, password } = this;
        this.$store.dispatch(AUTH_REQUEST, { email, password }).then(() => {
          this.$store.dispatch(USER_ME);
          this.$router.push('/');
        })
      }
    },
  }
</script>

<style>
  .signin {
    display: flex;
    flex-direction: column;
    width: 300px;
    padding: 10px;
  }
</style>
