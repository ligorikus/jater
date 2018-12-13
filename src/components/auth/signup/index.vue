<template>
    <main>
      <form class="signup" @keyup.enter="signup" @submit.prevent="signup">
        <button>Зарегистрироваться</button>
      </form>
    </main>
</template>

<script>
  export default {
    name: 'sign-up',
    data () {
      return {

      }
    },
    methods: {
      signup: function () {
        console.log('signup');
      }
    },
  }
</script>

<style>

</style>
