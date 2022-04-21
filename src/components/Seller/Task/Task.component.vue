<template>
  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div
          class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
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
                  Service
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
                  Client
                </th>
                <th scope="col" class="relative px-6 py-3">
                  <span class="sr-only">Action</span>
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="person in task" :key="person.email">
                <td
                  class="px-6 py-4 whitespace-nowrap"
                  v-if="person.item.gig.length > 0"
                >
                  <div class="flex items-center">
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900">
                        {{ person.item.gig[0].title }}
                      </div>
                    </div>
                  </div>
                </td>
                <td
                  class="px-6 py-4 whitespace-nowrap"
                  v-if="person.item.request.length > 0"
                >
                  <div class="flex items-center">
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900">
                        {{ person.item.request[0].title }}
                      </div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span
                    class="
                      inline-flex
                      items-center
                      px-2.5
                      py-0.5
                      rounded-full
                      text-xs
                      font-medium
                      bg-indigo-100
                      text-indigo-800
                    "
                  >
                    {{ person.item.task_item.type }}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span
                    class="
                      inline-flex
                      items-center
                      px-2.5
                      py-0.5
                      rounded-full
                      text-xs
                      font-medium
                      bg-indigo-100
                      text-indigo-800
                    "
                  >
                    {{ person.item.task_item.status }}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                      <router-link :to="`/user/${person.item.client.id}`">
                        <Avatar
                          v-if="person.item.client.name"
                          :url="person.item.client.avatar"
                          :name="person.item.client.name"
                        />
                      </router-link>
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
                <td
                  class="
                    px-6
                    py-4
                    whitespace-nowrap
                    text-right text-sm
                    font-medium
                  "
                  v-if="person.item.gig.length > 0"
                >
                  <router-link
                    :to="`/gig/${person.item.gig[0].id}`"
                    class="text-indigo-600 hover:text-indigo-900"
                    >Check</router-link
                  >
                </td>
                <td
                  class="
                    px-6
                    py-4
                    whitespace-nowrap
                    text-right text-sm
                    font-medium
                  "
                  v-if="person.item.request.length > 0"
                >
                  <router-link
                    :to="`/request/${person.item.request[0].id}`"
                    class="text-indigo-600 hover:text-indigo-900"
                    >Check</router-link
                  >
                </td>
                <td
                  class="
                    px-6
                    py-4
                    whitespace-nowrap
                    text-right text-sm
                    font-medium
                    space-x-4
                  "
                >
                  <a
                    v-if="person.item.task_item.status == 'accepted'"
                    type="button"
                    class="
                      cursor-pointer
                      text-white
                      bg-green-500
                      inline-flex
                      items-center
                      px-2
                      py-1
                      border border-transparent
                      text-xs
                      font-medium
                      rounded-full
                      shadow-sm
                    "
                    @click="
                      setTaskItemsStatusToInProgress(person.item.task_item.id)
                    "
                    >Start
                  </a>

                  <a
                    v-if="person.item.task_item.status == 'in progress'"
                    type="button"
                    class="
                      cursor-pointer
                      text-white
                      bg-green-500
                      inline-flex
                      items-center
                      px-2
                      py-1
                      border border-transparent
                      text-xs
                      font-medium
                      rounded-full
                      shadow-sm
                    "
                    @click="
                      setTaskItemStatusToCompleted(person.item.task_item.id)
                    "
                    >Complete
                  </a>

                  <a
                    v-if="person.item.task_item.status == 'in progress'"
                    type="button"
                    class="
                      cursor-pointer
                      text-white
                      bg-green-500
                      inline-flex
                      items-center
                      px-2
                      py-1
                      border border-transparent
                      text-xs
                      font-medium
                      rounded-full
                      shadow-sm
                    "
                    @click="
                      setTaskItemsStatusToCancelled(person.item.task_item.id)
                    "
                    >cancel
                  </a>

                  <a
                    v-if="
                      person.item.task_item.status == 'pending' &&
                      person.item.task_item.type == 'gig'
                    "
                    type="button"
                    class="
                      cursor-pointer
                      text-white
                      bg-green-500
                      inline-flex
                      items-center
                      px-2
                      py-1
                      border border-transparent
                      text-xs
                      font-medium
                      rounded-full
                      shadow-sm
                    "
                    @click="
                      setTaskItemStatusToAccepted(person.item.task_item.id)
                    "
                    >accept</a
                  >
                  <a
                    v-if="
                      person.item.task_item.status == 'pending' &&
                      person.item.task_item.type == 'gig'
                    "
                    type="button"
                    class="
                      cursor-pointer
                      text-white
                      bg-red-500
                      inline-flex
                      items-center
                      px-2
                      py-1
                      border border-transparent
                      text-xs
                      font-medium
                      rounded-full
                      shadow-sm
                    "
                    @click="
                      setTaskItemStatusToDeclined(person.item.task_item.id)
                    "
                    >decline</a
                  >

                       <a
                    v-if="person.item.task_item.status == 'paid'"
                    type="button"
                    class="
                      cursor-pointer
                      text-white
                      bg-green-500
                      inline-flex
                      items-center
                      px-2
                      py-1
                      border border-transparent
                      text-xs
                      font-medium
                      rounded-full
                      shadow-sm
                    "
                    @click="
                      setTaskItemStatusToConfirmed(person.item.task_item.id)
                    "
                    >Confirm Payment
                  </a>

                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";
