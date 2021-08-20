<template>
  <!-- eslint-disable prettier/prettier -->
  <div class="container mx-auto px-3 sm:px-0 h-20 font-semibold flex items-center justify-between" id="nav">
    <router-link to="/">
      <img alt="Vue logo" class="max-w-none w-12" src="../assets/logo.png" />
    </router-link>
    <div class="text-center sm:block" :class="{ hidden: !navToggle }">
      <router-link class="mx-3" v-for="link in links" :key="link.to" :to="link.to">{{ link.title }}</router-link>
    </div>
    <button
      :class="{ hidden: !navToggle }"
      class="px-4 py-2 sm:block rounded-md border-2 border-blue-400 text-blue-500 bg-gradient-to-r hover:from-blue-500 hover:to-blue-400 hover:text-white"
    >
      Sign In || Wait List
    </button>
    <button @click="navMenu" class="sm:hidden">
      <i class="fas fa-bars fa-2x"></i>
    </button>
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
/* eslint-disable no-unused-vars */

export default {
  data() {
    return {
      navToggle: false,
      links: [
        { to: "/about", title: "About" },
        { to: "/feature", title: "Features" },
        { to: "/contact", title: "Contact" },
      ],
    };
  },
  methods: {
    navMenu() {
      this.navToggle = !this.navToggle;
    },
  },
};
</script>
