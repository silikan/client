<!--
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
  <form action="#" class="relative">
    <div
      class="
        border border-gray-300
        rounded-lg
        shadow-sm
        overflow-hidden
        focus-within:border-indigo-500
        focus-within:ring-1
        focus-within:ring-indigo-500
      "
    >
      <label for="title" class="sr-only">Title</label>
      <input
        type="text"
        name="title"
        id="title"
        v-model="title"
        :class="[
          titleErrorMessage
            ? 'block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm  w-full px-3 py-2 border border-red-300  text-red-900 rounded-md  -smplaceholder-red-400 focus:outline-nonefocus:ring-red-500 focus:border-red-500 sm:text-sm'
            : ' block w-full px-3 py-2 placeholder-gray-400   sm:text-sm',
        ]"
        placeholder="Title"
      />
      <label for="content" class="sr-only">content</label>
      <textarea
        rows="2"
        name="content"
        id="content"
        v-model="content"
        :class="[
          contentErrorMessage
            ? 'overflow-auto block w-full py-3 h-40 -0 resize-none focus:ring-0  pr-10 sm:text-sm  appearance-none px-3 border border-red-300  placeholder-red-400 text-red-600 focus:outline-none focus:ring-red-500 focus:border-red-500'
            : 'overflow-auto block w-full py-3 h-40 -0 resize-none focus:ring-0  pr-10 sm:text-sm  appearance-none px-3 -sm placeholder-gray-400 focus:outline-none ',
        ]"
        placeholder="Write a content..."
      />

      <!-- Spacer element to match the height of the toolbar -->
    </div>

    <div class="absolute bottom-0 inset-x-px">
      <div
        class="
          border-t border-gray-200
          px-2
          py-2
          flex
          justify-between
          items-center
          space-x-3
          sm:px-3
        "
      >
        <div class="flex cursor-pointer">
          <div class="rounded-md">
            <div
              class="
                cursor-pointer
                group
                relative
                rounded-md
                py-2
                px-3
                flex
                items-center
                justify-center
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
                <div
                  type="div"
                  class="
                    -ml-2
                    -my-2
                    rounded-full
                    px-3
                    py-2
                    inline-flex
                    items-center
                    text-left text-gray-400
                    group
                  "
                >
                  <PhotographIcon
                    class="
                      cursor-pointer
                      -ml-1
                      h-5
                      w-5
                      mr-2
                      group-hover:text-gray-500
                    "
                    aria-hidden="true"
                  />
                  <span
                    class="
                      text-sm text-gray-500
                      group-hover:text-gray-600
                      italic
                    "
                    >Attach an Image</span
                  >
                </div>
              </label>
              <input
                id="post-image"
                name="post-image"
                type="file"
                :fileTypes="['image/*']"
                endpoint="/blog/post/image"
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
        <div class="flex-shrink-0">
          <button
            type="submit"
            class="
              inline-flex
              items-center
              px-4
              py-2
              border border-transparent
              text-sm
              font-medium
              rounded-md
              shadow-sm
              text-white
              bg-indigo-600
              hover:bg-indigo-700
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-indigo-500
            "
			@click.prevent="createPost"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { PhotographIcon } from "@heroicons/vue/solid";
import { useField } from "vee-validate";
import * as yup from "yup";
import FileService from "@/services/FileService";
import { useStore } from "vuex";

export default {
  components: {
    PhotographIcon,
  },
  setup() {
    let store = useStore();

    let titleValidation = yup
      .string()
      .min(3, "Title must be at least 3 characters")
      .max(50, "Title must be less than 50 characters")
      .required("Title is required");
    let contentValidation = yup
      .string()
      .min(10, "content must be at least 10 characters")
      .max(500, "content must be less than 255 characters")
      .required("content is required");

    const { value: title, errorMessage: titleErrorMessage } = useField(
      "title",
      titleValidation
    );

    const { value: content, errorMessage: contentErrorMessage } = useField(
      "content",
      contentValidation
    );

    let file;

    const fileChange = (event) => {
      file = event.target.files[0];
    };

    let endpoint = "/blog/post/image";

    const uploadFile = (post_id) => {
      const payload = {};
      const formData = new FormData();
      formData.append("post_image", file);
      payload.file = formData;
      payload.endpoint = endpoint;

      FileService.uploadPostFile(payload , post_id)
        .then(() => {
          console.log("fileUploaded");
        })
        .catch(() => console.log("error"));
    };

    let createPost = () => {
      let post = {
        title: title.value,
        content: content.value,
      };
      store.dispatch("Blog/createPost", post).then((result) => {
        uploadFile(result.id);
      });
    };
    return {
      title,
      titleErrorMessage,
      content,
      contentErrorMessage,
      file,
      uploadFile,
      fileChange,
      createPost,
    };
  },
};
</script>
