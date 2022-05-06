
<template>
  <div class="min-h-full bg-gray-100">
    <div class="py-10">
      <div
        class="
          max-w-3xl
          mx-auto
          sm:px-6
          lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8
        "
      >
        <div class="w-full  lg:col-span-3 xl:col-span-3">
          <nav
            aria-label="Sidebar"
            class="sticky top-4 divide-y divide-gray-300 w-full"
          >
            <div class="pb-8 space-y-1">
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                :class="[
                  item.current
                    ? 'bg-gray-200 text-gray-900'
                    : 'text-gray-600 hover:bg-gray-50',
                  'group flex items-center px-3 py-2 text-sm font-medium rounded-md',
                ]"
                :aria-current="item.current ? 'page' : undefined"
              >
                <component
                  :is="item.icon"
                  :class="[
                    item.current
                      ? 'text-gray-500'
                      : 'text-gray-400 group-hover:text-gray-500',
                    'flex-shrink-0 -ml-1 mr-3 h-6 w-6',
                  ]"
                  aria-hidden="true"
                />
                <span class="truncate">
                  {{ item.name }}
                </span>
              </a>
            </div>
          </nav>
        </div>
        <main class=" lg:col-span-6 xl:col-span-6">
          <div class="bg-gray-100">
            <div class="bg-white shadow sm:rounded-lg">
              <CreatePost />
            </div>
          </div>
          <div class="mt-4 mb-5">
            <h1 class="sr-only">Recent questions</h1>
            <ul role="list" class="space-y-4">
              <li
                v-for="question in requests"
                :key="question.id"
                class="bg-white sm:rounded-lg"
              >
              <div>
                 <div class="flex-shrink-0 ">
                    <img
                    v-if="question.image"
                      class="h-96 w-full rounded-t-lg"
                      :src="`${preurl}/${question.image}`"
                      alt=""
                    />
                  </div>

                <article class=" px-4 py-6 shadow sm:p-6" :aria-labelledby="'question-title-' + question.id" v-if="loading === false && meta && links">

                  <div>
                    <div class="flex space-x-3">
                      <div class="flex-shrink-0">
                        <Avatar
                          v-if="question.user.name"
                          :url="question.user.avatar"
                          :name="question.user.name"
                        />
                      </div>
                      <div class="min-w-0 flex-1">
                        <p class="text-sm font-b text-gray-900">
                          <router-link
                            :to="`/user/${question.user.id}`"
                            class="hover:underline"
                            >{{ question.user.name }}</router-link
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
                              :datetime="question.created_at"
                            />
                          </a>
                        </p>
                      </div>
                    </div>
                    <h2
                      :id="'question-title-' + question.id"
                      class="mt-4 text-base font-bold text-gray-900"
                    >
                      {{ question.title }}
                    </h2>
                  </div>
                  <div
                    class="mt-2 break-all text-sm text-gray-700 space-y-4"
                    v-html="question.content"
                  />

                  <div class="mt-6 flex justify-between space-x-8">
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
                            question.likes
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
                            question.likes
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
                            question.replies
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
                            question.views
                          }}</span>
                          <span class="sr-only">views</span>
                        </button>
                      </span>
                    </div>
                  </div>
                </article>
                  </div>
              </li>
            </ul>
          </div>
          <PostFeedSkeleton v-if="loading === true"/>
          <div class="mt-6        cursor-pointer" >
                    <a

                      class="
                        w-full
                        block
                        text-center
                        px-4
                        py-2
                        border border-gray-300
                        shadow-sm
                        text-sm
                        font-medium
                        rounded-md
                        text-gray-700
                        bg-white
                        hover:bg-gray-50

                      "
                      @click="loadMore"
                    v-if=" meta.current_page < meta.last_page"
                    >
                      View More
                    </a>
                  </div>
        </main>

        <aside class="xl:block   lg:col-span-3 xl:col-span-3">
          <div class="sticky top-4 space-y-4">
            <section aria-labelledby="who-to-follow-heading">
              <div class="bg-white rounded-lg shadow"></div>
            </section>
            <section aria-labelledby="trending-heading w-full ">
              <div class="bg-white rounded-lg shadow">
                <div class="p-6">
                  <h2
                    id="trending-heading"
                    class="text-base font-medium text-gray-900"
                  >
                    Trending
                  </h2>
                  <div class="mt-6 flow-root">
                    <ul role="list" class="-my-4 divide-y divide-gray-200">
                      <li
                        v-for="post in trendingPosts"
                        :key="post.id"
                        class="flex py-4 space-x-3"
                      >
                        <div class="flex-shrink-0">
                          <img
                            class="h-8 w-8 rounded-full"
                            :src="post.user.imageUrl"
                            :alt="post.user.name"
                          />
                        </div>
                        <div class="min-w-0 flex-1">
                          <p class="text-sm text-gray-800">{{ post.body }}</p>
                          <div class="mt-2 flex">
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
                                <ChatAltIcon
                                  class="h-5 w-5"
                                  aria-hidden="true"
                                />
                                <span class="font-medium text-gray-900">{{
                                  post.comments
                                }}</span>
                              </button>
                            </span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div class="mt-6 ">
                    <a
                      href="#"
                      class="
                        block
                        text-center
                        px-4
                        py-2
                        border border-gray-300
                        shadow-sm
                        text-sm
                        font-medium
                        rounded-md
                        text-gray-700
                        bg-white
                        hover:bg-gray-50
                      "
                    >
                      View all
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar/Avatar.component.vue";
 import PostFeedSkeleton from "@/components/Loading/Skeletons/postFeed.component.vue";

