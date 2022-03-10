<template>
  <div class="flex flex-col justify-center items-center m-10">
    <HandymanList />
 </div>
</template>

<script>
 import HandymanList from '@/components/Handymen_List.component.vue';

import store from "@/store/index";
export default {
  components: {
     HandymanList,
  },

  setup() {

  },

  beforeRouteEnter(to, from, next) {
    const currentPage = parseInt(to.query.page) || 1;
    store.dispatch("user/getUsers", currentPage).then(() => {
      to.params.page = currentPage;
      next();
    });
  },
};
</script>

<style>
</style>
