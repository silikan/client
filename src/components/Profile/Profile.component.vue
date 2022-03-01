<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div>
    <div>
      <img
        class="h-32 w-full object-cover lg:h-48"
        :src="profile.backgroundImage"
        alt=""
      />
    </div>
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
        <div class="flex justify-center items-center md:flex-none">
          <div
            class="h-40 w-40 rounded-full ring-4 ring-white sm:h-48 sm:w-48"
            aria-hidden="true"
          >
            <img
              class="h-40 w-40 rounded-full ring-4 ring-white sm:h-48 sm:w-48"
              :src="avatar_svg"
              v-if="avatarWithoutLocalhost === null"
              alt=""
            />
            <img
              class="h-40 w-40 rounded-full ring-4 ring-white sm:h-48 sm:w-48"
              :src="avatar"
              v-if="avatarWithoutLocalhost !== null"
              alt=""
            />
          </div>
        </div>
        <div
          class="
            mt-6
            sm:flex-1
            sm:min-w-0
            sm:flex
            sm:items-center
            sm:justify-end
            sm:space-x-6
            sm:pb-1
          "
        >
          <div class="mt-6 sm:ml-6 sm:flex-1">
            <div class="flex flex-col items-center sm:block">
              <div class="flex items-center sm:mt-6 min-w-0 flex-1">
                <h3 class="font-bold text-xl text-gray-900 sm:text-2xl">
                  {{ authUserData.name }}
                </h3>
                <span
                  v-if="authUserData.is_online === true"
                  class="
                    ml-2.5
                    bg-green-400
                    flex-shrink-0
                    inline-block
                    h-2
                    w-2
                    rounded-full
                  "
                >
                  <span class="sr-only">Online</span>
                </span>
                <span
                  v-if="authUserData.is_online === false"
                  class="
                    ml-2.5
                    bg-red-400
                    flex-shrink-0
                    inline-block
                    h-2
                    w-2
                    rounded-full
                  "
                >
                  <span class="sr-only">Offline</span>
                </span>
              </div>
              <p class="text-sm text-gray-500">@{{ authUserData.username }}</p>
            </div>
            <div
              class="mt-5 flex flex-wrap space-y-3 sm:space-y-0 sm:space-x-3"
            >
              <button
                type="button"
                class="
                  flex-shrink-0
                  w-full
                  inline-flex
                  items-center
                  justify-center
                  px-4
                  py-2
                  border border-transparent
                  rounded-md
                  shadow-sm
                  text-sm
                  font-medium
                  text-white
                  bg-indigo-600
                  hover:bg-indigo-700
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-indigo-500
                  sm:flex-1
                "
              >
                Hire
              </button>
              <button
                type="button"
                class="
                  flex-1
                  w-full
                  sm:flex-none sm:w-auto
                  inline-flex
                  items-center
                  justify-center
                  px-4
                  py-2
                  border border-gray-300
                  rounded-md
                  shadow-sm
                  text-sm
                  font-medium
                  text-gray-700
                  bg-white
                  hover:bg-gray-50
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-indigo-500
                "
              >
                <PaperAirplaneIcon
                  class="h-5 w-5 rotate-90"
                  aria-hidden="true"
                />
              </button>
              <span class="ml-3 inline-flex sm:ml-0">
                <Menu as="div" class="relative inline-block text-left">
                  <MenuButton
                    class="
                      inline-flex
                      items-center
                      p-2
                      border border-gray-300
                      rounded-md
                      shadow-sm
                      text-sm
                      font-medium
                      text-gray-400
                      bg-white
                      hover:bg-gray-50
                      focus:outline-none
                      focus:ring-2
                      focus:ring-offset-2
                      focus:ring-indigo-500
                    "
                  >
                    <span class="sr-only">Open options menu</span>
                    <DotsVerticalIcon class="h-5 w-5" aria-hidden="true" />
                  </MenuButton>
                  <transition
                    enter-active-class="transition ease-out duration-100"
                    enter-from-class="transform opacity-0 scale-95"
                    enter-to-class="transform opacity-100 scale-100"
                    leave-active-class="transition ease-in duration-75"
                    leave-from-class="transform opacity-100 scale-100"
                    leave-to-class="transform opacity-0 scale-95"
                  >
                    <MenuItems
                      class="
                        origin-top-right
                        absolute
                        right-0
                        mt-2
                        w-48
                        rounded-md
                        shadow-lg
                        bg-white
                        ring-1 ring-black ring-opacity-5
                        focus:outline-none
                      "
                    >
                      <div class="py-1">
                        <MenuItem v-slot="{ active }">
                          <a
                            href="#"
                            :class="[
                              active
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-700',
                              'block px-4 py-2 text-sm',
                            ]"
                            >View profile</a
                          >
                        </MenuItem>
                        <MenuItem v-slot="{ active }">
                          <a
                            href="#"
                            :class="[
                              active
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-700',
                              'block px-4 py-2 text-sm',
                            ]"
                            >Copy profile link</a
                          >
                        </MenuItem>
                      </div>
                    </MenuItems>
                  </transition>
                </Menu>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-6 sm:mt-2 2xl:mt-5">
      <div class="border-b border-gray-200">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav class="-mb-px flex space-x-8" aria-label="Tabs">
            <a
              v-for="tab in tabs"
              :key="tab.name"
              :href="tab.href"
              :class="[
                tab.current
                  ? 'border-pink-500 text-gray-900'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm',
              ]"
              :aria-current="tab.current ? 'page' : undefined"
            >
              {{ tab.name }}
            </a>
          </nav>
        </div>
      </div>
    </div>
    <About :Data="authUserData" v-if="tabs[0].current === true" />
    <Info :Data="authUserData" v-if="tabs[1].current === true"/>
    <Resume :Data="authUserData" v-if="tabs[2].current === true"/>
  </div>
  <div class="mt-6 sm:mt-2 2xl:mt-5">
    <div class="border-b border-gray-200">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav class="-mb-px flex space-x-8" aria-label="Tabs">
          <a
            v-for="tab in Gigs_Requests_tabs"
            :key="tab.name"
            :href="tab.href"
            :class="[
              tab.current
                ? 'border-pink-500 text-gray-900'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
              'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm',
            ]"
            :aria-current="tab.current ? 'page' : undefined"
          >
            {{ tab.name }}
          </a>
        </nav>
      </div>
    </div>
  </div>
  <ClientRequests v-if="Gigs_Requests_tabs[0].current === true" />

  <HandymanGigs
    v-if="Gigs_Requests_tabs[1].current === true && isHandyman === true"
  />
