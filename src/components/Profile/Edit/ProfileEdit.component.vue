<template>
  <form
    @submit.prevent="updateAndUploadFile"
    class="divide-y divide-gray-200 lg:col-span-9"
    action="#"
    method="POST"
  >
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
                id="username"
                type="text"
                name="username"
                autocomplete="username"
                class="
                  focus:ring-indigo-500 focus:border-indigo-500
                  flex-grow
                  block
                  w-full
                  min-w-0
                  rounded-none rounded-r-md
                  sm:text-sm
                  border border-gray-300
                "
                v-model="username"
              />
            </div>
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700"
              >Email</label
            >
            <div class="mt-1">
              <input
                id="email"
                v-model="email"
                type="email"
                name="email"
                class="
                  appearance-none
                  block
                  w-full
                  pl-5
                  pr-20
                  py-2
                  border border-gray-300
                  rounded-md
                  shadow-sm
                  placeholder-gray-400
                  focus:outline-none
                  focus:ring-indigo-500
                  focus:border-indigo-500
                  sm:text-sm
                "
                placeholder="you@example.com"
                aria-describedby="email-description"
              />
            </div>
          </div>

          <div>
            <label for="about" class="block text-sm font-medium text-gray-700">
              Bio
            </label>
            <div class="mt-1">
              <textarea
                id="bio"
                name="bio"
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
                v-model="bio"
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
                class="flex justify-center items-center rounded-full h-15 w-15"
                aria-hidden="true"
              >
                <img
                  class="rounded-full w-10 h-10"
                  :src="avatar_svg"
                  v-if="avatarWithoutLocalhost === null"
                  alt=""
                />
                <img
                  class="rounded-full w-10 h-10"
                  :src="avatar"
                  v-if="avatarWithoutLocalhost !== null"
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
                    <span>Change me</span>
                    <span class="sr-only"> user photo</span>
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
          </div>

          <div class="hidden relative rounded-full overflow-hidden lg:block">
            <img
              class="relative rounded-full w-40 h-40"
              :src="avatar_svg"
              v-if="avatarWithoutLocalhost === null"
              alt=""
            />
            <img
              class="relative rounded-full w-40 h-40"
              :src="avatar"
              v-if="avatarWithoutLocalhost !== null"
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
                endpoint="/users/auth/avatar"
                @change="fileChange"
                :accept="fileTypes"
                id="desktop-user-photo"
                type="file"
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
          <label for="name" class="block text-sm font-medium text-gray-700">
            name</label
          >
          <input
            id="name"
            type="text"
            name="name"
            autocomplete="name"
            v-model="name"
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
                id="district"
                name="district"
                autocomplete="district"
                class="
                  focus:outline-none
                  focus:ring-indigo-500
                  focus:border-indigo-500
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
              id="phone_number"
              type="text"
              name="phone_number"
              v-model="phone_number"
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
            v-model="country"
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
            id="address"
            type="text"
            name="address"
            autocomplete="address"
            v-model="address"
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
            id="city"
            type="text"
            name="city"
            v-model="city"
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
            id="state"
            type="text"
            name="state"
            v-model="state"
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
          <label for="zip_code" class="block text-sm font-medium text-gray-700"
            >ZIP / Postal code</label
          >
          <input
            id="zip_code"
            type="text"
            name="zip_code"
            v-model="zip_code"
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
              id="website"
              type="text"
              name="website"
              v-model="website"
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

        <div class="mt-5 col-span-12">
          <div class="col-span-12">
            <ArrayForm
              DataType="education"
              :Data="arrayProps"
              @sendEducation="sendEducation"
            />
          </div>
          <div class="col-span-12">
            <ArrayForm
              DataType="skills"
              :Data="arrayProps"
              @sendSkills="sendSkills"
            />
          </div>
          <div class="col-span-12">
            <ArrayForm
              DataType="experience"
              :Data="arrayProps"
              @sendExperience="sendExperience"
            />
          </div>
          <div class="col-span-12">
            <ArrayForm
              DataType="certifications"
             :Data="arrayProps"
              @sendCertifications="sendCertifications"
            />
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
              id="company-website"
              type="text"
              name="company-website"
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
              id="company-website"
              type="text"
              name="company-website"
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
              id="company-website"
              type="text"
              name="company-website"
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
            <div
              class="
                flex
                absolute
                inset-y-0
                left-0
                items-center
                pl-3
                pointer-events-none
              "
            >
              <svg
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <input
              datepicker
              datepicker-orientation="bottom right"
              type="text"
              class="
                bg-gray-50
                border border-gray-300
                text-gray-900
                sm:text-sm
                rounded-lg
                focus:ring-blue-500 focus:border-blue-500
                block
                w-full
                pl-10
                p-2.5
                dark:bg-gray-700
                dark:border-gray-600
                dark:placeholder-gray-400
                dark:text-white
                dark:focus:ring-blue-500
                dark:focus:border-blue-500
              "
              placeholder="Select date"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="mt-4 py-4 px-4 flex justify-end sm:px-6">
      <button
        type="submit"
        class="
          ml-5
          bg-indigo-700
          border border-transparent
          rounded-md
          shadow-sm
          py-2
          px-20
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
import { onMounted, computed, ref } from "vue";
import AuthService from "@/services/AuthService";
import FileService from "@/services/FileService";
import { useStore } from "vuex";
import ArrayForm from "./ArrayForm.component.vue";

