<template>

  <div class="relative" v-if="loading === true">
    <div class="overflow-hidden h-0.5 mb-4 text-xs flex bg-indigo-200">
      <div
        style="width: 30%"
        class="
          shadow-none
          flex flex-col
          text-center
          whitespace-nowrap
          text-white
          justify-center
          bg-indigo-600
        "
      ></div>
    </div>
  </div>
</template>

<script>
import { ref, watchEffect } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  setup() {
    let store = useStore();
    let loading = ref(false);
    watchEffect(() => {

      loading.value = store.getters["Loading/loading"];

      return {
        loading,
      };
    });

    return {loading};
  },
};
</script>

<style>
</style>