import { computed, reactive, ref } from "@vue/runtime-core";
import { useStore } from "vuex";
import CreatePost from "@/components/Post/create.component.vue";
import {
  ChatAltIcon,
  CodeIcon,
  DotsVerticalIcon,
  EyeIcon,
  FlagIcon,
  PlusSmIcon,
  SearchIcon,
  ShareIcon,
  StarIcon,
  ThumbUpIcon,
  ThumbDownIcon,
} from "@heroicons/vue/solid";
import {
  BellIcon,
  FireIcon,
  HomeIcon,
  MenuIcon,
  TrendingUpIcon,
  UserGroupIcon,
  XIcon,
} from "@heroicons/vue/outline";

const user = {
  name: "Chelsea Hagon",
  email: "chelseahagon@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Home", href: "#", icon: HomeIcon, current: true },
  { name: "Popular", href: "#", icon: FireIcon, current: false },
  { name: "Communities", href: "#", icon: UserGroupIcon, current: false },
  { name: "Trending", href: "#", icon: TrendingUpIcon, current: false },
];

export default {
  components: {
    BellIcon,
    ChatAltIcon,
    CodeIcon,
    DotsVerticalIcon,
    EyeIcon,
    FlagIcon,
    MenuIcon,
    PlusSmIcon,
    SearchIcon,
    ShareIcon,
    StarIcon,
    ThumbUpIcon,
    ThumbDownIcon,
    XIcon,
    CreatePost,
    Avatar,
    PostFeedSkeleton,
  },
  setup() {
    let action = "Search/paginateHandymen";
    let store = useStore();
    let meta, links, requests;
    let path = "handymen";

    let page = 1;
    let open = ref(false);
    let type = ref("request");
    let RequestId = ref(null);
    let openDiag = (id) => {
      open.value = true;
      RequestId.value = id;
    };
    /* let router = useRouter
     */ store.dispatch("Blog/getAllPostsPaginated", page).then((res) => {
      console.log(res);
    });
    meta = computed(() => {
      return store.getters["Blog/getPaginatedPostsMeta"];
    });
    links = computed(() => {
      return store.getters["Blog/getPaginatedPostsLinks"];
    });

    let feedbackReactive = reactive([]);
    requests = computed(() => {
      if (meta.value.current_page == 1 && feedbackReactive.length > 0) {
        feedbackReactive = store.getters["Blog/getPaginatedPosts"];
        return feedbackReactive;
      } else {
        feedbackReactive.push(...store.getters["Blog/getPaginatedPosts"]);
        return feedbackReactive;
      }
    });
    console.log(requests);
    console.log(meta);
    const loadMore = () => {
      if (page < meta.value.last_page) {
        page++;
        let paginationlink = `${process.env.VUE_APP_API_URL}/api/blog/posts/paginate?page=${page}`;

        store.dispatch("Blog/getLink", paginationlink);
      }
    };
    const prevPage = () => {
      store.dispatch("Blog/getLink", links.value.prev);
    };
    const nextPage = () => {
      console.log(links.value.next);
      store.dispatch("Blog/getLink", links.value.next);
    };

    const setPage = (pageNumber) => {
      let paginationlink = `${process.env.VUE_APP_API_URL}/api/blog/posts/paginate?page=${pageNumber}`;

      store.dispatch("Blog/getLink", paginationlink);
      console.log(meta.value);
    };

    let currentPage = computed(() => meta.value.current_page);
    let totalPages = computed(() => meta.value.last_page);

    let filterPages = computed(() => {
      //keep the first and last page

      let data = reactive([]);
      let start = currentPage.value - 2;
      let end = currentPage.value + 2;
      let totalPages = computed(() => meta.value.last_page);

      console.log(totalPages.value);
      if (start < 1) {
        start = 1;
        end = 5;
      }

      if (end > totalPages.value) {
        end = totalPages.value;
        start = totalPages.value - 4;
      }
      for (let i = start; i <= end; i++) {
        if (i !== totalPages.value && i !== 1 && i < totalPages) {
          data.push(i);
        }
      }

      return data;
    });
    let preurl = `${process.env.VUE_APP_API_URL}`;
    let loading = computed(() => store.getters["Blog/getPaginatedPostsLoading"]);

    return {
      user,
      navigation,

      action,
      path,

      prevPage,
      nextPage,
      setPage,
      meta,
      links,
      requests,
      filterPages,
      currentPage,
      totalPages,
      preurl,
      open,
      type,
      RequestId,
      openDiag,
      loading,
      loadMore,
    };
  },
};
</script>
