<template>

  <div
    class="
      container
      mx-auto
      sm:px-6
      lg:px-8
      grid grid-cols-1
      xl:grid-cols-3
      items-center
    "
  >
    <GigGallery class="col-span-2" :images="gigImages.data" :data="gigData.data" />

    <!-- ... -->
    <GigPricing  :data="gigData.data" />
  </div>


</template>

<script>
import { computed, onMounted } from '@vue/runtime-core';
import { useStore } from 'vuex';

import GigGallery from "../components/Gig/GigPage/Gig_Gallery.component.vue";
import GigPricing from "../components/Gig/GigPage/Gig_Pricing.component.vue";
import { useRoute } from 'vue-router';
export default {
  components: { GigGallery, GigPricing },

  setup() {
    const store = useStore();
    let route = useRoute();
    let id = route.params.id;
    onMounted(() => {
      store.dispatch('Gig/getGig', id);
      store.dispatch('Gig/getGigImages', id);
    });

    let gigData = computed(() => {
      return store.getters['Gig/getFetchedGigs'];
    });
    let gigImages = computed(() => {
      return store.getters['Gig/getFetchedGigImages'];
    });


    return {
      gigData,
      gigImages
    };
  },
};
</script>

<style>
</style>
