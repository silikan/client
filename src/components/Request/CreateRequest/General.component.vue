
<template>
  <form class="space-y-8 divide-y divide-gray-200 w-full" method="post"  autocomplete="on">
    <div class="space-y-8 divide-y max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
        <div>
          <h3 class="text-lg leading-6 font-medium text-gray-900">Request</h3>
          <p class="mt-1 max-w-2xl text-sm text-gray-500">
            create that Request
          </p>
        </div>
        <div class="space-y-6 sm:space-y-5">
          <div class="-gray-300 rounded-lg shadow-sm overflow-hidden">
            <label
              for="title"
              class="block text-sm font-medium text-black sm:mt-px sm:pt-2"
            >
              Title
            </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <input
              v-model="title"
                autocomplete="on"
                type="text"
                name="title"
                id="title"
                class="
                  appearance-none
                  block
                  w-full
                  px-3
                  py-2
                  border border-gray-300
                  rounded-md
                  shadow-sm
                  placeholder-gray-400
                  focus:outline-none
                  focus:ring-indigo-500
                  focus:border-indigo-500
                  sm:text-sm
                "
              />
            </div>
          </div>

          <div class="-gray-300 rounded-lg shadow-sm overflow-hidden">
            <label
              for="category"
              class="block text-sm font-medium text-black sm:mt-px sm:pt-2"
            >
              Category
            </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <select
              v-model="category"
                id="category"
                name="category"
                autocomplete="on"
                class="
                  block
                  w-full
                  shadow-sm
                  focus:ring-indigo-500 focus:-indigo-500
                  sm:text-sm
                  -gray-300
                  rounded-md
                  appearance-none
                  block
                  w-full
                  px-3
                  py-2
                  border border-gray-300
                  rounded-md
                  shadow-sm
                  placeholder-gray-400
                  focus:outline-none
                  focus:ring-indigo-500
                  focus:border-indigo-500
                  sm:text-sm
                "
              >
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
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
              v-model="description"
                rows="3"
                autocomplete="on"
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
                  appearance-none
                  block
                  w-full
                  px-3
                  py-2
                  border border-gray-300
                  rounded-md
                  shadow-sm
                  placeholder-gray-400
                  focus:outline-none
                  focus:ring-indigo-500
                  focus:border-indigo-500
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
          </div>
        </div>
      </div>
    </div>
  </form>
</template>
<script>
import { ref } from "@vue/reactivity";
import { useStore } from "vuex";
import { watchEffect } from "@vue/runtime-core";
export default {
  components: {},
  setup() {
    let store = useStore();

    let title = ref(null);
    let description = ref(null);
    let category = ref(null);
    watchEffect(() => {
      store.commit("Request/SET_TITLE", title.value);
      store.commit("Request/SET_DESCRIPTION", description.value);
      store.commit("Request/SET_CATEGORY", category.value);
    });

    return {
      title,
      description,
      category,
    };
  },
};
</script>
