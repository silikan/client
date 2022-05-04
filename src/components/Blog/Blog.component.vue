
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
        <div class="lg:block lg:col-span-3 xl:col-span-2">
          <nav
            aria-label="Sidebar"
            class="sticky top-4 divide-y divide-gray-300"
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
        <main class="lg:col-span-9 xl:col-span-6">
          <div class=" bg-gray-100">
            <div class="bg-white  shadow  sm:rounded-lg">
              <CreatePost />
            </div>
          </div>
          <div class="mt-4 mb-5">
            <h1 class="sr-only">Recent questions</h1>
            <ul role="list" class="space-y-4">
              <li
                v-for="question in questions"
                :key="question.id"
                class="bg-white px-4 py-6 shadow sm:p-6 sm:rounded-lg"
              >
                <article :aria-labelledby="'question-title-' + question.id">
                  <div>
                    <div class="flex space-x-3">
                      <div class="flex-shrink-0">
                        <img
                          class="h-10 w-10 rounded-full"
                          :src="question.author.imageUrl"
                          alt=""
                        />
                      </div>
                      <div class="min-w-0 flex-1">
                        <p class="text-sm font-b text-gray-900">
                          <a
                            :href="question.author.href"
                            class="hover:underline"
                            >{{ question.author.name }}</a
                          >
                        </p>
                        <p class="text-sm text-gray-500">
                          <a :href="question.href" class="hover:underline">
                            <time :datetime="question.datetime">{{
                              question.date
                            }}</time>
                          </a>
                        </p>
                      </div>
                    </div>
                    <h2
                      :id="'question-title-' + question.id"
                      class="mt-4 text-base font-medium text-gray-900"
                    >
                      {{ question.title }}
                    </h2>
                  </div>
                  <div
                    class="mt-2 text-sm text-gray-700 space-y-4"
                    v-html="question.body"
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
                    <div class="flex text-sm">
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
                          <ShareIcon class="h-5 w-5" aria-hidden="true" />
                          <span class="font-medium text-gray-900">Share</span>
                        </button>
                      </span>
                    </div>
                  </div>
                </article>
              </li>
            </ul>
          </div>
        </main>
        <aside class="xl:block xl:col-span-4">
          <div class="sticky top-4 space-y-4">
            <section aria-labelledby="who-to-follow-heading">
              <div class="bg-white rounded-lg shadow"></div>
            </section>
            <section aria-labelledby="trending-heading">
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
                  <div class="mt-6">
                    <a
                      href="#"
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
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];
const communities = [
  { name: "Movies", href: "#" },
  { name: "Food", href: "#" },
  { name: "Sports", href: "#" },
  { name: "Animals", href: "#" },
  { name: "Science", href: "#" },
  { name: "Dinosaurs", href: "#" },
  { name: "Talents", href: "#" },
  { name: "Gaming", href: "#" },
];
const tabs = [
  { name: "Recent", href: "#", current: true },
  { name: "Most Liked", href: "#", current: false },
  { name: "Most Answers", href: "#", current: false },
];
const questions = [
  {
    id: "81614",
    likes: "29",
    replies: "11",
    views: "2.7k",
    author: {
      name: "Dries Vincent",
      imageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      href: "#",
    },
    date: "December 9 at 11:43 AM",
    datetime: "2020-12-09T11:43:00",
    href: "#",
    title: "What would you have done differently if you ran Jurassic Park?",
    body: `
      <p>Jurassic Park was an incredible idea and a magnificent feat of engineering, but poor protocols and a disregard for human safety killed what could have otherwise been one of the best businesses of our generation.</p>
      <p>Ultimately, I think that if you wanted to run the park successfully and keep visitors safe, the most important thing to prioritize would be&hellip;</p>
    `,
  },
  // More questions...
];
const whoToFollow = [
  {
    name: "Leonard Krasner",
    handle: "leonardkrasner",
    href: "#",
    imageUrl:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  // More people...
];
const trendingPosts = [
  {
    id: 1,
    user: {
      name: "Floyd Miles",
      imageUrl:
        "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    body: "What books do you have on your bookshelf just to look smarter than you actually are?",
    comments: 291,
  },
  // More posts...
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
    XIcon,
    CreatePost,
  },
  setup() {
    return {
      user,
      navigation,
      userNavigation,
      communities,
      tabs,
      questions,
      whoToFollow,
      trendingPosts,
    };
  },
};
</script>
