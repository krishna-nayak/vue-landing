// import { createApp } from "vue";
import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      count: 0,
      data: "data state",
      isLogin: false,
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    setIsLogin(state) {
      state.isLogin = true;
    },
    setLogout(state) {
      state.isLogin = false;
    },
  },

  getters: {
    getData(state) {
      return state.data;
    },
  },
});

export default store;
