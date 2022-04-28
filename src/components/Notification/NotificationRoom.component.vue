<template>
  <div>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid odit
    inventore maxime, distinctio veniam unde, sequi quos exercitationem
    laboriosam consequuntur voluptatem animi assumenda. Est alias perferendis,
    quasi nemo dicta eaque.
  </div>
</template>

<script>
import { io } from "socket.io-client";
import { useStore } from "vuex";
import { computed, ref } from "@vue/runtime-core";
export default {
  setup() {
     let id =  ref(null);
    let notificationSocket = io("http://localhost:4000");
    let store = useStore();
    let authUserData = computed(() => store.getters["auth/authUser"]);
    if ( authUserData.value.NotificationRoom ) {
   id.value = authUserData.value.NotificationRoom.id;
    }
   notificationSocket.on("connect", function () {
      // Connected, let's sign-up for to receive messages for this room
      console.log(`room-${id.value}`);
      notificationSocket.emit("notificationRoom", `notification-room-${id.value}`);
    });
    notificationSocket.on("notification", function (data) {
      console.log("notification");
      console.log(data);
    });

    return {};
  },
};
</script>

<style>
</style>
