<template>
  <form
    class="divide-y divide-gray-200 lg:col-span-9"
    action="#"
    @submit.prevent="updateUser"
  >
    <div class="pt-6 divide-y divide-gray-200">
      <div class="px-4 sm:px-6">
        <div>
          <h2 class="text-lg leading-6 font-medium text-gray-900">Account</h2>
          <p class="mt-1 text-sm text-gray-500">
            Ornare eu a volutpat eget vulputate. Fringilla commodo amet.
          </p>
        </div>
        <ul role="list" class="mt-2 divide-y divide-gray-200">
          <SwitchGroup as="li" class="py-4 flex items-center justify-between">
            <div class="flex flex-col">
              <SwitchLabel
                as="p"
                class="text-sm font-medium text-gray-900"
                passive
              >
                Handyman
              </SwitchLabel>
              <SwitchDescription class="text-sm text-gray-500">
                Nulla amet tempus sit accumsan. Aliquet turpis sed sit lacinia.
              </SwitchDescription>
            </div>
            <Switch
              v-model="availableToHire"
              :class="[
                availableToHire ? 'bg-indigo-500' : 'bg-gray-200',
                'ml-4 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
              ]"
            >
              <span
                aria-hidden="true"
                :class="[
                  availableToHire ? 'translate-x-5' : 'translate-x-0',
                  'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
                ]"
              />
            </Switch>
          </SwitchGroup>
          <SwitchGroup as="li" class="py-4 flex items-center justify-between">
            <div class="flex flex-col">
              <SwitchLabel
                as="p"
                class="text-sm font-medium text-gray-900"
                passive
              >
                Available to hire
              </SwitchLabel>
              <SwitchDescription class="text-sm text-gray-500">
                Pharetra morbi dui mi mattis tellus sollicitudin cursus
                pharetra.
              </SwitchDescription>
            </div>
            <Switch
              v-model="Handyman"
              :class="[
                Handyman ? 'bg-indigo-500' : 'bg-gray-200',
                'ml-4 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
              ]"
            >
              <span
                aria-hidden="true"
                :class="[
                  Handyman ? 'translate-x-5' : 'translate-x-0',
                  'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
                ]"
              />
            </Switch>
          </SwitchGroup>
          <SwitchGroup as="li" class="py-4 flex items-center justify-between">
            <div class="flex flex-col">
              <SwitchLabel
                as="p"
                class="text-sm font-medium text-gray-900"
                passive
              >
                Online
              </SwitchLabel>
              <SwitchDescription class="text-sm text-gray-500">
                Integer amet, nunc hendrerit adipiscing nam. Elementum ame
              </SwitchDescription>
            </div>
            <Switch
              v-model="Online"
              :class="[
                Online ? 'bg-indigo-500' : 'bg-gray-200',
                'ml-4 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
              ]"
            >
              <span
                aria-hidden="true"
                :class="[
                  Online ? 'translate-x-5' : 'translate-x-0',
                  'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
                ]"
              />
            </Switch>
          </SwitchGroup>
          <div class="bg-white">
            <div class="px-4 py-5 sm:p-6">
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                Delete your account
              </h3>
              <div class="mt-2 max-w-xl text-sm text-gray-500">
                <p>
                  Once you delete your account, you will lose all data
                  associated with it.
                </p>
              </div>
              <div class="mt-5 flex justify-end">
                <button
                  type="button"
                  class="
                    inline-flex
                    items-center
                    justify-center
                    px-4
                    py-2
                    border border-transparent
                    font-medium
                    rounded-md
                    text-red-700
                    bg-red-100
                    hover:bg-red-200
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-red-500
                    sm:text-sm
                  "
                >
                  Delete account
                </button>
              </div>
            </div>
          </div>
        </ul>
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
    </div>
  </form>
</template>

<script>
import { onMounted, computed, ref } from "vue";
import AuthService from "@/services/AuthService";
import {
  Switch,
  SwitchDescription,
  SwitchGroup,
  SwitchLabel,
} from "@headlessui/vue";
import { useStore } from "vuex";

const user = {
  name: "Debbie Lewis",
  handle: "deblewis",
  email: "debbielewis@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=320&h=320&q=80",
};

export default {
  components: {
    Switch,
    SwitchDescription,
    SwitchGroup,
    SwitchLabel,
  },
  setup() {
    const availableToHire = ref(false);
    const Handyman = ref(false);
    const Online = ref(false);
    const store = useStore();
    const authUser = computed(() => store.getters["auth/authUser"]);

    onMounted(() => {
      availableToHire.value = authUser.value.is_available_to_hire;
      Handyman.value = authUser.value.isHandyman;
      Online.value = authUser.value.is_online;
    });

    const updateUser = () => {
      const payload = {
        is_available_to_hire: availableToHire.value,
        is_handyman: Handyman.value,
        is_online: Online.value,
        name: authUser.value.name,
        email: authUser.value.email,
        is_admin: authUser.value.isAdmin,
        is_moderator: authUser.value.isModerator,

        username: authUser.value.username,
        bio: authUser.value.bio,
        date_of_birth: authUser.value.date_of_birth,
        phone_number: authUser.value.phone_number,
        address: authUser.value.address,
        country: authUser.value.country,
        city: authUser.value.city,
        state: authUser.value.state,
        zip_code: authUser.value.zip_code,
        website: authUser.value.website,
        education: authUser.value.education,
        certifications: authUser.value.certifications,
        experience: authUser.value.experience,
        social_links: authUser.value.social_links,
        skills: authUser.value.skills,
      };

      AuthService.updateUser(payload)
        .then(() => store.dispatch("auth/getAuthUser"))
        .then(() => console.log("User updated."))
        .catch(() => console.log(payload));
    };

    return {
      user,

      availableToHire,
      Handyman,
      Online,
      updateUser,
    };
  },
};
</script>
