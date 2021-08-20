<template>
  <!-- eslint-disable prettier/prettier -->
  <section class="pt-32 relative overflow-hidden">
    <div class="px-8 md:gap-12 container mx-auto text-center items-center flex flex-col md:text-left md:items-start md:flex-row justify-around relative">
      <Intro />
      <Card />
    </div>

    <div
      class="
        bg-gradient-to-tr
        to-blue-400
        from-blue-300
        animate-circle-expand
        w-screen-vw-50
        h-screen-vw-50
        absolute
        bottom-0
        left-1/2
        rounded-full
        -z-1
        transform
        -translate-x-1/2
        translate-y-1/2
      "
    ></div>
  </section>
</template>

<script>
// @ is an alias to /src
/* eslint-disable vue/no-unused-components */
/* eslint-disable no-unused-vars */

import HelloWorld from "@/components/HelloWorld.vue";
import Intro from "@/components/Intro.vue";
import Card from "@/components/Card.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    Intro,
    Card,
  },
};
</script>
