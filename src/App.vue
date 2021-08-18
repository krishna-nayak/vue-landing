<template>
  <!-- <AppHeader /> -->
  <router-view class="screen" />
  <!-- <AppFooter /> -->
</template>

<script>
/* eslint-disable vue/no-unused-components */
/* eslint-disable no-unused-vars */
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
export default {
  components: {
    AppHeader,
    AppFooter,
  },
  body() {
    return {
      msg: "have a nice",
    };
  },
};
</script>
