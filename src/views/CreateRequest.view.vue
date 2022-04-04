<template>
  <div class="flex flex-col items-center p-10 h-screen">

    <Stepper :steps="steps"/>
    <General v-show="steps[0].active === true" />
     <Pricing v-show="steps[1].active === true"/>
    <PaymentMthod v-show="steps[2].active === true"/>
    <div class="my-10 flex justify-around w-full mx-auto sm:px-6 lg:px-8">
      <button
        type="submit"
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
        type="submit"
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
    </div>
  </div>
</template>

<script>
import Stepper from "../components/Request/CreateRequest/Stepper.component.vue"
import General from "../components/Request/CreateRequest/General.component.vue"
import Pricing from "../components/Request/CreateRequest/Pricing.component.vue"
import PaymentMthod from "../components/Request/CreateRequest/Payment_Mthod.component.vue"
import { reactive } from '@vue/reactivity'
export default {
    components:{Stepper,General, Pricing,PaymentMthod },

 setup() {

    const steps = reactive([
      { name: "General", href: "#", status: "current", active: true },
      { name: "Pricing", href: "#", status: "upcoming", active: false },
      { name: "Payment Method", href: "#", status: "upcoming", active: false },
    ]);

    const nextStep = () => {
         const currentStep = steps.findIndex(step => step.active);

        if(currentStep < steps.length - 1) {
          steps[currentStep].active = false;
           steps[currentStep].status = "complete";
          steps[currentStep + 1].active = true;
            steps[currentStep + 1].status = "current";


        }
        console.log(currentStep);

        }


    const prevStep = () => {
        const currentStep = steps.findIndex(step => step.active);

        if(currentStep > 0) {
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
