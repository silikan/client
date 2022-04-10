<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="my-10">
    <h2 class="text-gray-500 text-xs font-medium uppercase tracking-wide">Categories</h2>
    <ul role="list" class="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <li v-for="category in categories" :key="category.name" >
        <router-link :to="`/category/${category.name}`" class="col-span-1 flex shadow-sm rounded-md">
         <img
                class="flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md "
                :src="category.avatar_svg"
                alt=""
              />
        <div class="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
          <div class="flex-1 px-4 py-2 text-sm truncate">
            <a :href="category.href" class="text-gray-900 font-medium hover:text-gray-600">{{ category.name }}</a>
            <p class="text-gray-500">{{ category.members }} Members</p>
          </div>
   <div class="flex-shrink-0 pr-2">
            <button type="button" class="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span class="sr-only">Open options</span>
              <ChevronRightIcon class="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { ChevronRightIcon } from '@heroicons/vue/solid'

const projects = [
  { name: 'Graph API', initials: 'GA', href: '#', members: 16, bgColor: 'bg-pink-600' },
  { name: 'Component Design', initials: 'CD', href: '#', members: 12, bgColor: 'bg-purple-600' },
  { name: 'Templates', initials: 'T', href: '#', members: 16, bgColor: 'bg-yellow-500' },
  { name: 'React Components', initials: 'RC', href: '#', members: 8, bgColor: 'bg-green-500' },
]

 import { ref } from '@vue/reactivity';
import { useStore } from 'vuex';
import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/avatars-initials-sprites";

export default {
  components: {
    ChevronRightIcon,
  },
  setup() {
    let categories = ref([]);
let avatar_svg = ref()
    let store = useStore();
    store.dispatch("Category/getCategories").then((result) => {

      categories.value = result.map((category) => {
            avatar_svg.value = createAvatar(style, {
          seed: category.title,
          dataUri: true,
          // ... and other options
        })
        console.log(avatar_svg.value)
        return {
          name: category.title,
          path: `/categories/${category.id}`,
          avatar_svg: avatar_svg.value,
        }
      });

      console.log(categories.value)
    });
    return {
      categories,
      projects
    };
  },
};
</script>




