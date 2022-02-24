
<template>
  <form class="divide-y divide-gray-200 lg:col-span-9" action="#" method="POST">
    <!-- Profile section -->
    <div class="py-6 px-4 sm:p-6 lg:pb-8">
      <div>
        <h2 class="text-lg leading-6 font-medium text-gray-900">Profile</h2>
        <p class="mt-1 text-sm text-gray-500">
          This information will be displayed publicly so be careful what you
          share.
        </p>
      </div>

      <div class="mt-6 flex flex-col lg:flex-row">
        <div class="flex-grow space-y-6">
          <div>
            <label
              for="username"
              class="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <div class="mt-1 rounded-md shadow-sm flex">
              <span
                class="
                  bg-gray-50
                  border border-r-0 border-gray-300
                  rounded-l-md
                  px-3
                  inline-flex
                  items-center
                  text-gray-500
                  sm:text-sm
                "
              >
                Silikan.com/user/
              </span>
              <input
                type="text"
                name="username"
                id="username"
                autocomplete="username"
                class="
                  focus:ring-indigo-500 focus:border-indigo-500
                  flex-grow
                  block
                  w-full
                  min-w-0
                  rounded-none rounded-r-md
                  sm:text-sm
                  border-gray-300
                "
                :value="user.handle"
              />
            </div>
          </div>

          <div>
            <label for="about" class="block text-sm font-medium text-gray-700">
              Bio
            </label>
            <div class="mt-1">
              <textarea
                id="about"
                name="about"
                rows="3"
                class="
                  shadow-sm
                  focus:ring-indigo-500 focus:border-indigo-500
                  mt-1
                  block
                  w-full
                  sm:text-sm
                  border border-gray-300
                  rounded-md
                "
              />
            </div>
            <p class="mt-2 text-sm text-gray-500">
              Brief description for your profile. URLs are hyperlinked.
            </p>
          </div>
        </div>

        <div
          class="mt-6 flex-grow lg:mt-0 lg:ml-6 lg:flex-grow-0 lg:flex-shrink-0"
        >
          <p class="text-sm font-medium text-gray-700" aria-hidden="true">
            Photo
          </p>
          <div class="mt-1 lg:hidden">
            <div class="flex items-center">
              <div
                class="
                  flex-shrink-0
                  inline-block
                  rounded-full
                  overflow-hidden
                  h-12
                  w-12
                "
                aria-hidden="true"
              >
                <img
                  class="rounded-full h-full w-full"
                  :src="user.imageUrl"
                  alt=""
                />
              </div>
              <div class="ml-5 rounded-md shadow-sm">
                <div
                  class="
                    group
                    relative
                    border border-gray-300
                    rounded-md
                    py-2
                    px-3
                    flex
                    items-center
                    justify-center
                    hover:bg-gray-50
                    focus-within:ring-2
                    focus-within:ring-offset-2
                    focus-within:ring-indigo-500
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
                    <span>Change</span>
                    <span class="sr-only"> user photo</span>
                  </label>
                  <input
                    id="mobile-user-photo"
                    name="user-photo"
                    type="file"
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
          </div>

          <div class="hidden relative rounded-full overflow-hidden lg:block">
            <img
              class="relative rounded-full w-40 h-40"
              :src="user.imageUrl"
              alt=""
            />
            <label
              for="desktop-user-photo"
              class="
                absolute
                inset-0
                w-full
                h-full
                bg-black bg-opacity-75
                flex
                items-center
                justify-center
                text-sm
                font-medium
                text-white
                opacity-0
                hover:opacity-100
                focus-within:opacity-100
              "
            >
              <span>Change</span>
              <span class="sr-only"> user photo</span>
              <input
                type="file"
                id="desktop-user-photo"
                name="user-photo"
                class="
                  absolute
                  inset-0
                  w-full
                  h-full
                  opacity-0
                  cursor-pointer
                  border-gray-300
                  rounded-md
                "
              />
            </label>
          </div>
        </div>
      </div>

      <div class="mt-6 grid grid-cols-12 gap-6">
        <div class="col-span-12 sm:col-span-6">
          <label
            for="first-name"
            class="block text-sm font-medium text-gray-700"
          >
            name</label
          >
          <input
            type="text"
            name="first-name"
            id="first-name"
            autocomplete="given-name"
            class="
              mt-1
              block
              w-full
              border border-gray-300
              rounded-md
              shadow-sm
              py-2
              px-3
              focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
              sm:text-sm
            "
          />
        </div>

        <div class="col-span-12 sm:col-span-6">
          <label
            for="phone-number"
            class="block text-sm font-medium text-gray-700"
            >Phone Number</label
          >
          <div class="mt-1 relative rounded-md shadow-sm">
            <div class="absolute inset-y-0 left-0 flex items-center">
              <label for="country" class="sr-only">Country</label>
              <select
                id="country"
                name="country"
                autocomplete="country"
                class="
                  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
                  h-full
                  py-0
                  pl-3
                  pr-7
                  border-transparent
                  bg-transparent
                  text-gray-500
                  sm:text-sm
                  rounded-md
                "
              >
                <option>DZ</option>
                <option>US</option>
                <option>EU</option>
              </select>
            </div>
            <input
              type="text"
              name="phone-number"
              id="phone-number"
              class="
                mt-1
                block
                w-full
                border border-gray-300
                rounded-md
                shadow-sm
                py-2
                px-3
                pl-24
                focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
                sm:text-sm
              "
              placeholder="+1 (555) 987-6543"
            />
          </div>
        </div>

        <div class="col-span-12 sm:col-span-8">
          <label for="country" class="block text-sm font-medium text-gray-700"
            >Country</label
          >
          <select
            id="country"
            name="country"
            autocomplete="country-name"
            class="
              mt-1
              block
              w-full
              bg-white
              border border-gray-300
              rounded-md
              shadow-sm
              py-2
              px-3
              focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
              sm:text-sm
            "
          >
            <option>United States</option>
            <option>Canada</option>
            <option>Mexico</option>
          </select>
        </div>

        <div class="col-span-12 sm:col-span-12">
          <label
            for="street-address"
            class="block text-sm font-medium text-gray-700"
            >Street address</label
          >
          <input
            type="text"
            name="street-address"
            id="street-address"
            autocomplete="street-address"
            class="
              mt-1
              block
              w-full
              border border-gray-300
              rounded-md
              shadow-sm
              py-2
              px-3
              focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
              sm:text-sm
            "
          />
        </div>

        <div class="col-span-12 sm:col-span-6">
          <label for="city" class="block text-sm font-medium text-gray-700"
            >City</label
          >
          <input
            type="text"
            name="city"
            id="city"
            autocomplete="address-level2"
            class="
              mt-1
              block
              w-full
              border border-gray-300
              rounded-md
              shadow-sm
              py-2
              px-3
              focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
              sm:text-sm
            "
          />
        </div>

        <div class="col-span-12 sm:col-span-6">
          <label for="region" class="block text-sm font-medium text-gray-700"
            >State / Province</label
          >
          <input
            type="text"
            name="region"
            id="region"
            autocomplete="address-level1"
            class="
              mt-1
              block
              w-full
              border border-gray-300
              rounded-md
              shadow-sm
              py-2
              px-3
              focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
              sm:text-sm
            "
          />
        </div>

        <div class="col-span-12 sm:col-span-6">
          <label
            for="postal-code"
            class="block text-sm font-medium text-gray-700"
            >ZIP / Postal code</label
          >
          <input
            type="text"
            name="postal-code"
            id="postal-code"
            autocomplete="postal-code"
            class="
              mt-1
              block
              w-full
              border border-gray-300
              rounded-md
              shadow-sm
              py-2
              px-3
              focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
              sm:text-sm
            "
          />
        </div>

        <div class="col-span-12 sm:col-span-6">
          <label
            for="company-website"
            class="block text-sm font-medium text-gray-700"
          >
            Company Website
          </label>
          <div class="mt-1 flex rounded-md shadow-sm">
            <span
              class="
                inline-flex
                items-center
                px-3
                rounded-l-md
                border border-r-0 border-gray-300
                bg-gray-50
                text-gray-500
                sm:text-sm
              "
            >
              http://
            </span>
            <input
              type="text"
              name="company-website"
              id="company-website"
              class="
                mt-1
                block
                w-full
                border border-gray-300
                rounded-md
                shadow-sm
                py-2
                px-3
                focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
                sm:text-sm
              "
              placeholder="www.example.com"
            />
          </div>
        </div>

        <div class="col-span-12 sm:col-span-6">
          <label for="email" class="block text-sm font-medium text-gray-700"
            >Experiences</label
          >
          <div class="mt-1 flex rounded-md shadow-sm">
            <div
              class="relative flex items-stretch flex-grow focus-within:z-10"
            >
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
                <UsersIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="email"
                name="email"
                id="email"
                class="
                  focus:ring-indigo-500 focus:border-indigo-500
                  block
                  w-full
                  rounded-none rounded-l-md
                  pl-10
                  sm:text-sm
                 border  border-gray-300
                "
                placeholder="John Doe"
              />
            </div>
            <button
              type="button"
              class="
                -ml-px
                relative
                inline-flex
                items-center
                space-x-2
                px-4
                py-2
                border border-gray-300
                text-sm
                font-medium
                rounded-r-md
                text-gray-700
                bg-gray-50
                hover:bg-gray-100
                focus:outline-none
                focus:ring-1
                focus:ring-indigo-500
                focus:border-indigo-500
              "
            >
              <SortAscendingIcon
                class="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              <span>Sort</span>
            </button>
          </div>
        </div>
          <div class="col-span-12 sm:col-span-6">
          <label for="email" class="block text-sm font-medium text-gray-700"
            >Certifications</label
          >
          <div class="mt-1 flex rounded-md shadow-sm">
            <div
              class="relative flex items-stretch flex-grow focus-within:z-10"
            >
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
                <UsersIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="email"
                name="email"
                id="email"
                class="
                  focus:ring-indigo-500 focus:border-indigo-500
                  block
                  w-full
                  rounded-none rounded-l-md
                  pl-10
                  sm:text-sm
                 border  border-gray-300
                "
                placeholder="John Doe"
              />
            </div>
            <button
              type="button"
              class="
                -ml-px
                relative
                inline-flex
                items-center
                space-x-2
                px-4
                py-2
                border border-gray-300
                text-sm
                font-medium
                rounded-r-md
                text-gray-700
                bg-gray-50
                hover:bg-gray-100
                focus:outline-none
                focus:ring-1
                focus:ring-indigo-500
                focus:border-indigo-500
              "
            >
              <SortAscendingIcon
                class="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              <span>Sort</span>
            </button>
          </div>
        </div>
          <div class="col-span-12 sm:col-span-6">
          <label for="email" class="block text-sm font-medium text-gray-700"
            >Education</label
          >
          <div class="mt-1 flex rounded-md shadow-sm">
            <div
              class="relative flex items-stretch flex-grow focus-within:z-10"
            >
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
                <UsersIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="email"
                name="email"
                id="email"
                class="
                  focus:ring-indigo-500 focus:border-indigo-500
                  block
                  w-full
                  rounded-none rounded-l-md
                  pl-10
                  sm:text-sm
                 border  border-gray-300
                "
                placeholder="John Doe"
              />
            </div>
            <button
              type="button"
              class="
                -ml-px
                relative
                inline-flex
                items-center
                space-x-2
                px-4
                py-2
                border border-gray-300
                text-sm
                font-medium
                rounded-r-md
                text-gray-700
                bg-gray-50
                hover:bg-gray-100
                focus:outline-none
                focus:ring-1
                focus:ring-indigo-500
                focus:border-indigo-500
              "
            >
              <SortAscendingIcon
                class="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              <span>Sort</span>
            </button>
          </div>
        </div>
           <div class="col-span-12 sm:col-span-6">
          <label for="email" class="block text-sm font-medium text-gray-700"
            >Skills</label
          >
          <div class="mt-1 flex rounded-md shadow-sm">
            <div
              class="relative flex items-stretch flex-grow focus-within:z-10"
            >
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
                <UsersIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="email"
                name="email"
                id="email"
                class="
                  focus:ring-indigo-500 focus:border-indigo-500
                  block
                  w-full
                  rounded-none rounded-l-md
                  pl-10
                  sm:text-sm
                 border  border-gray-300
                "
                placeholder="John Doe"
              />
            </div>
            <button
              type="button"
              class="
                -ml-px
                relative
                inline-flex
                items-center
                space-x-2
                px-4
                py-2
                border border-gray-300
                text-sm
                font-medium
                rounded-r-md
                text-gray-700
                bg-gray-50
                hover:bg-gray-100
                focus:outline-none
                focus:ring-1
                focus:ring-indigo-500
                focus:border-indigo-500
              "
            >
              <SortAscendingIcon
                class="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              <span>Sort</span>
            </button>
          </div>
        </div>
        <div class="col-span-12 sm:col-span-8">
          <label
            for="company-website"
            class="block text-sm font-medium text-gray-700"
          >
            Facebook
          </label>
          <div class="mt-1 flex rounded-md shadow-sm">
            <span
              class="
                inline-flex
                items-center
                px-3
                rounded-l-md
                border border-r-0 border-gray-300
                bg-gray-50
                text-gray-500
                sm:text-sm
              "
            >
              fb.com/
            </span>
            <input
              type="text"
              name="company-website"
              id="company-website"
              class="
                mt-1
                block
                w-full
                border border-gray-300
                rounded-md
                shadow-sm
                py-2
                px-3
                focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
                sm:text-sm
              "
              placeholder="www.example.com"
            />
          </div>
        </div>
 <div class="col-span-12 sm:col-span-8">
          <label
            for="company-website"
            class="block text-sm font-medium text-gray-700"
          >
            Twitter
          </label>
          <div class="mt-1 flex rounded-md shadow-sm">
            <span
              class="
                inline-flex
                items-center
                px-3
                rounded-l-md
                border border-r-0 border-gray-300
                bg-gray-50
                text-gray-500
                sm:text-sm
              "
            >
              twt.com/
            </span>
            <input
              type="text"
              name="company-website"
              id="company-website"
              class="
                mt-1
                block
                w-full
                border border-gray-300
                rounded-md
                shadow-sm
                py-2
                px-3
                focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
                sm:text-sm
              "
              placeholder="www.example.com"
            />
          </div>
        </div>
