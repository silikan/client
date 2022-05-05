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
                <div class="max-w-2xl mx-auto p-5 sm:p-10 md:p-16">
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
          <section aria-labelledby="notes-title">
            <div class="bg-white shadow sm:rounded-lg sm:overflow-hidden">
              <div class="divide-y divide-gray-200">
                <div class="px-4 py-5 sm:px-6">
                  <h2
                    id="notes-title"
                    class="text-lg font-medium text-gray-900"
                  >
                    Notes
                  </h2>
                </div>
                <div class="px-4 py-6 sm:px-6">
                  <ul role="list" class="space-y-8">
                    <li v-for="comment in comments" :key="comment.id">
                      <div class="flex space-x-3">
                        <div class="flex-shrink-0">
                          <img
                            class="h-10 w-10 rounded-full"
                            :src="`https://images.unsplash.com/photo-${comment.imageId}?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`"
                            alt=""
                          />
                        </div>
                        <div>
                          <div class="text-sm">
                            <a href="#" class="font-medium text-gray-900">{{
                              comment.name
                            }}</a>
                          </div>
                          <div class="mt-1 text-sm text-gray-700">
                            <p>{{ comment.body }}</p>
                          </div>
                          <div class="mt-2 text-sm space-x-2">
                            <span class="text-gray-500 font-medium">{{
                              comment.date
                            }}</span>
                            {{ " " }}
                            <span class="text-gray-500 font-medium"
                              >&middot;</span
                            >
                            {{ " " }}
                            <button
                              type="button"
                              class="text-gray-900 font-medium"
                            >
                              Reply
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="bg-gray-50 px-4 py-6 sm:px-6">
                <div class="flex space-x-3">
                  <div class="flex-shrink-0">
                    <img
                      class="h-10 w-10 rounded-full"
                      :src="user.imageUrl"
                      alt=""
                    />
                  </div>
                  <div class="min-w-0 flex-1">
                    <form action="#">
                      <div>
                        <label for="comment" class="sr-only">About</label>
                        <textarea
                          id="comment"
                          name="comment"
                          rows="3"
                          class="
                            shadow-sm
                            block
                            w-full
                            focus:ring-blue-500 focus:border-blue-500
                            sm:text-sm
                            border border-gray-300
                            rounded-md
                          "
                          placeholder="Add a note"
                        />
                      </div>
                      <div class="mt-3 flex items-center justify-between">
                        <a
                          href="#"
                          class="
                            group
                            inline-flex
                            items-start
                            text-sm
                            space-x-2
                            text-gray-500
                            hover:text-gray-900
                          "
                        >
                          <QuestionMarkCircleIcon
                            class="
                              flex-shrink-0
                              h-5
                              w-5
                              text-gray-400
                              group-hover:text-gray-500
                            "
                            aria-hidden="true"
                          />
                          <span> Some HTML is okay. </span>
                        </a>
                        <button
                          type="submit"
                          class="
                            inline-flex
                            items-center
                            justify-center
                            px-4
                            py-2
                            border border-transparent
                            text-sm
                            font-medium
                            rounded-md
                            shadow-sm
                            text-white
                            bg-blue-600
                            hover:bg-blue-700
                            focus:outline-none
                            focus:ring-2
                            focus:ring-offset-2
                            focus:ring-blue-500
                          "
                        >
                          Comment
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import {
  ChatAltIcon,
  EyeIcon,

  ThumbUpIcon,
  ThumbDownIcon,
} from "@heroicons/vue/solid";
import { QuestionMarkCircleIcon } from "@heroicons/vue/solid";
const user = {
  name: "Whitney Francis",
  email: "whitney@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
};
const comments = [
  {
    id: 1,
    name: "Leslie Alexander",
    date: "4d ago",
    imageId: "1494790108377-be9c29b29330",
    body: "Ducimus quas delectus ad maxime totam doloribus reiciendis ex. Tempore dolorem maiores. Similique voluptatibus tempore non ut.",
  },
  {
    id: 2,
    name: "Michael Foster",
    date: "4d ago",
    imageId: "1519244703995-f4e0f30006d5",
    body: "Et ut autem. Voluptatem eum dolores sint necessitatibus quos. Quis eum qui dolorem accusantium voluptas voluptatem ipsum. Quo facere iusto quia accusamus veniam id explicabo et aut.",
  },
  {
    id: 3,
    name: "Dries Vincent",
    date: "4d ago",
    imageId: "1506794778202-cad84cf45f1d",
    body: "Expedita consequatur sit ea voluptas quo ipsam recusandae. Ab sint et voluptatem repudiandae voluptatem et eveniet. Nihil quas consequatur autem. Perferendis rerum et.",
  },
];
export default {
  components: {
    QuestionMarkCircleIcon,
      ChatAltIcon,
  EyeIcon,

  ThumbUpIcon,
  ThumbDownIcon,
  },
  setup() {
    return {
      comments,
      user,

    };
  },
};
</script>

<style>
</style>
