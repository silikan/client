<template>
  <div class=" h-screen min-h-full flex flex-col justify-between	 ">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "app",
  components: {},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,700");

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
</style>
