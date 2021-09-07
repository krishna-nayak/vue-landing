<template>
  <!-- eslint-disable prettier/prettier -->
  <section>
    <div class="pt-0 md:pt-32 fixed top-32 overflow-hidden w-full screen">
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
    </div>

    <!-- feature -->
    <div class="h-850 md:h-screen md:h-screen-vw-50 relative margin-top bg-blue-50 grid place-items-center">
      <div class="w-full">
        <div class="p-6 my-10 flex flex-col md:flex-row-reverse items-center justify-center md:justify-around">
          <div>
            <img src="https://wireframestogo.com/585b-Image-Placeholder-Light/thumbnail.png" alt="img" />
          </div>
          <div class="sm:text-xl text-lg mt-10 md:mt-0">
            <h1 class="sm:text-5xl text-3xl font-bold">Hey! 🧑🏻</h1>
            <h1 class="sm:text-5xl text-3xl mb-10 font-bold">I am <span class="text-blue-400">FanCard</span></h1>
            <ul>
              <li class="py-2">I have no hidden fees</li>
              <li class="py-2">I will protect your money like no one else</li>
              <li class="py-2">I love to shop and pay for my friends with just a tap</li>
              <li class="py-2">I am numberless prepaid card and love to wear black</li>
            </ul>
            <button class="my-10 p-2 px-4 rounded bg-blue-400 text-white">Get your FanCard</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Features box -->
    <div></div>
  </section>
</template>

<script>
// @ is an alias to /src
/* eslint-disable vue/no-unused-components */
/* eslint-disable no-unused-vars */

import HelloWorld from "@/components/HelloWorld.vue";
import Intro from "@/layouts/Intro.vue";
import Card from "@/layouts/Card.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    Intro,
    Card,
  },
};
</script>
