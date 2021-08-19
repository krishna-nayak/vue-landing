<template>
  <!-- eslint-disable prettier/prettier -->
  <section class="pt-32 relative">
    <div class="px-8 md:gap-12 container mx-auto text-center items-center flex flex-col md:text-left md:items-start md:flex-row justify-around relative">
      <Intro />
      <!-- animation -->
      <div class="lg:max-w-sm md:max-w-xs relative">
        <img src="../assets/card.png" class="md:w-full sm:w-72 w-60" alt="card" />
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
