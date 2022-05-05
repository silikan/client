<template>

  <!-- Component Code -->
  <div class="min-h-full" v-if="post">
    <main class="py-10">
      <div
        class="
        mx-5
          mt-8
          max-w-3xl
          sm:mx-auto
          grid grid-cols-1
          gap-6
          sm:px-6
          lg:max-w-3xl
          lg:grid-flow-col-dense
           lg:grid-cols-2
        "
      >
        <div class="space-y-6 lg:col-start-1 lg:col-span-2">
          <section>
            <div class="bg-white shadow sm:rounded-lg">
              <div class="max-w-screen-xl mx-auto  relative">
          <div class="flex-shrink-0 ">
                    <img
                    v-if="post.image"
                      class="h-96 w-full rounded-t-lg"
                      :src="`${preurl}/${post.image}`"
                      alt=""
                    />
                  </div>
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
                        {{ post.title }}
                      </h1>
                <div class="flex space-x-3 ml-5">
                      <div class="flex-shrink-0">
                        <Avatar
                          v-if="post.user.name"
                          :url="post.user.avatar"
                          :name="post.user.name"
                        />
                      </div>
                      <div class="min-w-0 flex-1">
                        <p class="text-sm font-b text-gray-900">
                          <router-link
                            :to="`/user/${post.user.id}`"
                            class="hover:underline"
                            >{{ post.user.name }}</router-link
                          >
                        </p>
                        <p class="text-sm text-gray-500">
                          <a class="hover:underline">
                            <timeago
                              :converter-options="{
                                includeSeconds: true,
                                addSuffix: true,
                                useStrict: true,
                              }"
                              :datetime="post.created_at"
                            />
                          </a>
                        </p>
                      </div>
                    </div>

                      <p class="text-base break-all leading-8 my-5">
                        {{ post.content }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-white shadow sm:rounded-lg sm:overflow-hidden mt-5">

              <div class="m-6 flex justify-between space-x-8  py-5 sm:py-1">
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
import Avatar from "@/components/Avatar/Avatar.component.vue";

import {
  ChatAltIcon,
  EyeIcon,

  ThumbUpIcon,
  ThumbDownIcon,
} from "@heroicons/vue/solid";
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import { ref } from 'vue';

export default {
  components: {
      ChatAltIcon,
  EyeIcon,

  ThumbUpIcon,
  ThumbDownIcon,
  Comments,
  Avatar
  },
  setup() {
    let store = useStore();
    let route = useRoute();

    let id = route.params.id;
        let preurl = `${process.env.VUE_APP_API_URL}`;

let post = ref(null);
    store.dispatch('Blog/getPostById', id).then((res) => {
      console.log(res);
      post.value = res.data;
    });
    return {
post,
preurl

    };
  },
};
</script>

<style>
</style>
