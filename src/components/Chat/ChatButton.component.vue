<template>
  <div
    class="
      flex-shrink-0
      sm:w-full
      flex-1
      inline-flex
      items-center
      justify-center
      px-4
      py-2
      border border-gray-300
      rounded-md
      shadow-sm
      text-sm
      font-medium
      text-black
      bg-white
      hover:border-transparent
      cursor-pointer
    "
    tag="button"
    @click="CreateRoom"
  >
    <!--        <button
                  type="button"
                  class="
                    flex-shrink-0
                    w-full
                    inline-flex
                    items-center
                    justify-center
                    px-4
                    py-2
                    border border-gray-300
                    rounded-md
                    shadow-sm
                    text-sm
                    font-medium
                    text-black
                    bg-white
                    hover:border-transparent
                    sm:flex-1
                  "
                > -->
    <PaperAirplaneIcon class=" btn-chat 	 h-5 w-5 " aria-hidden="true" />

    <!--                 </button>
 -->
  </div>

</template>

<script>
import { PaperAirplaneIcon } from "@heroicons/vue/solid";
import { computed, ref } from "@vue/runtime-core";
import { useStore } from "vuex";

import ChatService from '@/services/ChatService';
import { useRouter } from 'vue-router';

export default {
  components: {
    PaperAirplaneIcon,
  },
  props: ["ToUserId"],

  setup(props) {
    let roomId = ref("");
    let router = useRouter();

const store = useStore();
    const authUser = computed(() => store.getters["auth/authUser"]);

    let ToUserIdData = computed(() => {
      return props.ToUserId;
    });

    const CreateRoom =  () => {
		let payload = {
			to: ToUserIdData.value,
			from: authUser.value.id,
		};
     ChatService.CreateRoom(payload).then((result) => {
     roomId.value = result.data.id;
     console.log(result.data.id);
      router.push({ name: 'ChatRoom', params: { id: roomId.value } })

    }).catch((err) => {
         console.log(err);

    });


    };



    return {
      ToUserIdData,
      CreateRoom,
      authUser,
    };
  },
};
</script>

<style>
.btn-chat {
    transform: rotate(90deg);
}
</style>