import Avatar from "@/components/Avatar/Avatar.component.vue";
import { useRouter } from 'vue-router';
const people = [
  // More people...
];

export default {
  components: {
    Avatar,
  },
  setup() {
    let store = useStore();
    let task = ref([]);
    let userId = computed(() => store.getters["auth/id"]);
    let router = useRouter();
    console.log(userId.value);
    store
      .dispatch("Task/getUserTaskItems", userId.value)
      .then((result) => {
        console.log(result);
        task.value = result;
      })
      .catch((error) => {
        console.log(error);
      });
    const setTaskItemsStatusToInProgress = (taskItemId) => {
      let payload = {
        task_item_id: taskItemId,
        status: "in_progress",
      };
      console.log(payload);
      store
        .dispatch("Task/setTaskItemsStatusToInProgress", payload)
        .then((result) => {
          console.log(result);
          router.push(`/task/${taskItemId}/feed`);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    const setTaskItemsStatusToCancelled = (taskItemId) => {
      let payload = {
        task_item_id: taskItemId,
        status: "canceled",
      };
      store
        .dispatch("Task/setTaskItemsStatusToCancelled", payload)
        .then((result) => {
          console.log(result);
          router.push(`/task/${taskItemId}/feed`);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    const setTaskItemStatusToCompleted = (taskItemId) => {
      let payload = {
        task_item_id: taskItemId,
        status: "completed",
      };
      store
        .dispatch("Task/setTaskItemStatusToCompleted", payload)
        .then((result) => {
          console.log(result);
          router.push(`/task/${taskItemId}/feed`);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    async function setTaskItemStatusToAccepted(taskItemId) {
      let payload = {
        task_item_id: taskItemId,
        status: "accepted",
      };
      store
        .dispatch("Task/setTaskItemStatusToAccepted", payload)
        .then((result) => {
          console.log(result);
          router.push(`/task/${taskItemId}/feed`);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    async function setTaskItemStatusToDeclined(taskItemId) {
      let payload = {
        task_item_id: taskItemId,
        status: "declined",
      };
      store
        .dispatch("Task/setTaskItemStatusToDeclined", payload)
        .then((result) => {
          console.log(result);
          router.push(`/task/${taskItemId}/feed`);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    async function setTaskItemStatusToPaid(taskItemId) {
      let payload = {
        task_item_id: taskItemId,
        status: "paid",
      };
      store
        .dispatch("Task/setTaskItemStatusToPaid", payload)
        .then((result) => {
          console.log(result);
          router.push(`/task/${taskItemId}/feed`);
        })
        .catch((error) => {
          console.log(error);
        });


    }


        async function setTaskItemStatusToConfirmed (taskItemId) {
          let payload = {
            task_item_id: taskItemId,
            status: "confirmed",
          };
          store
            .dispatch("Task/setTaskItemStatusToConfirmed", payload)
            .then((result) => {
              console.log(result);
              router.push(`/task/${taskItemId}/feed`);
            })
            .catch((error) => {
              console.log(error);
            });
        }
    return {
      people,
      task,
      setTaskItemsStatusToInProgress,
      setTaskItemsStatusToCancelled,
      setTaskItemStatusToCompleted,
      setTaskItemStatusToAccepted,
      setTaskItemStatusToDeclined,
      setTaskItemStatusToPaid,
      setTaskItemStatusToConfirmed
    };
  },
};
</script>
