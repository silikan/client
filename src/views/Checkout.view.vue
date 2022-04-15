<template>
  <div class="flex flex-col items-center p-10 h-screen">
    <StepperComponent :steps="steps" />
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <Review v-show="steps[1].active === true"/>
      <Price v-show="steps[0].active === true"/>
    </div>

    <Checkout />
  </div>
  <div class="my-10 flex justify-around w-full mx-auto sm:px-6 lg:px-8">
    <button
      v-if="steps.findIndex((step) => step.active) > 0"
      class="
        inline-flex
        items-center
        px-20
        py-2
        -transparent
        text-sm
        font-medium
        rounded-md
        text-black
        bg-white
        border-2
        focus:outline-none
        focus:ring-2
        focus:ring-offset-2
        focus:ring-indigo-500
      "
      @click="prevStep"
    >
      prev
    </button>
    <button
      v-if="steps.findIndex((step) => step.active) < 1"
      class="
        inline-flex
        items-center
        px-20
        py-2
        -transparent
        text-sm
        font-medium
        rounded-md
        shadow-sm
        text-white
        bg-indigo-600
        hover:bg-indigo-700
        focus:outline-none
        focus:ring-2
        focus:ring-offset-2
        focus:ring-indigo-500
      "
      @click="nextStep"
    >
      next
    </button>
    <button
      v-if="steps.findIndex((step) => step.active) === 1"
      class="
        inline-flex
        items-center
        px-20
        py-2
        -transparent
        text-sm
        font-medium
        rounded-md
        shadow-sm
        text-white
        bg-indigo-600
        hover:bg-indigo-700
        focus:outline-none
        focus:ring-2
        focus:ring-offset-2
        focus:ring-indigo-500
      "
    >
      Pay
    </button>
  </div>
</template>

<script>

import Price from '@/components/Checkout/Price.component.vue'
import Review from "@/components/Checkout/Review.component.vue";
import StepperComponent from "../components/Checkout/Stepper.component.vue";
import { reactive } from "@vue/reactivity";
export default {
  components: {
    StepperComponent,
    Review,
    Price,
  },
  setup() {
    const steps = reactive([
      { name: "Pricing", href: "#", status: "upcoming", active: true },
      { name: "Reviews", href: "#", status: "upcoming", active: false },
    ]);
    const nextStep = () => {
      const currentStep = steps.findIndex((step) => step.active);

      if (currentStep < steps.length - 1) {
        steps[currentStep].active = false;
        steps[currentStep].status = "complete";
        steps[currentStep + 1].active = true;
        steps[currentStep + 1].status = "current";
      }
    };

    const prevStep = () => {
      const currentStep = steps.findIndex((step) => step.active);

      if (currentStep > 0) {
        steps[currentStep].active = false;
        steps[currentStep].status = "upcoming";
        steps[currentStep - 1].active = true;
        steps[currentStep - 1].status = "current";
      }
    };

    return {
      steps,
      nextStep,
      prevStep,
    };
  },
};
</script>

<style>
</style>
