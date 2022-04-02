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
    <GigGallery class="col-span-2" />

    <!-- ... -->
    <GigPricing />
  </div>


</template>

<script>
import GigGallery from "../components/Gig/GigPage/Gig_Gallery.component.vue";
import GigPricing from "../components/Gig/GigPage/Gig_Pricing.component.vue";
export default {
  components: { GigGallery, GigPricing },

  setup() {},
};
</script>

<style>
</style>
