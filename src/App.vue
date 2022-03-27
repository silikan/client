<template>
  <div class="h-screen min-h-full flex flex-col justify-between">
    <Navbar :authUser="authUser" v-if="path" />
    <LoadingBar/>
    <router-view />
    <Footer />
  </div>
</template>
<script>
import LoadingBar from './components/Loading/LoadingBar.component.vue'
import { computed,  watchEffect } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import Footer from "./components/Footer.component.vue";
import Navbar from "./components/Navbar/Navbar.component.vue";

export default {
  name: "App",
  components: { Footer, Navbar,LoadingBar },

  setup() {

    const route = useRoute();
    const path = computed(() => route.path !== "/");
    const store = useStore();

    watchEffect(async () => {
      const authUser = await store.getters["auth/loggedIn"];
      console.log(authUser === true);
      if (authUser) {
        store.dispatch("auth/setGuest", { value: "isNotGuest" });
      }
    });

    const authUser = computed(() => store.getters["auth/authUser"]);
    const isLoggedin = computed(() => store.getters["auth/loggedIn"]);
    return { path, isLoggedin, authUser };
  },
};
</script>

<style>
</style>
