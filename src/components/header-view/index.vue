<template>
  <div class="header">
    <div class="header__profile_block" v-if="isAuthenticated">
      <img src="https://via.placeholder.com/75" alt="" class="header__avatar_img"/>
      <div class="header__username">
        Alexey Semenov
      </div>
    </div>
    <div v-if="!isAuthenticated"></div>
    <div class="header__menu_button" @click="getCategories">
      <i class="fas fa-bars header__menu_icon"></i>
    </div>
  </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import {CATEGORIES_ALL} from '../../store/actions/categories'
    export default {
      name: "header-view",
      data () {
        return {
        }
      },
      computed: {
        ...mapGetters(['isAuthenticated']),
      },
      methods: {
        getCategories: function () {
          this.$store.dispatch(CATEGORIES_ALL, {}).then((response) => {
            console.log(response);
          })
        }
      }
    }
</script>

<style>
  .header {
    margin: 10px;
    height: 75px;
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    justify-content: space-between;
  }

  .header__profile_block {
    display: flex;
  }
  .header__avatar_img {
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
  }

  .header__username {
    margin-left: 10px;
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .header__menu_button {
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    cursor: pointer;
  }

  .header__menu_icon {
    font-size: 28px;
  }
</style>
