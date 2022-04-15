<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-white">
    <div class="">
      <div class="mt-12 space-y-4 sm:mt-16 sm:space-y-0">

        <div
          class="
            border border-gray-200
            rounded-lg
            shadow-sm
            divide-y divide-gray-200
          "
        >
          <div class="p-6 flex items-center justify-between">
                    <ul role="list" class="space-y-3">
          <li class="bg-white overflow-hidden rounded-md px-6 py-4">
            <a href="#" class="flex-shrink-0 group block">
              <div class="flex items-center">
                <div>
                  <Avatar
                    v-if="client_name"
                    :url="client_avatar"
                    :name="client_name"
                  />
                </div>
                <div class="ml-3">
                  <p
                    class="
                      text-sm
                      font-medium
                      text-gray-700
                      group-hover:text-gray-900
                    "
                  >
                    {{ client_name }}
                  </p>
                  <p
                    class="
                      text-xs
                      font-medium
                      text-gray-500
                      group-hover:text-gray-700
                    "
                  >
                    client
                  </p>
                </div>
              </div>
            </a>
          </li>
          <li class="bg-white overflow-hidden rounded-md px-6 py-4">
            <a href="#" class="flex-shrink-0 group block">
              <div class="flex items-center">
                <div>
                  <Avatar
                    v-if="handyman_name"
                    :url="handyman_avatar"
                    :name="handyman_name"
                  />
                </div>
                <div class="ml-3">
                  <p
                    class="
                      text-sm
                      font-medium
                      text-gray-700
                      group-hover:text-gray-900
                    "
                  >
                    {{ handyman_name }}
                  </p>
                  <p
                    class="
                      text-xs
                      font-medium
                      text-gray-500
                      group-hover:text-gray-700
                    "
                  >
                    handyman
                  </p>
                </div>
              </div>
            </a>
          </li>
        </ul>
            <h2 class="text-2xl font-md text-gray-900 self-end">
              Price :
              <span class="text-1xl font-lg text-gray-900">
                {{ price }}
                <span class="text-base font-medium text-gray-500">DZD</span>
              </span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar/Avatar.component.vue";

import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { ref } from "@vue/reactivity";

export default {
  components: {
    Avatar,
  },
  setup() {
    let route = useRoute();
    let id = route.params.id;
    let store = useStore();
    let client_name = ref("");
    let client_email = ref("");
    let client_avatar = ref("");
    let handyman_name = ref("");
    let handyman_email = ref("");
    let handyman_avatar = ref("");
    let price = ref("");

    store
      .dispatch("Transaction/getTransactionById", id)
      .then((result) => {
        console.log(result);
        client_name.value = result.client.name;
        client_email.value = result.client.email;
        client_avatar.value = result.client.avatar;
        handyman_name.value = result.handyman.name;
        handyman_email.value = result.handyman.email;
        handyman_avatar.value = result.handyman.avatar;

        price.value = JSON.parse(result.cartItem.plan).price;
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(id);

    return {
      price,
      id,
      client_name,
      client_email,
      client_avatar,
      handyman_name,
      handyman_email,
      handyman_avatar,
    };
  },
};
</script>
