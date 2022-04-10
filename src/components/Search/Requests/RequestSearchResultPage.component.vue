<template>

  <div class="bg-white" v-if="links && meta">
    <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
      <div class="flex w-full items-center justify-between mb-5">
        <div
          class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none"
        >
          <h2 class="text-3xl font-extrabold tracking-tight hidden md:block">
            Requests
          </h2>
        </div>
        <div class="flex items-center flex-1 md:flex-none">
          <Search />
          <AdjustmentsIcon class="h-5 w-5 border-black rounded-md" />
        </div>
      </div>
      <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div
            class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
          >
            <div
              class="
                shadow
                overflow-hidden
                border-b border-gray-200
                sm:rounded-lg
              "
            >
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      class="
                        px-6
                        py-3
                        text-left text-xs
                        font-medium
                        text-gray-500
                        uppercase
                        tracking-wider
                      "
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      class="
                        px-6
                        py-3
                        text-left text-xs
                        font-medium
                        text-gray-500
                        uppercase
                        tracking-wider
                      "
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      class="
                        px-6
                        py-3
                        text-left text-xs
                        font-medium
                        text-gray-500
                        uppercase
                        tracking-wider
                      "
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      class="
                        px-6
                        py-3
                        text-left text-xs
                        font-medium
                        text-gray-500
                        uppercase
                        tracking-wider
                      "
                    >
                      Role
                    </th>
                    <th scope="col" class="relative px-6 py-3">
                      <span class="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr v-for="person in requests" :key="person.id">
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="flex-shrink-0 h-10 w-10">
                          <img
                            class="h-10 w-10 rounded-full"

                            alt=""
                          />

                        </div>
                        <div class="ml-4">
                          <div class="text-sm font-medium text-gray-900">
                            {{ person.name }}
                          </div>
                          <div class="text-sm text-gray-500">
                            {{ person.email }}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-900">
                        {{ person.title }}
                      </div>
                      <div class="text-sm text-gray-500">
                        {{  }}
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span
                        class="
                          px-2
                          inline-flex
                          text-xs
                          leading-5
                          font-semibold
                          rounded-full
                          bg-green-100
                          text-green-800
                        "
                      >
                        Active
                      </span>
                    </td>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                    >
                      {{ person.role }}
                    </td>
                    <td
                      class="
                        px-6
                        py-4
                        whitespace-nowrap
                        text-right text-sm
                        font-medium
                      "
                    >
                      <a href="#" class="text-indigo-600 hover:text-indigo-900"
                        >Edit</a
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div
        class="
          bg-white
          px-4
          py-3
          flex flex-col
          items-between
          justify-center
          border-t border-gray-200
          sm:px-6
          mb-10
        "
      >
        <div class="flex-1 flex justify-between sm:hidden">
          <a
            class="
              cursor-pointer
              relative
              inline-flex
              items-center
              px-4
              py-2
              border border-gray-300
              text-sm
              font-medium
              rounded-md
              text-gray-700
              bg-white
              hover:bg-gray-50
            "
            rel="prev"
            type="button"
            @click="prevPage"
            v-if="links.prev"
          >
            Previous
          </a>
          <a
            class="
              cursor-pointer
              ml-3
              relative
              inline-flex
              items-center
              px-4
              py-2
              border border-gray-300
              text-sm
              font-medium
              rounded-md
              text-gray-700
              bg-white
              hover:bg-gray-50
              max-w-md
            "
            rel="next"
            type="button"
            @click="nextPage"
            v-if="links.next"
          >
            Next
          </a>
        </div>
        <div class="sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div class="flex justify-end items-center mt-3">
            <p class="text-sm text-indigo-700">
              Page {{ meta.current_page }} of {{ meta.last_page }}
            </p>
          </div>
          <div>
            <nav
              class="
                hidden
                relative
                z-0
                sm:inline-flex
                rounded-md
                shadow-sm
                -space-x-px
              "
              aria-label="Pagination"
            >
              <a
                class="
                  cursor-pointer
                  relative
                  inline-flex
                  items-center
                  px-2
                  py-2
                  rounded-l-md
                  border border-gray-300
                  bg-white
                  text-sm
                  font-medium
                  text-gray-500
                  hover:bg-gray-50
                  max-w-md
                "
                @click="prevPage"
                v-if="links.prev"
              >
                <span class="sr-only">Previous</span>
                <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />
              </a>
              <!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" -->
              <a
                class="
                  border-gray-300
                  text-gray-500
                  hover:bg-gray-50
                  cursor-pointer
                  hidden
                  md:inline-flex
                  relative
                  items-center
                  px-4
                  py-2
                  border
                  text-sm
                  font-medium
                  max-w-md
                "
                :class="{
                  'bg-indigo-50 border-indigo-500 text-indigo-600':
                    1 === meta.current_page,
                  'bg-white border-gray-300 text-gray-500 hover:bg-gray-50':
                    1 !== meta.current_page,
                }"
                @click="setPage(1)"
              >
                <span>01</span>
              </a>
              <a v-for="page in filterPages" :key="page" @click="setPage(page)">
                <span
                  class="
                    border-gray-300
                    text-gray-500
                    hover:bg-gray-50
                    cursor-pointer
                    hidden
                    md:inline-flex
                    relative
                    items-center
                    px-4
                    py-2
                    border
                    text-sm
                    font-medium
                  "
                  :class="{
                    'bg-indigo-50 border-indigo-500 text-indigo-600':
                      page === meta.current_page,
                    'bg-white border-gray-300 text-gray-500 hover:bg-gray-50':
                      page !== meta.current_page,
                  }"
                  v-if="Math.abs(page - currentPage) < 3"
                >
                  <span v-if="page < 10">0 </span> {{ page }}</span
                >
              </a>

              <a
                v-if="totalPages > 1"
                class="
                  cursor-pointer
                  border-gray-300
                  text-gray-500
                  hover:bg-gray-50
                  hidden
                  md:inline-flex
                  relative
                  items-center
                  px-4
                  py-2
                  border
                  text-sm
                  font-medium
                "
                @click="setPage(totalPages)"
                :class="{
                  'bg-indigo-50 border-indigo-500 text-indigo-600':
                    totalPages === meta.current_page,
                  'bg-white border-gray-300 text-gray-500 hover:bg-gray-50':
                    totalPages !== meta.current_page,
                }"
              >
                <span>{{ totalPages }}</span>
              </a>
              <a
                class="
                  cursor-pointer
                  relative
                  inline-flex
                  items-center
                  px-2
                  py-2
                  rounded-r-md
                  border border-gray-300
                  bg-white
                  text-sm
                  font-medium
                  text-gray-500
                  hover:bg-gray-50
                "
                @click="nextPage"
                v-if="links.next"
              >
                <span class="sr-only">Next</span>
                <ChevronRightIcon class="h-5 w-5" aria-hidden="true" />
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/solid";