</template>

<script>
import About from "./About.component.vue";
import Resume from "./Resume.component.vue";
import Info from "./Info.component.vue";
import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/avatars-initials-sprites";

import ClientRequests from "./Client_Requests.component.vue";
import HandymanGigs from "./Handyman_Gigs.component.vue";

import { PaperAirplaneIcon } from "@heroicons/vue/solid";

import { DotsVerticalIcon } from "@heroicons/vue/solid";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { computed, onMounted, ref } from "@vue/runtime-core";
const tabs = [
  { name: "About", href: "#", current: true },
  { name: "Info", href: "#", current: false },
  { name: "Resume", href: "#", current: false },
];
const Gigs_Requests_tabs = [
  { name: "Requests", href: "#", current: true },
  { name: "Gigs", href: "#", current: false, isHandyman: true },
];
const profile = {
  name: "Ricardo Cooper",
  email: "ricardo.cooper@example.com",
  avatar:
    "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  backgroundImage:
    "https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  fields: [
    ["Phone", "(555) 123-4567"],
    ["Email", "ricardocooper@example.com"],
    ["Title", "Senior Front-End Developer"],
    ["Team", "Product Development"],
    ["Location", "San Francisco"],
    ["Sits", "Oasis, 4th floor"],
    ["Salary", "$145,000"],
    ["Birthday", "June 8, 1990"],
  ],
};

export default {
  components: {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,

    DotsVerticalIcon,
    PaperAirplaneIcon,
    ClientRequests,
    HandymanGigs,
    About,
    Resume,
    Info,
  },
  props: ["authUser"],

  setup(props) {
    let isHandyman = ref(false);
    let isClient = ref(false);

    let authUserData = computed(() => {
      return props.authUser;
    });

    onMounted(() => {
      isHandyman.value = authUserData.value.isHandyman;
      isClient.value = authUserData.value.isClient;
    });

    let avatar_svg = createAvatar(style, {
      seed: authUserData.value.name,
      dataUri: true,
      // ... and other options
    });
    let avatar = `${process.env.VUE_APP_API_URL}/${authUserData.value.avatar}`;
let OathAvatar = authUserData.value.avatar;

    let avatarWithoutLocalhost = authUserData.value.avatar;

    if(authUserData.value.avatar !== null){
if(authUserData.value.avatar.includes("googleusercontent.com") || authUserData.value.avatar.includes("graph.facebook.com")){
  avatar = OathAvatar;
}

}

    return {
      profile,
      tabs,
      authUserData,
      avatar_svg,
      avatarWithoutLocalhost,
      avatar,
      isHandyman,
      isClient,
      Gigs_Requests_tabs,
    };
  },
};
</script>
