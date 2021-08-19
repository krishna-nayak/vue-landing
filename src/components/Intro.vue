<template>
  <!-- eslint-disable prettier/prettier -->
  <!-- input -->
  <div class="lg:max-w-lg sm:max-w-sm max-w-xs bg-white flex justify-self-center items-center md:items-start flex-col 2">
    <h1 class="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">Meet banking that keeps pace with you</h1>

    <p class="text-sm w-30-ch py-4 font-light">Join the exclusive Firstlist and get 10% cashback on all spends</p>
    <!-- Method: POST -->
    <form class="w-full px-4 md:px-0 flex justify-between flex-col lg:flex-row relative">
      <div class="w-full relative">
        <input
          class="
            h-12
            w-full
            p-4
            pl-12
            lg:pl-14
            text-lg
            md:h-14 md:text-xl
            border-2 border-blue-400
            rounded-md
            focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent
          "
          type="number"
          name="number"
          id="number "
          placeholder="Type your number"
        />
        <p class="absolute text-lg md:text-xl top-1/2 transform -translate-y-1/2 left-3 font-light">+91</p>
      </div>
      <button
        class="
          px-4
          py-2
          mt-2
          h-12
          text-lg text-white
          rounded-md
          bg-gradient-to-r
          from-blue-400
          to-blue-300
          hover:from-blue-500 hover:to-blue-400
          lg:mt-0 lg:right-1 lg:top-1/2 lg:transform lg:-translate-y-1/2 lg:absolute
        "
        type="submit"
      >
        check firstlist status
      </button>
    </form>
  </div>
</template>
