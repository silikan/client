<!--
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
  <form action="#" class="relative">
    <div
      class="
        border border-gray-300
        rounded-lg
        shadow-sm
        overflow-hidden
        focus-within:border-indigo-500
        focus-within:ring-1
        focus-within:ring-indigo-500
      "
    >
      <label for="title" class="sr-only">Title</label>
      <input
        type="text"
        name="title"
        id="title"
        :class="[
          titleErrorMessage
            ? 'block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md w-full px-3 py-2 border border-red-300  text-red-900 rounded-md  -smplaceholder-red-400 focus:outline-nonefocus:ring-red-500 focus:border-red-500 sm:text-sm'
            : ' block w-full px-3 py-2 placeholder-gray-400   sm:text-sm',
        ]"
        placeholder="Title"
      />
      <label for="description" class="sr-only">Description</label>
      <textarea
        rows="2"
        name="description"
        id="description"
        :class="[
          descriptionErrorMessage
            ? 'block w-full py-3 h-40 -0 resize-none focus:ring-0  pr-10 sm:text-sm  appearance-none px-3 border border-red-300 rounded-md-sm placeholder-red-400 text-red-600 focus:outline-none focus:ring-red-500 focus:border-red-500'
            : ' block w-full py-3 h-40 -0 resize-none focus:ring-0  pr-10 sm:text-sm  appearance-none px-3 -sm placeholder-gray-400 focus:outline-none ',
        ]"
        placeholder="Write a description..."
      />

      <!-- Spacer element to match the height of the toolbar -->
    </div>

    <div class="absolute bottom-0 inset-x-px">
      <div
        class="
          border-t border-gray-200
          px-2
          py-2
          flex
          justify-between
          items-center
          space-x-3
          sm:px-3
        "
      >
        <div class="flex   cursor-pointer">
          <div class=" rounded-md">
            <div
              class="
			    cursor-pointer
                group
                relative

                rounded-md
                py-2
                px-3
                flex
                items-center
                justify-center

              "
            >
              <label
                for="mobile-user-photo"
                class="
                  relative
                  text-sm
                  leading-4
                  font-medium
                  text-gray-700
                  pointer-events-none
                "
              >
                <div
                  type="div"
                  class="

                    -ml-2
                    -my-2
                    rounded-full
                    px-3
                    py-2
                    inline-flex
                    items-center
                    text-left text-gray-400
                    group
                  "
                >
                  <PhotographIcon
                    class="  cursor-pointer -ml-1 h-5 w-5 mr-2 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                  <span
                    class="
                      text-sm text-gray-500
                      group-hover:text-gray-600
                      italic
                    "
                    >Attach an Image</span
                  >
                </div>
              </label>
              <input
                id="mobile-user-photo"
                name="user-photo"
                type="file"
                :fileTypes="['image/*']"
                endpoint="/users/auth/avatar"
                @change="fileChange"
                :accept="fileTypes"
                class="
                  absolute
                  w-full
                  h-full
                  opacity-0
                  cursor-pointer
                  border-gray-300
                  rounded-md
                "
              />
            </div>
          </div>
        </div>
        <div class="flex-shrink-0">
          <button
            type="submit"
            class="
              inline-flex
              items-center
              px-4
              py-2
              border border-transparent
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
            Create
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { ref } from "vue";

import { PhotographIcon } from "@heroicons/vue/solid";

const assignees = [
  { name: "Unassigned", value: null },
  {
    name: "Wade Cooper",
    value: "wade-cooper",
    avatar:
      "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  // More items...
];
const labels = [
  { name: "Unlabelled", value: null },
  { name: "Engineering", value: "engineering" },
  // More items...
];
const dueDates = [
  { name: "No due date", value: null },
  { name: "Today", value: "today" },
  // More items...
];

export default {
  components: {
    PhotographIcon,
  },
  setup() {
    const assigned = ref(assignees[0]);
    const labelled = ref(labels[0]);
    const dated = ref(dueDates[0]);

    return {
      assignees,
      labels,
      dueDates,
      assigned,
      labelled,
      dated,
    };
  },
};
</script>
