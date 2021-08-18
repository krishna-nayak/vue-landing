<template>
  <!-- eslint-disable prettier/prettier -->
  <section class="pt-0 relative grid place-items-center">
    <div class="px-8 md:gap-12 container mx-auto text-center items-center flex flex-col md:text-left md:items-start md:flex-row justify-around relative">
      <Intro />
      <!-- animation -->
      <div class="">
        <img src="../assets/card.png" class="w-104" alt="card" />
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
/* eslint-disable vue/no-unused-components */
/* eslint-disable no-unused-vars */

import HelloWorld from "@/components/HelloWorld.vue";
import Intro from "../components/Intro.vue";
export default {
  name: "Home",
  components: {
    HelloWorld,
    Intro,
  },
};
</script>
