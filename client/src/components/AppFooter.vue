<template>
  <!-- eslint-disable prettier/prettier -->
  <!-- Responsive 🤔 Footer -->

  <footer class="bg-blue-700 text-center relative">
    <!-- Float -->
    <div class="py-10 w-80 sm:w-md xl:w-lg relative mx-auto">
      <div class="absolute w-full -top-16 left-1/2 transform -translate-x-1/2">
        <div class="w-full text-left text-white">
          <div class="grid auto-rows-auto grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-8">
            <!-- Your Privacy. Minus the jargon. arrow, No Hidden Fees! arrow, Join the team. arrow -->
            <div class="bg-blue-500 rounded-lg font-medium text-xl text-green-300 col-span-full xl:col-span-1">
              <a href="#">
                <div class="p-4 xl:text-3xl">
                  Your Privacy. <br />
                  <span class="hidden xl:contents">You are in control. <br /></span>
                  Minus the jargon. <span><i class="fas fa-external-link-alt"></i></span>
                </div>
              </a>
            </div>
            <div class="bg-blue-500 rounded-lg font-medium text-xl text-pink-300 xl:col-span-1">
              <a href="#">
                <div class="p-4">
                  <p class="hidden xl:contents text-3xl">
                    Finally, a Saving <br />
                    Account with no <br />
                    hidden fees! <span><i class="fas fa-external-link-alt xl:col-span-1"></i></span>
                  </p>
                  <p class="contents xl:hidden">
                    No Hidden <br />
                    Fees! <span><i class="fas fa-external-link-alt xl:col-span-1"></i></span>
                  </p>
                </div>
              </a>
            </div>
            <div class="bg-blue-500 rounded-lg font-medium text-xl text-yellow-300">
              <a href="#">
                <div class="p-4">
                  <p class="hidden text-3xl xl:contents">
                    Join the team and <br />
                    helps us build the <br />
                    future of tech. <span><i class="fas fa-external-link-alt"></i></span>
                  </p>
                  <p class="contents xl:hidden">
                    Join the <br />
                    team. <span><i class="fas fa-external-link-alt"></i></span>
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer Details -->
      <!-- max-w-xs -->
      <div class="w-full xl:max-w-sm mx-auto xl:mx-0 xl:text-left mt-32 xl:mt-24">
        <!-- positon 1 -->
        <div class="w-8 mx-auto xl:mx-0">
          <img src="../assets/logo.png" alt="Logo" />
        </div>

        <!-- position 2 -->
        <div class="my-4 mx-auto xl:mx-0 sm:max-w-xs">
          <!-- text img -->
          <div class="flex justify-around xl:gap-3 xl:justify-start">
            <div class="bg-blue-800 text-xs text-white rounded-sm px-3 py-2" v-for="text in texts" :key="text.value">{{ text.value }} {{ text.img }}</div>
          </div>
          <!--🔗 link -->
          <div class="my-4 flex justify-between xl:absolute xl:my-0 xl:top-48 xl:right-0 xl:w-96">
            <router-link
              class="font-semibold text-base text-white border-b-1 hover:text-green-500 hover:border-green-500 xl:text-xl"
              v-for="link in links"
              :key="link.to"
              :to="link.to"
            >
              {{ link.title }}</router-link
            >
          </div>
        </div>

        <!-- position 3 -->
        <div class="text-xs text-gray-400">
          <div class="text-sm font-semibold text-white my-2">
            <p>For app-related assistance</p>
          </div>
          <!-- In-app chat 080-47485490 help@fi.care -->
          <div class="sm:max-w-xs mx-auto my-2 xl:mx-0 text-white flex justify-around xl:justify-between">
            <div class="bg-blue-800 rounded-sm inline-block mx-2 p-1 xl:p-2 xl:mx-0">In-app chat</div>
            <div class="bg-blue-800 rounded-sm inline-block mx-2 p-1 xl:p-2 xl:mx-0">080-47485490</div>
            <div class="bg-blue-800 rounded-sm inline-block mx-2 p-1 xl:p-2 xl:mx-0">help@hi.care</div>
          </div>
          <!-- social Link -->
          <div class="mx-auto xl:mx-0 w-28 my-4 text-white relative">
            <div class="flex w-full justify-between">
              <div>
                <a href="#"><i class="fab fa-twitter fa-2x hover:text-blue-300"></i></a>
              </div>
              <div>
                <a href="#"><i class="fab fa-instagram fa-2x hover:text-red-300"></i></a>
              </div>
              <div>
                <a href="#"><i class="fab fa-linkedin fa-2x hover:text-blue-900"></i></a>
              </div>
            </div>
          </div>
          <!-- Terms & Conditions Security Fee Structure -->
          <div class="my-4 sm:max-w-xs mx-auto xl:mx-0 flex justify-around xl:justify-between">
            <router-link class="text-gray-400 text-sm m-2 xl:m-0 border-b-1 hover:text-gray-100" v-for="link in footerLinks" :key="link.to" :to="link.to">{{
              link.title
            }}</router-link>
          </div>
          <!-- ? -->
          <div class="my-2">© epiHi Technologies Pvt. Ltd. 2021</div>
          <!-- Disclaimer -->
          <div class="my-4">
            Disclaimer: Lorem ipsum, dolor sit amet consectetur adipisicing elit. At ea ut error, praesentium debitis odit ipsa vitae odio ipsum esse itaque iusto eveniet alias
            omnis deserunt illo laborum eaque! Laborum iste eos, omnis placeat doloremque quaerat ipsam commodi provident natus reiciendis sit maxime repellat tempora.
          </div>
        </div>
      </div>
      <!-- 🤔 -->

      <div class="text-justify text-gray-400 max-w-lg xl:absolute xl:right-0 xl:top-60">
        <div class="hidden xl:grid xl:grid-cols-2 xl:gap-6">
          <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae quod explicabo quisquam, iure quo alias illo. Maxime, qui maiores minus consectetur atque sed in
            praesentium doloribus ea aspernatur, tenetur ipsum!
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores porro dolor distinctio sequi nobis officiis, tempora commodi, obcaecati, quas dolorum eaque? Tempore
            obcaecati neque harum, iusto pariatur non adipisci quisquam blanditiis sunt praesentium quis soluta.
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      texts: [
        { value: "hi", img: "👋🏼" },
        { value: "sky", img: "🌤" },
        { value: "tie", img: "👔" },
        { value: "fly", img: "🛩" },
      ],
      links: [
        { to: "/", title: "Home" },
        { to: "/about", title: "About" },
        { to: "/feature", title: "Features" },
        { to: "/contact", title: "Contact" },
      ],
      footerLinks: [
        { to: "/T&C", title: "Terms & Conditions" },
        { to: "/secure", title: "Security" },
        { to: "/fees", title: "Fee Structure" },
      ],
    };
  },
};
</script>

/* Home About Our Team Careers FAQ */
