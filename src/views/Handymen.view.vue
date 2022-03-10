<template>
  <div class="flex flex-col justify-center items-center m-10">
    <HandymanList

       :path="path"
        :meta="meta"
        :links="links"
        action="user/paginateUsers"
        v-if="meta && meta.last_page > 1"
    />
 </div>
</template>

<script>
 import HandymanList from '@/components/Handymen_List.component.vue';

import store from "@/store/index";
import { computed } from '@vue/runtime-core';
export default {
  components: {
     HandymanList,
  },

  setup() {

    let action = "user/paginateUsers";

    let path = "handymen";
    const meta = computed(()=>store.getters["user/meta"])
    const links =computed(()=> store.getters["user/links"])

    return{
      meta,
      links,

      action,
      path,
    }
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
