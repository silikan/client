<template>
  <div class="  m-10 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-7 ">
    <div
      v-for="category in categories"
      :key="category.handle"
      role="list"
      class=""
    >
      <h1 class="text-lg font-medium ">
        {{ category.name }}
      </h1>
      <div>
        <div class="flow-root mt-6">
          <ul
            role="list"
            class="-my-5 divide-y divide-gray-200"
          >
            <li class="py-4">
              <div>
                <div
                  v-for="sub in category.subservices"
                  :key="sub"
                  class="flex items-center p-1 space-x-4"
                >
                  <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-gray-900 truncate">
                      {{ sub }}
                    </p>
                  </div>
                  <div>
                    <a
                      href="#"
                      class="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"
                    >
                      View
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="mt-6">
          <a
            href="#"
            class="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            View all
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const categories = [
  {
    name: 'fuck me',
    subservices: ['a', 'b', 'c'],

  },
  {
    name: 'fuck me',
    subservices: ['a', 'b', 'c'],

  }, {
    name: 'fuck me',
    subservices: ['a', 'b', 'c'],

  }, {
    name: 'fuck me',
    subservices: ['a', 'b', 'c'],

  }, {
    name: 'fuck me',
    subservices: ['a', 'b', 'c'],

  }, {
    name: 'fuck me',
    subservices: ['a', 'b', 'c'],

  }, {
    name: 'fuck me',
    subservices: ['a', 'b', 'c'],

  }, {
    name: 'fuck me',
    subservices: ['a', 'b', 'c'],

  }, {
    name: 'fuck me',
    subservices: ['a', 'b', 'c'],

  },

];

export default {
  setup() {
    return {
      categories,
    };
  },
};
</script>
