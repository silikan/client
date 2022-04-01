
<template>
  <form class="space-y-8 divide-y divide-gray-200 w-full">
    <div class="space-y-8 divide-y max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
        <div>
          <h3 class="text-lg leading-6 font-medium text-gray-900">Pricing</h3>
          <p class="mt-1 max-w-2xl text-sm text-gray-500">create that gig</p>
        </div>
        <div class="space-y-6 sm:space-y-5">
          <div class="-gray-300 rounded-lg shadow-sm overflow-hidden">
            <label for="price" class="block text-sm font-medium text-gray-700"
              >Price</label
            >
            <div class="mt-1 relative rounded-md shadow-sm">
              <div
                class="
                  absolute
                  inset-y-0
                  left-0
                  pl-3
                  flex
                  items-center
                  pointer-events-none
                "
              >
                <span class="text-gray-500 sm:text-sm"> $ </span>
              </div>
              <input
                type="text"
                name="price"
                id="price"
                class="
                  focus:ring-indigo-500 focus:border-indigo-500
                  block
                  w-full
                  pl-7
                  pr-12
                  sm:text-sm
                  border-gray-300
                  rounded-md
                "
                placeholder="0.00"
                aria-describedby="price-currency"
              />
              <div
                class="
                  absolute
                  inset-y-0
                  right-0
                  pr-3
                  flex
                  items-center
                  pointer-events-none
                "
              >
                <span class="text-gray-500 sm:text-sm" id="price-currency">
                  USD
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex items-start space-x-4 pb-">
        <div class="min-w-0 flex-1">
          <div action="#" class="relative">
            <div class="-gray-300 rounded-lg shadow-sm overflow-hidden">
              <label
                for="description"
                class="block text-sm font-medium text-black sm:mt-px sm:pt-2"
              >
                Description
              </label>
              <textarea
                rows="3"
                name="description"
                id="description"
                class="
                  block
                  w-full
                  py-3
                  h-40
                  -0
                  resize-none
                  focus:ring-0
                  sm:text-sm
                "
                placeholder="Add your description..."
              />

              <!-- Spacer element to match the height of the toolbar -->
              <div class="py-2" aria-hidden="true">
                <!-- Matches height of button in toolbar (1px  + 36px content height) -->
                <div class="py-px">
                  <div class="h-9" />
                </div>
              </div>
            </div>

            <div
              class="absolute bottom-0 inset-x-0 pl-3 py-2 flex justify-between"
            >
              <div class="flex items-center space-x-5">
                <div class="flex items-center">
                  <button
                    type="button"
                    class="
                      -m-2.5
                      w-10
                      h-10
                      rounded-full
                      flex
                      items-center
                      justify-center
                      text-gray-400
                      hover:text-gray-500
                    "
                  >
                    <PaperClipIcon class="h-5 w-5" aria-hidden="true" />
                    <span class="sr-only">Attach a file</span>
                  </button>
                </div>
              </div>
              <div class="flex-shrink-0">
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
                >
                  next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>
<script>
import { PaperClipIcon } from "@heroicons/vue/solid";
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/vue";

export default {
  components: {
    Listbox,
    ListboxButton,
    ListboxLabel,
    ListboxOption,
    ListboxOptions,

    PaperClipIcon,
  },
  setup() {
    return {};
  },
};
</script>
