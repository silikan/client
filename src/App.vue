<template>
  <div class=" h-screen min-h-full flex flex-col justify-between	 ">
    <Navbar  v-if="path && isLoggedin == false"/>
    <AuthNavbar v-if="path && isLoggedin == true"/>
    <router-view />
        <Footer />

  </div>
</template>
<script>
import { computed, } from "vue";
import { useRoute } from "vue-router";
import Footer from "./components/Footer.component.vue";
import Navbar from "./components/Navbar/Navbar.component.vue";
import AuthNavbar from "./components/Navbar/Auth_Navbar.component.vue";
import { useStore } from 'vuex';
export default {
  name: "app",
  components: {Footer,Navbar,AuthNavbar},
    setup(){
      let shownavbar;
    const route = useRoute()
    const path = computed(() => route.path != "/")
const store = useStore()




 let isLoggedin = computed(() =>    store.getters["auth/loggedIn"]
)
shownavbar = false
return {path,shownavbar,isLoggedin}
  }
};
</script>

<style>


</style>
