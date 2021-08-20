<template>
  <!-- eslint-disable prettier/prettier -->
  <section class="pt-32 relative overflow-hidden">
    <div id="animation">
      <img src="../assets/sphere.svg" alt="sphere-large" class="absolute top-1/2 animate-motion-sphere-large" />
      <img src="../assets/sphere.svg" alt="sphere-modrate" class="absolute w-12 top-1/4 left-2/4 animate-motion-sphere-normal" />
      <img src="../assets/sphere.svg" alt="sphere-small" class="absolute w-10 top-3/4 left-1/3 animate-motion-sphere-small" />
    </div>
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
