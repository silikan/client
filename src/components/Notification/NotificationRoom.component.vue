<template>
  <div v-if="loading === true && isLoggedin">
    <Table />
  </div>
  <div class="bg-white" v-if="loading === false && links && meta && isLoggedin">
    <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
      <div class="flex w-full items-center justify-between mb-5">
        <div
          class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none"
        >
          <h2 class="text-3xl font-extrabold tracking-tight hidden md:block">
            Notifications
          </h2>
        </div>
      </div>
      <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 scrollbar">
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
                      Client
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
                      Data
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
                      Type
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
                      Read
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
                      Time
                    </th>
                    <th scope="col" class="relative px-6 py-3">
                      <span class="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                         <tr
                    v-for="notification in socketnotificationsdata.slice().reverse()"
                    :key="notification.id"
                  >
                    <td class="px-6 py-4 whitespace-nowrap">
                      <router-link :to="`/user/${notification.id}`">
                        <div class="flex items-center">
                          <div class="flex-shrink-0 h-10 w-10">
                            <Avatar
                              v-if="notification.name"
                              :url="notification.avatar"
                              :name="notification.name"
                            />
                          </div>
                          <div class="ml-4">
                            <div class="text-sm font-medium text-gray-900">
                              {{ notification.name }}
                            </div>
                            <div class="text-sm text-gray-500">
                              {{ notification.email }}
                            </div>
                          </div>
                        </div>
                      </router-link>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="ml-4">
                          <div class="text-sm text-gray-500">
                            {{ notification.data }}
                          </div>
                        </div>
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
                          bg-prgreen-600
                          text-prgreen-50
                        "
                      >
                        {{ notification.type }}
                      </span>
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
                          bg-prgreen-600
                          text-prgreen-50
                        "
                      >
                        false
                      </span>
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
                          bg-red-100
                          text-red-800
                        "
                      >
                    <timeago :datetime="new Date()"/>

                      </span>
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
                      <router-link
                      v-if="notification.type === 'chat'"
                        :to="`/room/${notification.chat_room_id}`"
                        href="#"
                        class="text-prgreen-600 hover:text-prgreen-900"
                        >Check</router-link
                      >
                        <router-link
                        v-if="notification.type === 'request'"
                        :to="`/cart`"
                        href="#"
                        class="text-prgreen-600 hover:text-prgreen-900"
                        >Check</router-link
                      >
                        <router-link
                        v-if="notification.type === 'gig'"
                        :to="`/task`"
                        href="#"
                        class="text-prgreen-600 hover:text-prgreen-900"
                        >Check</router-link
                      >
                    </td>
                  </tr>
                  <tr
                    v-for="notification in notifications"
                    :key="notification.id"
                  >
                    <td class="px-6 py-4 whitespace-nowrap">
                      <router-link :to="`/user/${notification.fromData.id}`">
                        <div class="flex items-center">
                          <div class="flex-shrink-0 h-10 w-10">
                            <Avatar
                              v-if="notification.fromData.name"
                              :url="notification.fromData.avatar"
                              :name="notification.fromData.name"
                            />
                          </div>
                          <div class="ml-4">
                            <div class="text-sm font-medium text-gray-900">
                              {{ notification.fromData.name }}
                            </div>
                            <div class="text-sm text-gray-500">
                              {{ notification.fromData.email }}
                            </div>
                          </div>
                        </div>
                      </router-link>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="ml-4">
                          <div class="text-sm text-gray-500">
                            {{ notification.data }}
                          </div>
                        </div>
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
                          bg-prgreen-600
                          text-prgreen-50
                        "
                      >
                        {{ notification.type }}
                      </span>
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
                          bg-prgreen-600
                          text-prgreen-50
                        "
                      >
                        {{ notification.read }}
                      </span>
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
                          bg-red-100
                          text-red-800
                        "
                      >
                    <timeago :datetime="notification.created_at"/>

                      </span>
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
                      <router-link
                      v-if="notification.type === 'chat'"
                        :to="`/room/${notification.chat_room_id}`"
                        href="#"
                        class="text-prgreen-600 hover:text-prgreen-900"
                        >Check</router-link
                      >
                        <router-link
                        v-if="notification.type === 'request'"
                        :to="`/cart`"
                        href="#"
                        class="text-prgreen-600 hover:text-prgreen-900"
                        >Check</router-link
                      >
                        <router-link
                        v-if="notification.type === 'gig'"
                        :to="`/task`"
                        href="#"
                        class="text-prgreen-600 hover:text-prgreen-900"
                        >Check</router-link
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
            <p class="text-sm text-prgreen-700">
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
              <!-- Current: "z-10 bg-prgreen-50 border-prgreen-500 text-prgreen-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" -->
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
                  'bg-prgreen-50 border-prgreen-500 text-prgreen-600':
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
                    'bg-prgreen-50 border-prgreen-500 text-prgreen-600':
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
                  'bg-prgreen-50 border-prgreen-500 text-prgreen-600':
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
import Avatar from "@/components/Avatar/Avatar.component.vue";
import Table from "@/components/Loading/Skeletons/Table.component.vue";
import { io } from "socket.io-client";

