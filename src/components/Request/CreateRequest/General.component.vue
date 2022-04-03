
<template>
  <form class="space-y-8 divide-y divide-gray-200 w-full">
    <div class="space-y-8 divide-y max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
        <div>
          <h3 class="text-lg leading-6 font-medium text-gray-900">Gig</h3>
          <p class="mt-1 max-w-2xl text-sm text-gray-500">create that gig</p>
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
                type="text"
                name="title"
                id="title"
                autocomplete="given-name"
                class="
                  block
                  w-full
                  shadow-sm
                  focus:ring-indigo-500 focus:-indigo-500
                  sm:text-sm
                  -gray-300
                  rounded-md
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
                id="category"
                name="category"
                autocomplete="category-name"
                class="
                  block
                  w-full
                  shadow-sm
                  focus:ring-indigo-500 focus:-indigo-500
                  sm:text-sm
                  -gray-300
                  rounded-md
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


          </div>
        </div>
      </div>
    </div>
  </form>
</template>
<script>

export default {
  components: {


  },
  setup() {
    return {};
  },
};
</script>
