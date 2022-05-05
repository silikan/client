<template>
  <section aria-labelledby="Comments-title">
    <div class="bg-white shadow sm:rounded-lg sm:overflow-hidden">
      <div class="divide-y divide-gray-200">
        <div class="px-4 py-5 sm:px-6">
          <h2 id="Comments-title" class="text-lg font-medium text-gray-900">
            Comments
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
                    <a href="#" class="font-bold text-gray-900">{{
                      comment.name
                    }}</a>
                  </div>
                  <div class="mt-1 text-sm text-gray-700 italic">
                    <p>{{ comment.body }}</p>
                  </div>
                  <div class="mt-2 text-sm space-x-2">
                    <span class="text-gray-400 text-xs font-bold">{{
                      comment.date
                    }}</span>
                    {{ " " }}
                    <span class="text-gray-500 font-medium">&middot;</span>
                    {{ " " }}
                    <button
                      type="button"
                      class="text-gray-800 text-sm font-bold"
                    >
                      Reply
                    </button>
                  </div>
                  <div class="mt-6 flex">
                    <div class="mr-4 flex-shrink-0">
                      <svg
                        class="
                          h-12
                          w-12
                          border border-gray-300
                          bg-white
                          text-gray-300
                        "
                        preserveAspectRatio="none"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 200 200"
                        aria-hidden="true"
                      >
                        <path
                          vector-effect="non-scaling-stroke"
                          stroke-width="1"
                          d="M0 0l200 200M0 200L200 0"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 class="text-lg font-bold">Lorem ipsum</h4>
                      <p class="mt-1">
                        Repudiandae sint consequuntur vel. Amet ut nobis
                        explicabo numquam expedita quia omnis voluptatem. Minus
                        quidem ipsam quia iusto.
                      </p>
                    </div>
                  </div>
                  <div class="mt-6  ">
                    <div class="mr-4 flex-shrink-0 ">
                      <div class="w-full flex-1 ">
                        <form action="#">
                          <div class="">
                            <label for="comment" class="sr-only">About</label>
                            <textarea
                              id="comment"
                              name="comment"
                              rows="3"
              :class="[
                  bioErrorMessage
                    ? 'rounded-md block w-full py-3 h-20 -0 resize-none focus:ring-0  pr-10 sm:text-sm  appearance-none px-3 border border-red-300 rounded-md-sm placeholder-red-400 text-red-600 focus:outline-none focus:ring-red-500 focus:border-red-500'
                    : 'rounded-md  block w-full py-3 h-20 -0 resize-none focus:ring-0  pr-10 sm:text-sm  appearance-none px-3 border border-gray-300 rounded-md-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500',
                ]"
                              placeholder="Add a Reply"
                            />
                          </div>
                          <div class="mt-3 flex items-center justify-between">
							  	<div></div>
                            <button
                              type="submit"
                              class="
                                inline-flex
                                items-center
                                justify-center
                                px-3
                                py-1
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
                              Reply
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
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
            <img class="h-10 w-10 rounded-full" :src="user.imageUrl" alt="" />
          </div>
          <div class="min-w-0 flex-1">
            <form action="#">
              <div>
                <label for="comment" class="sr-only">About</label>
                <textarea
                  id="comment"
                  name="comment"
                  rows="3"
              :class="[
                  bioErrorMessage
                    ? 'rounded-md block w-full py-3 h-28 -0 resize-none focus:ring-0  pr-10 sm:text-sm  appearance-none px-3 border border-red-300 rounded-md-sm placeholder-red-400 text-red-600 focus:outline-none focus:ring-red-500 focus:border-red-500'
                    : 'rounded-md  block w-full py-3 h-28 -0 resize-none focus:ring-0  pr-10 sm:text-sm  appearance-none px-3 border border-gray-300 rounded-md-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500',
                ]"
                  placeholder="Add a Comment"
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
</template>

<script>
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
  },
  setup() {
    return {
      user,
      comments,
    };
  },
};
</script>

<style>
</style>
