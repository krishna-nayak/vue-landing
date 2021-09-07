<template>
  <div>
    <AppHeader />
    <Login v-if="isLogin" />
    <router-view />
    <AppFooter />
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
/* eslint-disable no-unused-vars */
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import Login from "./components/LogIn.vue";
export default {
  components: {
    AppHeader,
    AppFooter,
    Login,
  },
  body() {
    return {
      // isLogin: this.$store.state.isLogin,
      msg: "have a nice",
    };
  },

  computed: {
    isLogin() {
      return this.$store.state.isLogin;
    },
  },
};
</script>
