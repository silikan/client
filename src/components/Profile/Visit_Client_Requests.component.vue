<template>
  <div class="bg-white">
    <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
      <div class="flex w-full items-center justify-between mb-5">
        <div
          class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none"
        >
          <h2 class="text-3xl font-extrabold tracking-tight  hidden md:block">
            Requests
          </h2>
        </div>
        <div class="flex items-center  flex-1 md:flex-none">
          <Search />
          <AdjustmentsIcon class="h-5 w-5    border-black rounded-md	 " />
        </div>
      </div>
      <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Price
                    </th>

                    <th
                      scope="col"
                      class="relative px-6 py-3"
                    >
                      <span class="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr
                    v-for="request in requests"
                    :key="request.id"
                  >
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="flex-shrink-0 h-10 w-10">
                          <img
                            class="h-10 w-10 rounded-full"
                            :src="request.avatar"
                            alt=""
                          >
                        </div>
                        <div class="ml-4">
                          <div class="text-sm font-medium text-gray-900">
                            {{ request.username }}
                          </div>

                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-900">
                        {{ request.title }}
                      </div>

                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                              {{ request.price }}

                      </span>
                    </td>

                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <router-link
                      :to="`/request/${request.id}`"
                        href="#"
                        class="text-indigo-600 hover:text-indigo-900"
                      >Check</router-link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>



<script>
const people = [
  {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    role: "Admin",
    email: "jane.cooper@example.com",
  },
  {
    name: "Cody Fisher",
    title: "Product Directives Officer",
    role: "Owner",
    email: "cody.fisher@example.com",
  },
  // More people...
];
import { useStore } from "vuex";
import { reactive } from "@vue/reactivity";
import { useRoute } from 'vue-router';
export default {
  setup() {
    let store = useStore();
    let requests = reactive([]);
  let route = useRoute()
    let id = route.params.id;
    store
      .dispatch("Request/getUserRequests", id)
      .then((result) => {
        let dataArray = Object.values(result);
        dataArray.forEach((element) => {
          requests.push({
            id: element.request.data.id,
            title: element.request.data.title,
            price: element.request.data.price,

            username: element.request.user.name,
            userId: element.request.user.id,
            userAvatar: element.request.user.avatar,
          });
        });
                  console.log(requests);

      })
      .catch((err) => {
        console.log(err);
      });


    let preurl = `${process.env.VUE_APP_API_URL}`;

    return {
      people,
      requests,
      preurl,
    };
  },
};
</script>
