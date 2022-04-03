<template>
  <div>
    <div
      v-for="tier in tiers"
      :key="tier.name"
      class="flex flex-col rounded-lg flex-1 w-full overflow-hidden"
    >
      <div class="px-6 py-8 bg-white sm:p-10 sm:pb-6">
        <div>
          <h3
            class="
              inline-flex
              px-4
              py-1
              rounded-full
              text-sm
              font-semibold
              tracking-wide
              uppercase
              bg-indigo-100
              text-indigo-600
            "
            id="tier-standard"
          >
            {{ tier.name }}
          </h3>
        </div>
        <div class="mt-4 flex items-baseline text-6xl font-extrabold">
          ${{ tier.priceMonthly }}
          <span class="ml-1 text-2xl font-medium text-gray-500"> /mo </span>
        </div>
        <p class="mt-5 text-lg text-gray-500">
          {{ tier.description }}
        </p>
      </div>
      <div
        class="
          flex-1 flex flex-col
          justify-between
          px-6
          pt-6
          pb-8
          bg-gray-50
          space-y-6
          sm:p-10 sm:pt-6
        "
      >
        <ul role="list" class="space-y-4">
          <li
            v-for="feature in tier.features"
            :key="feature"
            class="flex items-start"
          >
            <div class="flex-shrink-0">
              <CheckIcon class="h-6 w-6 text-green-500" aria-hidden="true" />
            </div>
            <p class="ml-3 text-base text-gray-700">
              {{ feature }}
            </p>
          </li>
        </ul>
        <div class="rounded-md shadow">
          <a
            :href="tier.href"
            class="
              flex
              items-center
              justify-center
              px-5
              py-3
              border border-transparent
              text-base
              font-medium
              rounded-md
              text-white
              bg-gray-800
              hover:bg-gray-900
            "
            aria-describedby="tier-standard"
          >
            Get started
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { CheckIcon } from "@heroicons/vue/outline";
import { computed } from "@vue/runtime-core";

export default {
  components: {
    CheckIcon,
  },
  props: ["tiers"],
  setup(props) {
    let tabs = computed(() => props.tiers);

    return {
      tabs,
    };
  },
};
</script>

<style>
</style>
