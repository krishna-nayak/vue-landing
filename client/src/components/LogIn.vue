<template>
  <!-- eslint-disable prettier/prettier -->
  <section class="fixed z-10 top-0 w-screen h-screen grid place-items-center">
    <!-- screen -->
    <div @click="loginClose" class="absolute z-20 w-screen bg-gray-700 opacity-40 h-screen" />
    <!-- white body -->
    <div :class="animation" class="z-20 max-w-3xl w-11/12 h-3/5 sm:h-4/5 mx-auto animate__animated">
      <div class="bg-white w-full h-full rounded-3xl relative">
        <!-- TODO: change the login design/data-field -->
        <div @click="loginClose" class="absolute right-12 top-6" id="icon">
          <i class="fas fa-times fa-2x"></i>
        </div>
        <div class="grid place-items-center h-full" id="Login-form">
          <form method="post" class="w-9/12">
            <label class="text-2xl" for="number">Phone Number :</label>
            <input
              class="
                h-12
                w-full
                my-2
                p-4
                text-lg
                md:h-14 md:text-xl
                border-2 border-blue-400
                rounded-md
                focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent
              "
              type="number"
              name="number"
              id="number"
              placeholder="Enter your number"
            />
            <button class="px-4 py-2 mx-auto w-full h-12 text-lg text-white rounded-md bg-gradient-to-r from-blue-400 to-blue-300 hover:from-blue-500 hover:to-blue-400">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
/* eslint-disable vue/no-unused-components */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import { mapMutations } from "vuex";
import "animate.css";
export default {
  data() {
    return {
      animationName: "animate__bounceInUp",
    };
  },

  methods: {
    ...mapMutations({ close: "setLogout" }),
    loginClose() {
      setTimeout(() => {
        this.close();
        this.animationName = "animate__bounceInUp";
      }, 1000);

      this.animationName = "animate__backOutDown";
    },
  },

  computed: {
    animation() {
      return this.animationName;
    },
  },
};
</script>
