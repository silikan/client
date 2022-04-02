<template>
<div class="w-full mx-auto sm:px-6 lg:px-8 ">
  <div>
    <div class="sm:hidden">
      <label for="tabs" class="sr-only">Select a tab</label>
      <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
      <select
        id="tabs"
        name="tabs"
        class="
          block
          w-full
          pl-3
          pr-10
          py-2
          text-base
          border-gray-300
          focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
          sm:text-sm
          rounded-md
        "
      >
        <option>Basic</option>

        <option>Standard</option>

        <option selected>Premium</option>
      </select>
    </div>
    <div class="hidden sm:block ">
      <div class="border-b border-gray-200">
        <nav class="-mb-px flex space-x-8" aria-label="Tabs">
          <!-- Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" -->
          <a
            href="#"
            class="
              border-transparent
              text-gray-500
              hover:text-gray-700 hover:border-gray-300
              whitespace-nowrap
              py-4
              px-1
              border-b-2
              font-medium
              text-sm
            "
          >
            Basic
          </a>

          <a
            href="#"
            class="
              border-transparent
              text-gray-500
              hover:text-gray-700 hover:border-gray-300
              whitespace-nowrap
              py-4
              px-1
              border-b-2
              font-medium
              text-sm
            "
          >
            Standard
          </a>

          <a
            href="#"
            class="
              border-indigo-500
              text-indigo-600
              whitespace-nowrap
              py-4
              px-1
              border-b-2
              font-medium
              text-sm
            "
            aria-current="page"
          >
            Premium
          </a>
        </nav>
      </div>
    </div>
  </div>
  <div>
    <Pricing />

  </div>
  </div>
</template>

<script>
import Pricing from "./Pricing.component.vue";
export default {
  components: { Pricing },
};
</script>

<style>
</style>
