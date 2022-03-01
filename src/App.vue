<template>
  <div class=" h-screen min-h-full flex flex-col justify-between">
    <Navbar v-if="path && isLoggedin == false"  :authUser="authUser"/>
    <AuthNavbar v-if="path && isLoggedin == true" :authUser="authUser" />
    <router-view />
    <Footer />
  </div>
</template>
<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import Footer from './components/Footer.component.vue';
import Navbar from './components/Navbar/Navbar.component.vue';
import AuthNavbar from './components/Navbar/Auth_Navbar.component.vue';

export default {
  name: 'App',
  components: { Footer, Navbar, AuthNavbar },
  setup() {
    const route = useRoute();
    const path = computed(() => route.path !== '/');
    const store = useStore();

  const authUser = computed(() => store.getters["auth/authUser"]);
    const isLoggedin = computed(() => store.getters['auth/loggedIn']);
    return { path, isLoggedin ,authUser};
  },
};
</script>

<style>

</style>