<div class="col-span-12 sm:col-span-8">
          <label
            for="company-website"
            class="block text-sm font-medium text-gray-700"
          >
            Linkedin
          </label>
          <div class="mt-1 flex rounded-md shadow-sm">
            <span
              class="
                inline-flex
                items-center
                px-3
                rounded-l-md
                border border-r-0 border-gray-300
                bg-gray-50
                text-gray-500
                sm:text-sm
              "
            >
              in.com/
            </span>
            <input
              type="text"
              name="company-website"
              id="company-website"
              class="
                mt-1
                block
                w-full
                border border-gray-300
                rounded-md
                shadow-sm
                py-2
                px-3
                focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
                sm:text-sm
              "
              placeholder="www.example.com"
            />
          </div>
        </div>
<div class="col-span-12 sm:col-span-8">

<div class="relative">
  <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
    <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
  </div>
  <input datepicker datepicker-orientation="bottom right" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date">
</div>
</div>


      </div>
    </div>

 <div class="mt-4 py-4 px-4 flex justify-end sm:px-6">
        <button
          type="button"
          class="
            bg-white
            border border-gray-300
            rounded-md
            shadow-sm
            py-2
            px-4
            inline-flex
            justify-center
            text-sm
            font-medium
            text-gray-700
            hover:bg-gray-50
            focus:outline-none
            focus:ring-2
            focus:ring-offset-2
            focus:ring-indigo-500
          "
        >
          Cancel
        </button>
        <button
          type="submit"
          class="
            ml-5
            bg-indigo-700
            border border-transparent
            rounded-md
            shadow-sm
            py-2
            px-4
            inline-flex
            justify-center
            text-sm
            font-medium
            text-white
            hover:bg-indigo-800
            focus:outline-none
            focus:ring-2
            focus:ring-offset-2
            focus:ring-indigo-500
          "
        >
          Save
        </button>
      </div>
  </form>
</template>

<script>
import { ref } from "vue";

import { SortAscendingIcon, UsersIcon } from '@heroicons/vue/solid'

const user = {
  name: "Ismail Bentabet",
  handle: "ismailbentabett",
  email: "ismailbentabett@gmail.com",
  imageUrl:
    "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=320&h=320&q=80",
};

export default {
  components: {

        SortAscendingIcon,
    UsersIcon,
  },
  setup() {
    const availableToHire = ref(true);
    const privateAccount = ref(false);
    const allowCommenting = ref(true);
    const allowMentions = ref(true);

    return {
      user,

      availableToHire,
      privateAccount,
      allowCommenting,
      allowMentions,

    };
  },
};
</script>
