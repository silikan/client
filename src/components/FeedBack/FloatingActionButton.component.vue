<template>
  <div>
    <div
      aria-live="assertive"
      class="fixed inset-0 flex px-4 py-6 pointer-events-none sm:p-6 items-end"
    >
      <div class="w-full flex flex-col items-end space-y-4 sm:items-end">
        <!-- Notification panel, dynamically insert this into the live region when it needs to be displayed -->

        <div class="pointer-events-auto">
          <Popper placement="top">
            <button
              type="button"
              class="
                inline-flex
                items-center
                p-3
                border border-transparent
                rounded-full
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
              <!-- Heroicon name: outline/plus-sm -->
              <QuestionMarkCircleIcon
                class="h-5 w-5 text-white"
                aria-hidden="true"
              />
            </button>

            <template #content>
				<div class="flex flex-col space-y-3">
              <button
                type="button"
                class="
                  inline-flex
                  items-center
                  p-3
                  border border-transparent
                  rounded-full
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
                <!-- Heroicon name: outline/plus-sm -->
                <QuestionMarkCircleIcon
                  class="h-5 w-5 text-white"
                  aria-hidden="true"
                />
              </button>
			     <button
                type="button"
                class="
                  inline-flex
                  items-center
                  p-3
                  border border-transparent
                  rounded-full
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
                <!-- Heroicon name: outline/plus-sm -->
                <QuestionMarkCircleIcon
                  class="h-5 w-5 text-white"
                  aria-hidden="true"
                />
              </button>
			     <button
                type="button"
                class="
                  inline-flex
                  items-center
                  p-3
                  border border-transparent
                  rounded-full
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
                <!-- Heroicon name: outline/plus-sm -->
                <QuestionMarkCircleIcon
                  class="h-5 w-5 text-white"
                  aria-hidden="true"
                />
              </button>
			  </div>
            </template>
          </Popper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Popper from "vue3-popper";

import { QuestionMarkCircleIcon } from "@heroicons/vue/solid";
export default {
  components: {
    QuestionMarkCircleIcon,
    Popper,
  },
};
</script>

<style>
</style>
