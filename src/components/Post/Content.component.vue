<template>
  <!-- Component Code -->
  <div class="min-h-full">
    <main class="py-10">
      <div
        class="
          mt-8
          max-w-3xl
          mx-auto
          grid grid-cols-1
          gap-6
          sm:px-6
          lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2
        "
      >
        <div class="space-y-6 lg:col-start-1 lg:col-span-2">
          <section>
            <div class="bg-white shadow sm:rounded-lg">
              <div class="max-w-screen-xl mx-auto  relative">
                <div
                  class="bg-cover h-64 text-center overflow-hidden rounded-t-lg"
                  style="
                    height: 450px;
                    background-image: url('https://api.time.com/wp-content/uploads/2020/07/never-trumpers-2020-election-01.jpg?quality=85&w=1201&h=676&crop=1');
                  "
                  title="Woman holding a mug"
                ></div>
                <div class="max-w-3xl mx-auto p-5 sm:p-5 md:p-10">
                  <div
                    class="
                      mt-3
                      bg-white
                      rounded-b
                      lg:rounded-b-none lg:rounded-r
                      flex flex-col
                      justify-between
                      leading-normal
                    "
                  >
                    <div class="">
                      <a
                        href="#"
                        class="
                          text-xs text-indigo-600
                          uppercase
                          font-medium
                          hover:text-gray-900
                          transition
                          duration-500
                          ease-in-out
                        "
                      >
                        Election </a
                      >,
                      <a
                        href="#"
                        class="
                          text-xs text-indigo-600
                          uppercase
                          font-medium
                          hover:text-gray-900
                          transition
                          duration-500
                          ease-in-out
                        "
                      >
                        Politics
                      </a>
                      <h1
                        href="#"
                        class="text-gray-900 font-bold text-3xl mb-2"
                      >
                        Revenge of the Never Trumpers
                      </h1>
                      <p class="text-gray-700 text-xs mt-2">
                        Written By:
                        <a
                          href="#"
                          class="
                            text-indigo-600
                            font-medium
                            hover:text-gray-900
                            transition
                            duration-500
                            ease-in-out
                          "
                        >
                          Ahmad Sultani
                        </a>
                      </p>

                      <p class="text-base leading-8 my-5">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum. Lorem
                        ipsum dolor sit amet consectetur adipisicing elit.
                        Cupiditate excepturi non eius reiciendis accusantium
                        laboriosam et. Vero aliquam, ipsa, fuga molestias
                        doloribus nulla optio quisquam facere eum inventore vel
                        culpa.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-white shadow sm:rounded-lg sm:overflow-hidden mt-5">

              <div class="m-6 flex justify-between space-x-8">
                    <div class="flex space-x-6">
                      <span class="inline-flex items-center text-sm">
                        <button
                          type="button"
                          class="
                            inline-flex
                            space-x-2
                            text-gray-400
                            hover:text-gray-500
                          "
                        >
                          <ThumbUpIcon class="h-5 w-5" aria-hidden="true" />
                          <span class="font-medium text-gray-900">{{
                            106
                          }}</span>
                          <span class="sr-only">likes</span>
                        </button>
                      </span>
                      <span class="inline-flex items-center text-sm">
                        <button
                          type="button"
                          class="
                            inline-flex
                            space-x-2
                            text-gray-400
                            hover:text-gray-500
                          "
                        >
                          <ThumbDownIcon class="h-5 w-5" aria-hidden="true" />
                          <span class="font-medium text-gray-900">{{
                          106
                          }}</span>
                          <span class="sr-only">likes</span>
                        </button>
                      </span>
                      <span class="inline-flex items-center text-sm">
                        <button
                          type="button"
                          class="
                            inline-flex
                            space-x-2
                            text-gray-400
                            hover:text-gray-500
                          "
                        >
                          <ChatAltIcon class="h-5 w-5" aria-hidden="true" />
                          <span class="font-medium text-gray-900">{{
                            106
                          }}</span>
                          <span class="sr-only">replies</span>
                        </button>
                      </span>
                      <span class="inline-flex items-center text-sm">
                        <button
                          type="button"
                          class="
                            inline-flex
                            space-x-2
                            text-gray-400
                            hover:text-gray-500
                          "
                        >
                          <EyeIcon class="h-5 w-5" aria-hidden="true" />
                          <span class="font-medium text-gray-900">{{
                           106
                          }}</span>
                          <span class="sr-only">views</span>
                        </button>
                      </span>
                    </div>
                  </div>
                    </div>
          </section>

          <!-- Description list-->

          <!-- Comments-->
<Comments/>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Comments from "./Comments.component.vue";
import {
  ChatAltIcon,
  EyeIcon,

  ThumbUpIcon,
  ThumbDownIcon,
} from "@heroicons/vue/solid";

export default {
  components: {
      ChatAltIcon,
  EyeIcon,

  ThumbUpIcon,
  ThumbDownIcon,
  Comments,
  },
  setup() {
    return {


    };
  },
};
</script>

<style>
</style>
