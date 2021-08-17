<template>
  <!-- eslint-disable prettier/prettier -->
  <section class="pt-0">
    <div class="container py-36 mx-auto flex flex-col text-center items-center md:flex-row justify-around relative">
      <!-- input -->
      <div class="h-full w-116 bg-white flex flex-col">
        <h1 class="text-6xl font-semibold leading-tight">Meet banking that keeps pace with you</h1>
        <p class="text-sm mx-auto w-30-ch py-4 font-light">Join the exclusive Firstlist and get 10% cashback on all spends</p>
        <!-- Method: POST -->
        <form class="flex justify-between flex-col md:flex-row relative">
          <div class="w-full relative">
            <input
              class="h-14 w-full p-4 pl-16 text-2xl border-2 border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent rounded-lg"
              type="number"
              name="number"
              id="number "
              placeholder="Type your number"
            />
            <p class="absolute text-2xl top-1/2 transform -translate-y-1/2 left-3 font-light">+91</p>
          </div>
          <button
            class="
              px-4
              py-2
              h-12
              bg-gradient-to-r
              from-blue-400
              to-blue-300
              text-lg
              hover:from-blue-600 hover:to-blue-300
              text-white
              rounded-lg
              mt-2
              md:mt-0 md:absolute md:right-1 md:top-1/2 md:transform md:-translate-y-1/2
            "
            type="submit"
          >
            check firstlist status
          </button>
        </form>
      </div>
      <!-- animation -->
      <div class="h-full w-104 mt-24">
        <img src="../assets/card.png" alt="card" />
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
/* eslint-disable vue/no-unused-components */
/* eslint-disable no-unused-vars */

import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
