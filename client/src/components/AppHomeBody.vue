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
    <div class="bg-white relative">
      <div class="py-24 px-6 grid place-items-center grid-cols-2 md:grid-cols-3 auto-rows-auto gap-4">
        <div class="p-3 h-80 max-w-sm" id="Data" v-for="feature in features" :key="feature.title">
          <img :src="feature.src" alt="" class="w-12" />
          <h1 class="py-1 font-bold">{{ feature.title }}</h1>
          <p class="text-gray-400 font-extralight">{{ feature.desc }}</p>
        </div>
      </div>
    </div>

    <!-- Security -->
    <div class="relative bg-blue-200 text-center py-32">
      <h1 class="text-3xl font-bold md:text-5xl">Unmatched security</h1>
      <div class="py-24 px-6 grid place-items-center grid-cols-1 md:grid-cols-3 auto-rows-auto gap-4">
        <div class="max-w-sm h-60 bg-white p-5 rounded" v-for="security in securityData" :key="security.title">
          <img :src="security.src" alt="" class="w-12 mx-auto my-4" />
          <h1 class="text-xl">{{ security.title }}</h1>
          <p class="font-extralight">{{ security.desc }}</p>
        </div>
      </div>
    </div>

    <!-- Say hello -->
    <div class="relative bg-gray-500 text-center">
      <div>
        <h1>Say hello to the most convenient way to give money to your kids</h1>
        <div v-for="feature in features" :key="feature"></div>
      </div>
    </div>

    <!-- Footer above -->
    <div class="relative bg-gray-100 py-28 px-5">
      <div class="flex justify-evenly md:flex-row flex-col items-center gap-5">
        <div class="text-center">
          <h1 class="text-2xl md:text-3xl font-bold">Bla Bla is Powered by</h1>
          <img :src="logoPoweredBy" alt="" class="w-20 mx-auto" />
        </div>
        <div class="max-w-lg">
          <p class="text-justify font-light">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam ratione autem nulla dignissimos cumque culpa dolore officia id placeat animi. Eligendi, voluptatibus
            provident.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
/* eslint-disable vue/no-unused-components */
/* eslint-disable no-unused-vars */
/* eslint-disable */

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

  data() {
    return {
      logoUrl: "https://wireframestogo.com/585b-Image-Placeholder-Light/thumbnail.png",
      logoPoweredBy: "https://wireframestogo.com/585b-Image-Placeholder-Light/thumbnail.png",
      features: [
        {
          src: "https://wireframestogo.com/585b-Image-Placeholder-Light/thumbnail.png",
          title: "Personal Prepaid Card",
          desc: "Letrasre recently with desktop publishing ions of Lorem Ipsum.",
        },
        {
          src: "https://wireframestogo.com/585b-Image-Placeholder-Light/thumbnail.png",
          title: "Rewards",
          desc: "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing ions of Lorem Ipsum.",
        },
        {
          src: "https://wireframestogo.com/585b-Image-Placeholder-Light/thumbnail.png",
          title: "Tasks",
          desc: "Letraset sheets containing Lorem Ipsum passages, an publishing ions of Lorem Ipsum.",
        },
        {
          src: "https://wireframestogo.com/585b-Image-Placeholder-Light/thumbnail.png",
          title: "Splits Bill",
          desc: "Letraset sheets containing Losktop publishing ions of Lorem Ipsum.",
        },
        {
          src: "https://wireframestogo.com/585b-Image-Placeholder-Light/thumbnail.png",
          title: "Shop",
          desc: "Letraset sheets containing Lorem Ipsth desktop publishing ions of Lorem Ipsum.",
        },
      ],

      securityData: [
        {
          src: "https://wireframestogo.com/585b-Image-Placeholder-Light/thumbnail.png",
          title: "Numberless Card",
          desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          src: "https://wireframestogo.com/585b-Image-Placeholder-Light/thumbnail.png",
          title: "The safest transaction",
          desc: "ummy text of the printing and typesetting industry.",
        },
        {
          src: "https://wireframestogo.com/585b-Image-Placeholder-Light/thumbnail.png",
          title: "Block/pause the card",
          desc: "Lorem Ipsum is simply duminting and typesetting industry.",
        },
      ],
    };
  },
};
</script>
