<template>
  <router-link to="/products/create" tag="button" id="button__create_product">
      Сдать в аренду
  </router-link>
</template>

<script>
    export default {
        name: "create-product-button"
    }
</script>

<style>
  #button__create_product {
    display: inline-block;
    z-index: 99;
    position: absolute;
    top: 85%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 220px;
    height: 40px;
    background: #ddd;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-style: none;
    border-radius: 20px;
    text-align: center;
    line-height: 40px;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);
    cursor: pointer;
  }
</style>
