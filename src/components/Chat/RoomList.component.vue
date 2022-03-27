<template>
  <div class="sm:px-6 lg:px-8 m-10 ">
    <div class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
      <h3 class="text-lg leading-6 font-medium text-gray-900">Rooms</h3>
    </div>
    <div class="bg-white overflow-hidden sm:rounded-md">
      <div class="px-4 py-4  sm:px-6">
        <ul role="list" class="divide-y divide-gray-200 w-full">
          <li
            v-for="person in people"
            :key="person.email"
            class="flex items-center justify-between py-5 "
          >
            <div class="flex">
              <img class="h-10 w-10 rounded-full" :src="person.image" alt="" />
              <div class="ml-3">
                <p class="text-sm font-medium text-gray-900">
                  {{ person.name }}
                </p>
                <p class="text-sm text-gray-500">{{ person.email }}</p>
              </div>
            </div>

            <div class=" sm:mt-0 sm:ml-5">
              <div
                class="
                  flex-shrink-0
                  sm:w-full
                  flex-1
                  h-full
                  inline-flex
                  items-center
                  justify-center
                  px-4
                  py-2
                  rounded-md
                  text-sm
                  font-medium
                  text-black
                  hover:border-transparent
                  cursor-pointer
                "
                tag="button"
                @click="CreateRoom"
              >
                <PaperAirplaneIcon
                  class="btn-chat h-5 w-5"
                  aria-hidden="true"
                />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { PaperAirplaneIcon } from "@heroicons/vue/solid";

const people = [
  {
    name: "Calvin Hawkins",
    email: "rah hna??",
    image:
      "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
    {
    name: "Calvin Hawkins",
    email: "rah hna??",
    image:
      "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },  {
    name: "Calvin Hawkins",
    email: "rah hna??",
    image:
      "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },  {
    name: "Calvin Hawkins",
    email: "rah hna??",
    image:
      "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },  {
    name: "Calvin Hawkins",
    email: "rah hna??",
    image:
      "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },  {
    name: "Calvin Hawkins",
    email: "rah hna??",
    image:
      "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },  {
    name: "Calvin Hawkins",
    email: "rah hna??",
    image:
      "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },  {
    name: "Calvin Hawkins",
    email: "rah hna??",
    image:
      "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },  {
    name: "Calvin Hawkins",
    email: "rah hna??",
    image:
      "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

export default {
  components: {
    PaperAirplaneIcon,
  },
  setup() {
    return {
      people,
    };
  },
};
</script>
