<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-white">
    <div class="">
      <div class="mt-12 space-y-4 sm:mt-16 sm:space-y-0">
        <div
          v-for="tier in tiers"
          :key="tier.name"
          class="
            border border-gray-200
            rounded-lg
            shadow-sm
            divide-y divide-gray-200
          "
        >
          <div class="p-6">
            <h2 class="text-lg leading-6 font-medium text-gray-900">
              {{ tier.name }}
            </h2>
            <p class="mt-4 text-sm text-gray-500">{{ tier.description }}</p>
            <p class="mt-8">
              <span class="text-4xl font-extrabold text-gray-900"
                >${{ tier.priceMonthly }}</span
              >
              {{ " " }}
              <span class="text-base font-medium text-gray-500">/mo</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

const tiers = [
  {
    name: "Hobby",
    href: "#",
    priceMonthly: 12,
    description: "All the basics for starting a new business",
    includedFeatures: [
      "Potenti felis, in cras at at ligula nunc.",
      "Orci neque eget pellentesque.",
    ],
  },
];

export default {
  components: {},
  setup() {
    let route = useRoute();
    let id = route.params.id;
let store = useStore();
store.dispatch('Transaction/getTransactionById' , id).then((result)=>{
  console.log(result);
}).catch((error)=>{
  console.log(error);
})

console.log(id);
    return {
      tiers,
      id,
    };
  },
};
</script>
