<template>
  <div class="flex flex-col  justify-center">
    <Hero />
    <Trusted />
    <Features />
    <CustomerAd />
    <HandymanAd />
    <Testemonials />
    <Stats />
    <Faq />
  </div>
</template>

<script>
import Features from '../components/Home/Features.component.vue';
import CustomerAd from '../components/Home/Customer_ad.component.vue';
import HandymanAd from '../components/Home/Handyman_ad.component.vue';
import Hero from '../components/Home/Hero.component.vue';
import Stats from '../components/Home/Stats.component.vue';
import Testemonials from '../components/Home/Testemonials.component.vue';
import Faq from '../components/Home/Faq.component.vue';
import Trusted from '../components/Home/Trusted.component.vue';

export default {
  components: {
    Features,
    CustomerAd,
    HandymanAd,
    Hero,
    Stats,
    Testemonials,
    Faq,
    Trusted,
  },
};
</script>

<style>
</style>
