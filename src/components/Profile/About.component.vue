<template>
  <div class="px-4 py-5 sm:px-0 sm:py-0 mt-10 lg:flex lg:flex">
    <dl>
      <div class="sm:flex sm:px-6 sm:py-5 px-4 py-5 sm:px-6 flex items-center">
        <dt
          class="
            text-sm
            font-medium
            text-gray-500
            sm:w-40 sm:flex-shrink-0
            lg:w-48

          "
        >
          Bio
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:ml-6 sm:col-span-2">
          <p>
            {{ authUserData.bio }}
          </p>
          <div v-if="authUserData.bio === null">
            <router-link
              class="flex font-bold items-center text-indigo-800 "
              to="/edit/profile"
            >
              <PlusCircleIcon
                class="w-6 h-6 stroke-1 mr-3"
                aria-hidden="true"
              />
              <span class="">Add Bio</span>
            </router-link>
          </div>
        </dd>
      </div>
      <div class="sm:flex sm:px-6 sm:py-5 px-4 py-5 sm:px-6 flex items-center">
        <dt
          class="
            text-sm
            font-medium
            text-gray-500
            sm:w-40 sm:flex-shrink-0
            lg:w-48

          "
        >
          Location
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:ml-6 sm:col-span-2">
          {{ authUserData.country }} {{ authUserData.city }}
          {{ authUserData.state }} {{ authUserData.address }}
        </dd>
        <div
          class="flex"
          v-if="
            authUserData.country === null &&
            authUserData.state === null &&
            authUserData.city === null &&
            authUserData.address === null
          "
        >
          <router-link
            class="flex font-bold items-center text-indigo-800"
            to="/edit/profile"
          >
            <PlusCircleIcon class="w-6 h-6 stroke-1 mr-3" aria-hidden="true" />
            <span class="">Add Location</span>
          </router-link>
        </div>
      </div>
      <div class="sm:flex sm:px-6 sm:py-5 px-4 py-5 sm:px-6 flex items-center">
        <dt
          class="
            text-sm
            font-medium
            text-gray-500
            sm:w-40 sm:flex-shrink-0
            lg:w-48

          "
        >
          Website
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:ml-6 sm:col-span-2">
          {{ authUserData.website }}
        </dd>
        <div class="flex" v-if="authUserData.website === null">
          <router-link
            class="flex font-bold items-center text-indigo-800"
            to="/edit/profile"
          >
            <PlusCircleIcon class="w-6 h-6 stroke-1 mr-3" aria-hidden="true" />
            <span class="">Add website</span>
          </router-link>
        </div>
      </div>
      <div
        class="
          sm:flex sm:px-6 sm:py-5
          border-b border-gray-200
          px-4
          py-5
          sm:px-6
          flex items-center
        "
      >
        <dt
          class="
            text-sm
            font-medium
            text-gray-500
            sm:w-40 sm:flex-shrink-0
            lg:w-48

          "
        >
          Birthday
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:ml-6 sm:col-span-2">
          <time datetime="1982-06-23"> </time>
        </dd>

        <div class="flex" v-if="authUserData.date_of_birth === null">
          <router-link
            class="flex font-bold items-center text-indigo-800"
            to="/edit/profile"
          >
            <PlusCircleIcon class="w-6 h-6 stroke-1 mr-3" aria-hidden="true" />
            <span class="">Add Birthday</span>
          </router-link>
        </div>
      </div>

      <div class="sm:flex sm:px-6 sm:py-5 mt-10 sm:mt-0">
        <div class="flex flex-col">
          <div class="mb-5 mt-2 flex items-center text-sm text-gray-500">
            <BriefcaseIcon
              class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            Full-time
          </div>
          <div class="mb-5 flex items-center text-sm text-gray-500">
            <LocationMarkerIcon
              class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            Remote
          </div>
          <div class="mb-5 flex items-center text-sm text-gray-500">
            <CurrencyDollarIcon
              class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            $120k &ndash; $140k
          </div>
          <div class="flex items-center text-sm text-gray-500">
            <CalendarIcon
              class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            Closing on January 9, 2020
          </div>
        </div>
      </div>
    </dl>
  </div>
</template>

<script>
import {
  BriefcaseIcon,
  CalendarIcon,
  CurrencyDollarIcon,
  LocationMarkerIcon,
} from "@heroicons/vue/solid";
import { PlusCircleIcon } from "@heroicons/vue/outline";
import { computed } from "@vue/runtime-core";
export default {
  components: {
    BriefcaseIcon,
    CalendarIcon,

    CurrencyDollarIcon,

    LocationMarkerIcon,
    PlusCircleIcon,
  },
  props: ["Data"],
  setup(props) {
    let authUserData = computed(() => {
      return props.Data;
    });
    console.log(authUserData);

    return {
      authUserData,
    };
  },
};
</script>

<style>
</style>
