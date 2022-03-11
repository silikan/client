<template>
  <div class="relative bg-gray-800 overflow-hidden">
    <div class="hidden sm:block sm:absolute sm:inset-0" aria-hidden="true">
      <svg
        class="
          absolute
          bottom-0
          right-0
          transform
          translate-x-1/2
          mb-48
          text-gray-700
          lg:top-0 lg:mt-28 lg:mb-0
          xl:transform-none xl:translate-x-0
        "
        width="364"
        height="384"
        viewBox="0 0 364 384"
        fill="none"
      >
        <defs>
          <pattern
            id="eab71dd9-9d7a-47bd-8044-256344ee00d0"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="4" height="4" fill="currentColor" />
          </pattern>
        </defs>
        <rect
          width="364"
          height="384"
          fill="url(#eab71dd9-9d7a-47bd-8044-256344ee00d0)"
        />
      </svg>
    </div>
    <div class="relative pt-6">
      <Popover>
        <nav
          class="
            relative
            max-w-7xl
            mx-auto
            flex
            items-center
            justify-between
            px-4
            sm:px-6
          "
          aria-label="Global"
        >
          <div class="flex items-center flex-1">
            <div class="flex items-center justify-between w-full md:w-auto">
              <a href="#">
                <span class="sr-only">Workflow</span>
                <img
                  class="h-8 w-auto sm:h-10"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                  alt=""
                />
              </a>
              <div class="-mr-2 flex items-center md:hidden">
                <PopoverButton
                  class="
                    bg-gray-800
                    rounded-md
                    p-2
                    inline-flex
                    items-center
                    justify-center
                    text-gray-400
                    hover:bg-gray-700
                    focus:outline-none
                    focus:ring-2
                    focus-ring-inset
                    focus:ring-white
                  "
                >
                  <span class="sr-only">Open main menu</span>
                  <MenuIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div class="hidden space-x-10 md:flex md:ml-10">
              <router-link
                v-for="item in navigation"
                :key="item.name"
                :to="item.link"
                class="
                  font-medium
                  text-white
                  hover:text-gray-300
                  cursor-pointer
                "
                >{{ item.name }}</router-link
              >
            </div>
          </div>
          <div class="flex justify-between">
            <div class="hidden md:flex mx-4">
                 <router-link
                to="/signin"
                class="
                  inline-flex
                  items-center
                  px-5
                  py-2
                  border border-transparent
                  text-sm
                  font-medium
                  rounded-full
                  shadow-sm
                  text-black
                  bg-white
                  hover:bg-transparent hover:text-white hover:border-white
                "
              >
                Signin
              </router-link>
            </div>
            <div class="hidden md:flex">
            <router-link
                to="/signup"
                class="
                  inline-flex
                  items-center
                  px-5
                  py-2
                  border border-transparent
                  text-sm
                  font-medium
                  rounded-full
                  shadow-sm
                  text-white
                  bg-indigo-600
                  hover:bg-indigo-700
                "
              >
                Signup
              </router-link>
            </div>
          </div>
        </nav>

        <transition
          enter-active-class="duration-150 ease-out"
          enter-from-class="opacity-0 scale-95"
          enter-to-class="opacity-100 scale-100"
          leave-active-class="duration-100 ease-in"
          leave-from-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-95"
        >
          <PopoverPanel
            focus
            class="
              absolute
              z-10
              top-0
              inset-x-0
              p-2
              transition
              transform
              origin-top-right
              md:hidden
            "
          >
            <div
              class="
                rounded-lg
                shadow-md
                bg-white
                ring-1 ring-black ring-opacity-5
                overflow-hidden
              "
            >
              <div class="px-5 pt-4 flex items-center justify-between">
                <div>
                  <img
                    class="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt=""
                  />
                </div>
                <div class="-mr-2">
                  <PopoverButton
                    class="
                      bg-white
                      rounded-md
                      p-2
                      inline-flex
                      items-center
                      justify-center
                      text-gray-400
                      hover:bg-gray-100
                      focus:outline-none
                      focus:ring-2
                      focus:ring-inset
                      focus:ring-indigo-500
                    "
                  >
                    <span class="sr-only">Close menu</span>
                    <XIcon class="h-6 w-6" aria-hidden="true" />
                  </PopoverButton>
                </div>
              </div>
              <div class="px-2 pt-2 pb-3 space-y-1">
                <router-link
                  v-for="item in navigation"
                  :key="item.name"
                  :to="item.link"
                  class="
                    block
                    px-3
                    py-2
                    rounded-md
                    text-base
                    font-medium
                    text-gray-700
                    hover:text-gray-900 hover:bg-gray-50
                    cursor-pointer
                  "
                  >{{ item.name }}</router-link
                >
              </div>
              <a
                href="#"
                class="
                  block
                  w-full
                  px-5
                  py-3
                  text-center
                  font-medium
                  text-indigo-600
                  bg-gray-50
                  hover:bg-gray-100
                "
              >
                Log in
              </a>
            </div>
          </PopoverPanel>
        </transition>
      </Popover>

      <main class="mt-16 sm:mt-24">
        <div class="mx-auto max-w-7xl">
          <div class="lg:grid lg:grid-cols-12 lg:gap-8">
            <div
              class="
                px-4
                sm:px-6
                col-span-6
                text-left
                lg:flex
                items-center
                flex
              "
            >
              <div>
                <h1
                  class="
                    mt-4
                    tracking-tight
                    font-extrabold
                    text-white
                    sm:mt-5 sm:leading-none
                    lg:mt-6
                  "
                >
                  <span class="text-indigo-400 text-left text-5xl xl:text-6xl"
                    >Silikan</span
                  >
                </h1>
                <p
                  class="
                    mt-2
                    md:text-4xl
                    text-3xl
                    font-extrabold
                    text-white
                    tracking-tight
                    text-left
                  "
                >
                  Everything you need to deploy your app
                </p>
                <div class="mt-5 w-full sm:mx-auto sm:max-w-lg lg:ml-0 mt-20">
                  <div class="hero bg-gredient-dark h-400px flex flex-col px-2">
                    <div class="w-full">
                      <label for="search" class="sr-only">Search</label>
                      <div class="relative">
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
                          <SearchIcon
                            class="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </div>
                        <div
                          class="
                            absolute
                            inset-y-0
                            right-0
                            pr-1
                            py-1
                            flex
                            items-center
                          "
                        >
                          <button
                            type="button"
                            class="
                              inline-flex
                              items-center
                              px-3.5
                              py-2
                              border border-transparent
                              text-sm
                              leading-4
                              font-medium
                              rounded-full
                              shadow-sm
                              text-white
                              bg-indigo-600
                              hover:bg-indigo-700
                              focus:outline-none
                              focus:ring-2
                              focus:ring-offset-2
                              focus:ring-indigo-500
                              cursor-pointer
                            "
                          >
                            Search
                          </button>
                        </div>
                        <input
                          id="search"
                          name="search"
                          class="
                            rounded-full
                            block
                            w-full
                            h-11
                            pl-10
                            pr-3
                            py-2
                            border border-transparent
                            rounded-md
                            leading-5
                            bg-white
                            text-gray-300
                            placeholder-gray-400
                            focus:outline-non focus:text-gray-900
                            sm:text-sm
                            p-10
                          "
                          placeholder="Search"
                          type="search"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="
                lg:mt-0 lg:col-span-6
                md:row-span-6
                flex
                items-end
                mt-16
                sm:mt-24
              "
            >
              <img
                src="@\assets\undraw_house_searching_re_stk8.svg"
                class=""
                alt=""
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
  <!--  -->
</template>

<script>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { MenuIcon, XIcon } from "@heroicons/vue/outline";
import { SearchIcon } from "@heroicons/vue/solid";

const navigation = [
  { name: "About", link: "/about" },
  { name: "Contact Us", link: "/contact" },
  { name: "Services", link: "/services" },
  { name: "Requests", link: "/requests" },
  { name: "Handymen", link: "/handymen" },
];

export default {
  components: {
    Popover,
    PopoverButton,
    PopoverPanel,
    MenuIcon,
    XIcon,
    SearchIcon,
  },
  setup() {
    return {
      navigation,
    };
  },
};
</script>