import { AdjustmentsIcon } from "@heroicons/vue/outline";
import Search from "../search.component.vue";
import { computed, reactive } from "@vue/runtime-core";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

const people = [
  {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    role: "Admin",
    email: "jane.cooper@example.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    role: "Admin",
    email: "jane.cooper@example.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    role: "Admin",
    email: "jane.cooper@example.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  // More people...
];
export default {
  components: {
    Search,
    AdjustmentsIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
  },

  setup() {
    let action = "Search/paginateHandymen";
    let route = useRoute();
    let store = useStore();
    let query = route.params.query;
    console.log(query);
    let meta, links, requests;
    let path = "handymen";

    let page = 1;
    let payload = {
      page: page,
      query: query,
    };

    /* let router = useRouter
     */ store.dispatch("Search/searchClientRequestPaginate", payload).then((res) => {
      console.log(res);


    });
    meta = computed(() => {
      return store.getters["Search/getSearchClientRequestMeta"];
    });
    links = computed(() => {
      return store.getters["Search/getSearchClientRequestLinks"];
    });
    requests = computed(() => {
      return store.getters["Search/getSearchClientRequest"];
    });
    const prevPage = () => {
      store.dispatch("Search/paginateSeachClientRequest", links.value.prev);
    };
    const nextPage = () => {
      console.log(links.value.next);
      store.dispatch("Search/paginateSeachClientRequest", links.value.next);
    };

    const setPage = (pageNumber) => {
      let paginationlink = `${process.env.VUE_APP_API_URL}/api/search/requests/paginate?page=${pageNumber}&query=${query}`;

      store.dispatch("Search/paginateSeachClientRequest", paginationlink);
      console.log(meta.value);
    };

    let currentPage = computed(() => meta.value.current_page);
    let totalPages = computed(() => meta.value.last_page);

    let filterPages = computed(() => {
      //keep the first and last page

      let data = reactive([]);
      let start = currentPage.value - 2;
      let end = currentPage.value + 2;
      let totalPages = meta.value.last_page;
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
    return {
      people,

      query,
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
      preurl
    };
  },
};
</script>
