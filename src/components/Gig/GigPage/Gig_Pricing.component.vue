<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="  items ">
    <div class="flex-1">
      <div class="sm:hidden">
        <label for="tabs" class="sr-only">Select a tab</label>
        <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
        <select
          id="tabs"
          name="tabs"
          class="
            block
            w-full
            focus:ring-indigo-500 focus:border-indigo-500
            h-12
            border-gray-300
            rounded-md
          "
        >
          <option v-for="tab in tabs" :key="tab.name" :selected="tab.current">
            {{ tab.name }}
          </option>
        </select>
      </div>
      <div class="hidden sm:block">
        <nav
          class="relative z-0  flex divide-x divide-gray-200"
          aria-label="Tabs"
        >
          <a
            v-for="(tab, tabIdx) in tabs"
            :key="tab.name"
            :href="tab.href"
            :class="[
              tab.current
                ? 'text-gray-900'
                : 'text-gray-500 hover:text-gray-700',
              tabIdx === 0 ? 'rounded-l-lg' : '',
              tabIdx === tabs.length - 1 ? 'rounded-r-lg' : '',
              'group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10',
            ]"
            :aria-current="tab.current ? 'page' : undefined"
          >
            <span>{{ tab.name }}</span>
            <span
              aria-hidden="true"
              :class="[
                tab.current ? 'bg-indigo-500' : 'bg-transparent',
                'absolute inset-x-0 bottom-0 h-0.5',
              ]"
            />
          </a>
        </nav>
      </div>
    </div>

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
  </div>
</template>

<script>
import { CheckIcon } from "@heroicons/vue/outline";
const tabs = [
  { name: "Basic", href: "#", current: false },
  { name: "Standard", href: "#", current: false },
  { name: "Premium", href: "#", current: true },
];
const tiers = [
  {
    name: "Standard",
    href: "#",
    priceMonthly: 49,
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    features: [
      "Pariatur quod similique",
      "Sapiente libero doloribus modi nostrum",
      "Vel ipsa esse repudiandae excepturi",
      "Itaque cupiditate adipisci quibusdam",
    ],
  },
];

export default {
  components: {
    CheckIcon,
  },
  setup() {
    return {
      tiers,
      tabs,
    };
  },
};
</script>
