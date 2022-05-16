<template>
  <div>
    <div
      aria-live="assertive"
      class="
        z-50
        fixed
        inset-0
        flex
        px-4
        py-6
        pointer-events-none
        sm:p-6
        items-end
      "
    >
      <div class="w-full flex flex-col items-end space-y-4 sm:items-end">
        <!-- Notification panel, dynamically insert this into the live region when it needs to be displayed -->

        <div class="pointer-events-auto">
          <Popper placement="top" >
            <button
              type="button"
              class="
                inline-flex
                items-center
                p-4
                border border-transparent
                rounded-full
                shadow-sm
                text-white
                bg-prgreen-600
                hover:bg-prgreen-700
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-prgreen-500
              "
            >
              <!-- Heroicon name: outline/plus-sm -->

              <LightningBoltIcon
                class="h-6 w-6 text-white"
                aria-hidden="true"
              />
            </button>

            <template #content>
              <div class="flex flex-col space-y-3">
                   <router-link
                  v-if="isLoggedin"
                  to="/blog"
                  class="
                    inline-flex
                    items-center
                    p-3
                    border border-transparent
                    rounded-full
                    shadow-sm
                    text-white
                    bg-prgreen-600
                    hover:bg-prgreen-700
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-prgreen-500
                  "
                >
                  <!-- Heroicon name: outline/plus-sm -->
                  <UsersIcon class="h-5 w-5 text-white" aria-hidden="true" />
                </router-link>
                    <router-link
                  v-if="isLoggedin && isAdmin === true"
                  to="/dashboard/admin"
                  type="button"
                  class="
                    inline-flex
                    items-center
                    p-3
                    border border-transparent
                    rounded-full
                    shadow-sm
                    text-white
                    bg-prgreen-600
                    hover:bg-prgreen-700
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-prgreen-500
                  "
                >
                  <!-- Heroicon name: outline/plus-sm -->
                  <ShieldCheckIcon
                    class="h-5 w-5 text-white"
                    aria-hidden="true"
                  />
                </router-link>
                    <router-link
                  v-if="isLoggedin && isModerator === true"
                  to="/dashboard/moderator"
                  type="button"
                  class="
                    inline-flex
                    items-center
                    p-3
                    border border-transparent
                    rounded-full
                    shadow-sm
                    text-white
                    bg-prgreen-600
                    hover:bg-prgreen-700
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-prgreen-500
                  "
                >
                  <!-- Heroicon name: outline/plus-sm -->
                  <AdjustmentsIcon
                    class="h-5 w-5 text-white"
                    aria-hidden="true"
                  />
                </router-link>
                <router-link
                  v-if="isLoggedin && isHandyman === true"
                  to="/gig/create"
                  type="button"
                  class="
                    inline-flex
                    items-center
                    p-3
                    border border-transparent
                    rounded-full
                    shadow-sm
                    text-white
                    bg-prgreen-600
                    hover:bg-prgreen-700
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-prgreen-500
                  "
                >
                  <!-- Heroicon name: outline/plus-sm -->
                  <SpeakerphoneIcon
                    class="h-5 w-5 text-white"
                    aria-hidden="true"
                  />
                </router-link>
                <router-link
                  v-if="isLoggedin"
                  to="/request/create"
                  class="
                    inline-flex
                    items-center
                    p-3
                    border border-transparent
                    rounded-full
                    shadow-sm
                    text-white
                    bg-prgreen-600
                    hover:bg-prgreen-700
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-prgreen-500
                  "
                >
                  <!-- Heroicon name: outline/plus-sm -->
                  <HandIcon class="h-5 w-5 text-white" aria-hidden="true" />
                </router-link>
                <button
                  type="button"
                  class="
                    inline-flex
                    items-center
                    p-3
                    border border-transparent
                    rounded-full
                    shadow-sm
                    text-white
                    bg-prgreen-600
                    hover:bg-prgreen-700
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-prgreen-500
                  "
                  @click="toggleFeedback"
                >
                  <!-- Heroicon name: outline/plus-sm -->
                  <QuestionMarkCircleIcon
                    class="h-5 w-5 text-white"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </template>
          </Popper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Popper from "vue3-popper";

import {
  QuestionMarkCircleIcon,
  LightningBoltIcon,
  SpeakerphoneIcon,
  HandIcon,
  ShieldCheckIcon,
  AdjustmentsIcon,
  UsersIcon
} from "@heroicons/vue/solid";
import { useStore } from "vuex";
import { computed, ref, watchEffect } from "@vue/runtime-core";
export default {
  components: {
    QuestionMarkCircleIcon,
    LightningBoltIcon,
    SpeakerphoneIcon,
    HandIcon,
    Popper,
    ShieldCheckIcon,
    AdjustmentsIcon,
      UsersIcon
  },
  setup() {
    ref;
    let store = useStore();
    const isLoggedin = computed(() => store.getters["auth/loggedIn"]);
    let isHandyman = ref(false);
    let isAdmin = ref(false);
    let isModerator = ref(false);
  watchEffect(() => {
    if (isLoggedin.value) {
      let authUser = computed(() => store.getters["auth/authUser"]);


        isHandyman.value = authUser.value.isHandyman;
        isAdmin.value = authUser.value.isAdmin;
        isModerator.value = authUser.value.isModerator;

    }
      });
    let toggleFeedback = () => {
      store.dispatch("FeedBack/toggleFeedBack");
    };
    return { isLoggedin, isHandyman, toggleFeedback, isAdmin, isModerator };
  },
};
</script>

<style>
</style>
