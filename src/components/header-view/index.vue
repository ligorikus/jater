<template>
  <div class="header">
    <div class="header__profile_block" v-if="isAuthenticated">
      <img src="https://via.placeholder.com/75" alt="" class="header__avatar_img"/>
      <div class="header__username">
        {{ user.name }}
      </div>
    </div>
    <nav v-if="!isAuthenticated">
      <router-link tag="div" class="nav__elem" to="/signin">Sign In</router-link>
      <router-link tag="div" class="nav__elem" to="/signup">Sign Up</router-link>
    </nav>
    <div class="header__menu_button">
      <i class="fas fa-bars header__menu_icon"></i>
    </div>
  </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import {CATEGORIES_ALL} from '../../store/actions/categories'
    import {USER_ME} from '../../store/actions/user'
    export default {
      name: "header-view",
      data () {
        return {
        }
      },
      created() {
        if (this.$store.getters.isAuthenticated) {
          this.$store.dispatch(USER_ME);
        }
        this.$store.dispatch(CATEGORIES_ALL);
      },
      computed: {
        categories() {
          return this.$store.getters.getCategories
        },
        user() {
          return this.$store.getters.getUser
        },
        ...mapGetters(['isAuthenticated']),
      },
      methods: {
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

  nav {
    display: flex;
  }
  .nav__elem {
    text-align: center;
    height: 60%;
    width: 100px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
    vertical-align: bottom;
    cursor: pointer;
  }

</style>