import { computed, reactive, ref } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  components: {
    ChevronLeftIcon,
    ChevronRightIcon,
    Avatar,
    Table,

  },

  setup() {
    let action = "Search/paginateHandymen";
    let store = useStore();
    let meta, links, notifications;
    let path = "handymen";
        const isLoggedin = computed(() => store.getters["auth/loggedIn"]);

    let page = 1;

    /* let router = useRouter
     */ store
      .dispatch("Notification/getAthUserRoomNotifications", page)
      .then(() => {
      });
    meta = computed(() => {
      return store.getters["Notification/meta"];
    });
    links = computed(() => {
      return store.getters["Notification/links"];
    });
    notifications = computed(() => {
      return store.getters["Notification/getNotifications"];
    });
    const prevPage = () => {
      store.dispatch("Notification/getLink", links.value.prev);
    };
    const nextPage = () => {
      store.dispatch("Notification/getLink", links.value.next);
    };

    const setPage = (pageNumber) => {
      let paginationlink = `${process.env.VUE_APP_API_URL}/api/notification/room?page=${pageNumber}`;

      store.dispatch("Notification/getLink", paginationlink);
    };

    let currentPage = computed(() => meta.value.current_page);
    let totalPages = computed(() => meta.value.last_page);

    let filterPages = computed(() => {
      //keep the first and last page

      let data = reactive([]);
      let start = currentPage.value - 2;
      let end = currentPage.value + 2;
      let totalPages = computed(() => meta.value.last_page);
      if (start < 1) {
        start = 1;
        end = 5;
      }

      if (end > totalPages.value) {
        end = totalPages.value;
        start = totalPages.value - 4;
      }
      for (let i = start; i <= end; i++) {
        if (i !== totalPages.value && i !== 1 && i < totalPages.value) {
          data.push(i);
        }
      }

      return data;
    });
    let preurl = `${process.env.VUE_APP_API_URL}`;
    let loading = computed(
      () => store.getters["Notification/getNotificationLoading"]
    );










let socketnotificationsdata = ref([]);



 let notificationSocket = io("http://localhost:4000");
   let authUserData = computed(() => store.getters["auth/authUser"]);

    let roomId = authUserData.value.NotificationRoom.id;
    notificationSocket.on("connect", function () {
      // Connected, let's sign-up for to receive messages for this room
      notificationSocket.emit(
        "notificationRoom",
        `notification-room-${roomId}`
      );
    });
    notificationSocket.on("notification", function (data) {

      store.dispatch("user/getUser", data.from).then((res) => {
        let notification = {
          data: data.data,
          from: data.from,
          notification_room_id: data.notification_room_id,
          to: data.to,
          type: data.type,
          show: true,
          name: res.data.name,
          avatar: res.data.avatar,
          id: data.from,
        };

/*         notifications.value.push(notification);
 */

  socketnotificationsdata.value.push(notification);


});
    });








    return {
      action,
      path,

      prevPage,
      nextPage,
      setPage,
      meta,
      links,
      notifications,
      filterPages,
      currentPage,
      totalPages,
      preurl,
      loading,
      isLoggedin,
      socketnotificationsdata
    };
  },
};
</script>




<style>
.scrollbar {
  cursor: pointer;
}
.scrollbar::-webkit-scrollbar {
  width: 15px;
  height: 20px;
}

.scrollbar::-webkit-scrollbar-track {
  border-radius: 100vh;
  background: #e2e8f0;
}

.scrollbar::-webkit-scrollbar-thumb {
  background: #94a3b8;
  border-radius: 100vh;
  border: 3px solid #e2e8f0;
}

.scrollbar::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}
</style>
