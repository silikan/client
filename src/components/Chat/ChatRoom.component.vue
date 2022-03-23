<template>
  <div class="flex justify-center p-10">
    <div class="w-full border rounded">
      <div class="">
        <div class="w-full h-screen flex flex-col">
          <div class="relative flex items-center p-3 border-b border-gray-300">
            <img
              class="object-cover w-10 h-10 rounded-full"
              src="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383__340.jpg"
              alt="username"
            />
            <span class="block ml-2 font-bold text-gray-600">Emma</span>
            <span
              class="absolute w-3 h-3 bg-green-600 rounded-full left-10 top-3"
            >
            </span>
          </div>
          <div
            class="flex flex-col justify-end flex-1 w-full p-6 overflow-y-auto"
          >
            <ul class="space-y-2">
              <li class="flex justify-end">
                <div
                  class="
                    relative
                    max-w-xl
                    px-4
                    py-2
                    text-gray-700
                    bg-gray-100
                    rounded
                  "
                >
                  <span class="block">how are you?</span>
                </div>
              </li>
              <li class="flex justify-start">
                <div class="relative max-w-xl px-4 py-2 text-gray-700 rounded">
                  <span class="block"
                    >Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </span>
                </div>
              </li>
            </ul>
          </div>

          <div
            class="
              flex
              items-center
              justify-between
              w-full
              p-3
              border-t border-gray-300
            "
          >
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>

            <input
              type="text"
              placeholder="Message"
              class="
                block
                w-full
                py-2
                pl-4
                mx-3
                bg-gray-100
                rounded-full
                outline-none
                focus:text-gray-700
              "
              name="message"
              required
            />

            <div
              class="
                flex-shrink-0
                sm:w-full
                flex-1
                inline-flex
                items-center
                justify-center
                px-2
                py-2
                text-sm
                font-medium
                text-black
                bg-white
                hover:border-transparent
                cursor-pointer
              "
              tag="button"
              @click="sendMessage"
            >
              <PaperAirplaneIcon class="btn-chat h-5 w-5" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChatService from "@/services/ChatService";
import { computed, ref } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { PaperAirplaneIcon } from "@heroicons/vue/solid";
import { io } from "socket.io-client";

export default {
  components: {
    PaperAirplaneIcon,
  },
  setup() {
    let to = ref("");
    let from = ref("");
    let data = ref("");
    let route = useRoute();
    let store = useStore();
    let id = route.params.id;
    let socket = io("http://localhost:3000");

    const authUser = computed(() => store.getters["auth/authUser"]);

    const sendMessage = async () => {
      store.dispatch("Chat/getRoomUsers", id).then((result) => {
        let AuthUserId = authUser.value.id;
        if (result.data[0].id == AuthUserId) {
          to.value = result.data[1];
          from.value = result.data[0];
        } else {
          to.value = result.data[0];
          from.value = result.data[1];
        }
      });

      let payload = {
        message: {
          to: to.value.id,
          from: from.value.id,
          message: "hello",
          room_id: id,
        },
      };

      ChatService.sendMessage(payload);


    };

socket.on('message', function (data) {
			console.log('Incoming message:', data);
		});

    socket.on("connect", function () {
      // Connected, let's sign-up for to receive messages for this room
      socket.emit("room", `room-${id}`);
    });

    store.dispatch("Chat/getRoomUsers", id).then((result) => {
      let AuthUserId = authUser.value.id;
      if (result.data[0].id == AuthUserId) {
        to.value = result.data[1];
        from.value = result.data[0];
      } else {
        to.value = result.data[0];
        from.value = result.data[1];
      }
    });

    console.log(to.value);

    return {
      to,
      from,
      data,
      sendMessage,
    };
  },
};
</script>

<style>
</style>
