<template>
{{to}}
{{from}}
  <div class="flex justify-center p-10">
    <div class="w-full border rounded">
      <div class="">
        <div class="w-full h-screen flex flex-col">
          <div class="relative flex items-center p-3 border-b border-gray-300">
            <ChatAvatar :UserId="to.id" class="mr-2" />

            <p class="text-sm font-medium text-gray-900">{{ to.name }}</p>
          </div>
          <div
            class="flex flex-col justify-end flex-1 w-full p-6 overflow-y-auto"
          >
            <ul class="space-y-2">
              <li v-for="msg in messages" :key="msg.room_id">
                <div class="flex justify-end">
                  <div class="flex" v-if="msg.from == authUser.id">
                    <span
                      class="
                        block
                        flex-1
                        relative
                        max-w-xl
                        px-4
                        py-2
                        text-gray-700
                        bg-gray-100
                        rounded
                      "
                      >{{ msg.message }}</span
                    >
                    <ChatAvatar :UserId="msg.from" class="ml-2" />
                  </div>
                </div>
                <div class="flex justify-start">
                  <div v-if="msg.from != authUser.id" class="flex">
                    <ChatAvatar :UserId="msg.from" class="mr-2" />

                    <span
                      class="
                        relative
                        max-w-xl
                        px-4
                        py-2
                        text-gray-700
                        bg-blue-100
                        rounded
                        block
                        flex-1
                      "
                      >{{ msg.message }}</span
                    >
                  </div>
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
              v-model="message"
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
              @keyup.enter="sendMessage"
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
import ChatService from "@/services/ChatService.js";
import { computed, reactive, ref } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { PaperAirplaneIcon } from "@heroicons/vue/solid";
import { io } from "socket.io-client";
import ChatAvatar from "@/components/Chat/ChatAvatar.component";
export default {
  components: {
    PaperAirplaneIcon,
    ChatAvatar,
  },
  setup() {
    let to = ref("");
    let from = ref("");
    let message = ref("");
    let messages = reactive([]);
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
      if (message.value != "" && message.value != null) {
        let payload = {
          data: {
            to: to.value.id,
            from: from.value.id,
            message: message.value,
            room_id: id,
          },
        };
        socket.emit("message", payload);
ChatService.sendMessage(payload)
        message.value = "";
      }




    };

    socket.on("message", function (data) {
      console.log("Incoming message:", data);
      messages.push(data);
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
      message,
      sendMessage,
      messages,
      authUser,
    };
  },
};
</script>

<style>
</style>
