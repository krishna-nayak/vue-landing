<template>
  <!-- eslint-disable prettier/prettier -->
  <section class="py-16 relative max-w-7xl mx-auto">
    <div class="md:flex md:gap-12 px-8">
      <!-- input -->
      <div class="text-center md:flex md:flex-col md:text-left mx-auto md:flex-grow md:w-116 md:justify-center">
        <h1 class="text-6xl font-semibold leading-tight">Meet banking that keeps pace with you</h1>
        <p class="text-sm w-30-ch py-4 font-light mx-auto md:mx-0">Join the exclusive Firstlist and get 10% cashback on all spends</p>

        <!-- Method: POST -->
        <form class="md:px-0 md:flex md:justify-between md:flex-row relative">
          <div class="w-full relative">
            <input
              class="h-14 w-full p-4 pl-16 text-lg md:text-2xl border-2 border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent rounded-lg"
              type="number"
              name="number"
              id="number "
              placeholder="Type your number"
            />
            <p class="absolute text-lg md:text-2xl top-1/2 transform -translate-y-1/2 left-3 font-light">+91</p>
          </div>
          <button
            class="
              w-full
              h-12
              bg-gradient-to-r
              from-blue-400
              to-blue-300
              text-lg
              font-semibold
              hover:to-blue-600 hover:from-blue-300
              text-white
              rounded-lg
              mt-2
              md:w-48 md:mt-0 md:absolute md:right-1 md:top-1/2 md:transform md:-translate-y-1/2
            "
            type="submit"
          >
            check firstlist status
          </button>
        </form>
      </div>

      <!-- animation -->
      <div class="h-full w-34 md:max-w-md md:mt-0 md:mx-0 md:my-0 mx-auto my-32 flex-grow-0 md:flex-shrink">
        <img src="../assets/card.png" alt="card" />
      </div>
    </div>
  </section>
</template>
