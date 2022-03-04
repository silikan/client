<template>
  <div class="h-screen min-h-full flex flex-col justify-between">
    <Navbar :authUser="authUser" v-if="path" />
    <router-view />
    <Footer />
  </div>
</template>
<script>
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import Footer from './components/Footer.component.vue';
import Navbar from './components/Navbar/Navbar.component.vue';

export default {
  name: 'App',
  components: { Footer, Navbar },
  setup() {
    const route = useRoute();
    const path = computed(() => route.path !== '/');
    const store = useStore();

    onMounted( async () => {

        const authUser = await store.getters["auth/authUser"];
        if (authUser) {
          store.dispatch("auth/setGuest", { value: "isNotGuest" });
        } else {
          const error = Error(
            "Unable to fetch user after login, check your API settings."
          );
          error.name = "Fetch User";
          throw error;
        } }     );

  const authUser = computed(() => store.getters["auth/authUser"]);
    const isLoggedin = computed(() => store.getters['auth/loggedIn']);
    return { path, isLoggedin ,authUser};
  },
};
</script>

<style>
</style>
