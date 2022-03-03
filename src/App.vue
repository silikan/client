<template>
  <div class="h-screen min-h-full flex flex-col justify-between">
    <Navbar v-if="path && isLoggedin == false" :authUser="authUser" />
    <AuthNavbar v-if="path && isLoggedin == true" :authUser="authUser" />
    <router-view />
    <Footer />
  </div>
</template>
<script>
import { computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
import Footer from './components/Footer.component.vue';
import Navbar from './components/Navbar/Navbar.component.vue';
import AuthNavbar from './components/Navbar/Auth_Navbar.component.vue';

export default {
  name: 'App',
  components: { Footer, Navbar, AuthNavbar },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const path = computed(() => route.path !== '/');
    const store = useStore();

    onMounted( async () => {

        const authUser = await store.dispatch("auth/getAuthUser");
        if (authUser) {
          store.dispatch("auth/setGuest", { value: "isNotGuest" });
          router.push("/dashboard");
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
