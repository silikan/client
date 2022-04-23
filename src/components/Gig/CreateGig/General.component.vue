
<template>
  <form
    class="space-y-8 divide-y divide-gray-200 w-full"
    method="post"
    autocomplete="on"
  >
    <div class="space-y-8 divide-y max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
        <div>
          <h3 class="text-lg leading-6 font-medium text-gray-900">Gig</h3>
          <p class="mt-1 max-w-2xl text-sm text-gray-500">create that gig</p>
        </div>
        <div class="space-y-6 sm:space-y-5">
          <div class="-gray-300 rounded-lg shadow-sm overflow-hidden">
            <label
              for="title"
              class="block text-sm font-medium text-black sm:mt-px sm:pt-2"
            >
              Title
            </label>

            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <input
                v-model="title"
                type="text"
                name="title"
                id="title"
                autocomplete="on"
                class="
                  appearance-none
                  block
                  w-full
                  px-3
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
              />
            </div>
            <span>{{ errorMessage }}</span>
          </div>

          <div class="-gray-300 rounded-lg shadow-sm overflow-hidden">
            <label
              for="category"
              class="block text-sm font-medium text-black sm:mt-px sm:pt-2"
            >
              Category
            </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <select
                v-model="category"
                id="category"
                name="category"
                autocomplete="on"
                class="
                  appearance-none
                  block
                  w-full
                  px-3
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
              >
                <option v-for="item in categories" :key="item" :value="item">
                  {{ item }}
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div class="flex items-start space-x-4 pb-">
        <div class="min-w-0 flex-1">
          <div action="#" class="relative">
            <div class="-gray-300 rounded-lg shadow-sm overflow-hidden">
              <label
                for="description"
                class="block text-sm font-medium text-black sm:mt-px sm:pt-2"
              >
                Description
              </label>
              <textarea
                autocomplete="on"
                v-model="description"
                rows="3"
                name="description"
                id="description"
                class="
                  block
                  w-full
                  py-3
                  h-40
                  -0
                  resize-none
                  focus:ring-0
                  sm:text-sm
                  appearance-none
                  px-3
                  border border-gray-300
                  rounded-md
                  shadow-sm
                  placeholder-gray-400
                  focus:outline-none
                  focus:ring-indigo-500
                  focus:border-indigo-500
                "
                placeholder="Add your description..."
              />

              <!-- Spacer element to match the height of the toolbar -->
              <div class="py-2" aria-hidden="true">
                <!-- Matches height of button in toolbar (1px  + 36px content height) -->
                <div class="py-px">
                  <div class="h-9" />
                </div>
              </div>
            </div>

            <div
              class="absolute bottom-0 inset-x-0 pl-3 py-2 flex justify-between"
            >
              <div class="flex items-center space-x-5">
                <div class="flex items-center">
                  <button
                    type="button"
                    class="
                      -m-2.5
                      w-10
                      h-10
                      rounded-full
                      flex
                      items-center
                      justify-center
                      text-gray-400
                      hover:text-gray-500
                    "
                  >
                    <PaperClipIcon class="h-5 w-5" aria-hidden="true" />
                    <span class="sr-only">Attach a file</span>
                  </button>
                </div>
              </div>
              <div class="flex-shrink-0"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>
<script>
import { PaperClipIcon } from "@heroicons/vue/solid";
import { useStore } from "vuex";
import { watchEffect } from "@vue/runtime-core";
import { useField } from "vee-validate";
import * as yup from "yup";

let categories = [
  "Cleaning",
  "Cooking",
  "Plumbing",
  "Electrical",
  "Painting",
  "Moving",
  "Carpentry",
  "Building",
  "Massage",
  "Tutoring",
  "Woodwork",
  "Cooking",
  "Other",
];

export default {
  components: {
    PaperClipIcon,
  },
  setup() {
    let store = useStore();
    let titleValidation = yup
      .string()
      .required("Title is required")
      .min(3, "Title must be at least 3 characters long")
      .max(50, "Title must be less than 50 characters long");
    let descriptionValidation = yup
      .string()
      .required("Description is required")
      .min(3, "Description must be at least 3 characters long")
      .max(500, "Description must be less than 500 characters long");
    let categoryValidation = yup.string().required("Category is required");
    const { value: title, errorMessage: titleErrorMessage } = useField(
      "title",
      titleValidation
    );
    const { value: description, errorMessage: descriptionErrorMessage } =
      useField("description", descriptionValidation);
    const { value: category, errorMessage: categoryErrorMessage } = useField(
      "category",
      categoryValidation
    );

    watchEffect(() => {
      store.commit("Gig/SET_TITLE", title.value);
      store.commit("Gig/SET_DESCRIPTION", description.value);
      store.commit("Gig/SET_CATEGORY", category.value);
    });

    return {
      title,
      description,
      category,
      categories,

      titleErrorMessage,
      descriptionErrorMessage,
      categoryErrorMessage,
    };
  },
};
</script>
