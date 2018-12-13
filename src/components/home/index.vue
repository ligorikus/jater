<template>
  <main>
    <div class="search__form">
      <form action="">
        <div class="search__text">
          <input class="search__text_input" type="text" aria-hidden="true" tabindex="-1" placeholder="Type to search">
          <a href="#" class="search__button"><i class="fas fa-search"></i></a>
        </div>
      </form>
    </div>
    <create-product-button></create-product-button>
  </main>
</template>

<style>
  main {
    display: -webkit-flex;
    display: -moz-flex;
    display: flex;
    flex-direction: column;
  }
  .search__form {
    display: -webkit-flex;
    display: -moz-flex;
    display: flex;
    justify-content: center;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 560px;
  }
  .search__text {
    width: 498px;
    border: none;
    -webkit-border-radius: 22px;
    -moz-border-radius: 22px;
    border-radius: 22px;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);
    transition: opacity 200ms;
    padding: 13px;
    display: flex;
    height: 18px;
    background: #ddd;
  }
  .search__text_input {
    position: absolute;
    top: 5px;
    bottom: 0;
    left: 0;
    background: transparent;
    border: none;
    margin: 0;
    width: 100%;
    box-sizing: border-box;
    padding: 0 40px 0 18px;
    font-size: 16px;
    outline: none;
  }
  .search__button {
    color: black;
    display: block;
    position: absolute;
    right: 15px;
  }
</style>

<script>
  import { mapGetters } from 'vuex'
  import CreateProductButton from '../products/create/product-button'
  export default {
    name: 'home',
    components: {
      CreateProductButton
    },
    computed: {

    },
    data () {
      return {
      }
    },
  }
</script>