import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/avatars-initials-sprites";

export default {
  components: {
    ArrayForm,
  },
  setup() {
    const store = useStore();

    const authUser = computed(() => store.getters["auth/authUser"]);

    let email = ref("");
    let username = ref("");
    let bio = ref("");
    let date_of_birth = ref(null);
    let phone_number = ref("");
    let address = ref("");
    let country = ref("");
    let city = ref("");
    let state = ref("");
    let zip_code = ref("");
    let website = ref("");
    let education = ref("");
    let certifications = ref("");
    let experience = ref("");
    let social_links = ref("");
    let skills = ref("");
    let name = ref("");
    let Educationdata, ExperienceData, Certificationsdata, SkillsData;

    let sendEducation = (data) => {
      Educationdata = JSON.stringify(data.people);
    };

    let sendExperience = (data) => {
      ExperienceData = JSON.stringify(data.people);
    };

    let sendCertifications = (data) => {
      Certificationsdata = JSON.stringify(data.people);
    };

    let sendSkills = (data) => {
      SkillsData = JSON.stringify(data.people);
    };

    onMounted(() => {
      email.value = authUser.value.email;
      username.value = authUser.value.username;
      bio.value = authUser.value.bio;
      date_of_birth.value = authUser.value.date_of_birth;
      phone_number.value = authUser.value.phone_number;
      address.value = authUser.value.address;
      country.value = authUser.value.country;
      city.value = authUser.value.city;
      state.value = authUser.value.state;
      zip_code.value = authUser.value.zip_code;
      website.value = authUser.value.website;
      education.value = JSON.parse(authUser.value.education);
      certifications.value = JSON.parse(authUser.value.certifications);
      experience.value = JSON.parse(authUser.value.experience);
      social_links.value = authUser.value.social_links;
      skills.value = JSON.parse(authUser.value.skills);
      name.value = authUser.value.name;
    });

    const updateUser = () => {
      console.log(Educationdata)
      const payload = {
        name: name.value,
        email: email.value,
        username: username.value,
        bio: bio.value,
        date_of_birth: date_of_birth.value,
        phone_number: phone_number.value,
        address: address.value,
        country: country.value,
        city: city.value,
        state: state.value,
        zip_code: zip_code.value,
        website: website.value,
        social_links: social_links.value,
        is_available_to_hire: authUser.value.is_available_to_hire,
        is_online: authUser.value.is_online,
        is_handyman: authUser.value.isHandyman,

        is_admin: authUser.value.isAdmin,
        is_moderator: authUser.value.isModerator,
        education: Educationdata,
        certifications: Certificationsdata,
        experience: ExperienceData,
        skills: SkillsData,
      };

      AuthService.updateUser(payload)
        .then(() => store.dispatch("auth/getAuthUser"))
        .then(() => console.log("User updated."))
        .catch(() => console.log(payload));
    };

    let avatar_svg = createAvatar(style, {
      seed: authUser.value.name,
      dataUri: true,
      // ... and other options
    });

    let file;

    const fileChange = (event) => {
      file = event.target.files[0];
    };

    let endpoint = "/users/auth/avatar";

    const uploadFile = () => {
      const payload = {};
      const formData = new FormData();
      formData.append("avatar", file);
      payload.file = formData;
      payload.endpoint = endpoint;

      FileService.uploadFile(payload)
        .then(() => {
          console.log("fileUploaded");
        })
        .catch(() => console.log("error"));
    };

    const updateAndUploadFile = () => {
      updateUser();
      uploadFile();
    };

    let avatar = `${process.env.VUE_APP_API_URL}/${authUser.value.avatar}`;

    let avatarWithoutLocalhost = authUser.value.avatar;

    let arrayProps = {
     education,

     experience,

       certifications,

       skills,
    };

    return {
      email,
      username,
      bio,
      date_of_birth,
      phone_number,
      address,
      country,
      city,
      state,
      avatar,
      name,
      zip_code,
      website,
      education,
      certifications,
      experience,
      social_links,
      skills,
      updateUser,
      authUser,
      avatar_svg,
      uploadFile,
      fileChange,
      file,
      updateAndUploadFile,
      avatarWithoutLocalhost,
      sendEducation,
      sendSkills,
      sendCertifications,
      sendExperience,
      Educationdata,
      ExperienceData,
      Certificationsdata,
      SkillsData,
      arrayProps,
    };
  },
};
</script>
