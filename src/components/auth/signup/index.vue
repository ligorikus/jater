<template>
    <main>
      <form class="signup" @keyup.enter="signup" @submit.prevent="signup">
        <div class="form-group form__signup">
          <label for="username">Username</label>
          <input type="text" v-model="username" name="username" class="form-control">
          <label for="email">Email</label>
          <input type="email" v-model="email" name="email" class="form-control">
          <label for="password">Password</label>
          <input type="password" v-model="password" name="password" class="form-control">
          <button class="btn btn-primary form-control">Зарегистрироваться</button>
        </div>
      </form>
    </main>
</template>

<script>
  export default {
    name: 'sign-up',
    data () {
      return {
        username: '',
        email: '',
        password: ''
      }
    },
    methods: {
      signup: function () {
        console.log(this.username);
      }
    },
  }
</script>

<style>
  label {
    display: inline-block;
    margin-bottom: .5rem;
  }
  .form-group {
    margin-bottom: 1rem;
  }
  .form-control {
    display: block;
    width: 100%;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  }

  .btn {
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    cursor: pointer;
  }

  .btn-primary {
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
  }

  .form__signup {
    width: 60%;
    margin: 0 auto;
  }


</style>
