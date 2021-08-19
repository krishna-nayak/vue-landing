<template>
  <!-- eslint-disable prettier/prettier -->
  <div class="bg-blue-500 text-white h-20 font-semibold flex items-center justify-between px-24" id="nav">
    <router-link to="/">
      <img alt="Vue logo" class="max-w-none w-12" src="../assets/logo.png" />
    </router-link>
    <div class="text-center">
      <router-link class="mx-3 flex flex-wrap" v-for="link in links" :key="link.to" :to="link.to">{{ link.title }}</router-link>
    </div>
    <!-- <button class="bg-white px-4 py-2 rounded-xl text-blue-500">Sign In || Wait List</button> -->
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
/* eslint-disable no-unused-vars */

export default {
  data() {
    return {
      links: [
        { to: "/about", title: "About" },
        { to: "/feature", title: "Features" },
        { to: "/contact", title: "Contact" },
      ],
    };
  },
};
</script>
