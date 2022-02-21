<template>
  <form @submit.prevent="resetPassword">
    <div>
      <label for="email" class="block text-sm font-medium text-gray-700">
        Email address
      </label>
      <div class="mt-1">
        <input
          id="email"
          name="email"
          type="email"
          v-model="email"
          autocomplete="email"
          required=""
          class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
    </div>
    <div class="space-y-1">
      <label for="password" class="block text-sm font-medium text-gray-700">
        Password
      </label>
      <div class="mt-1">
        <input
          id="password"
          name="password"
          type="password"
          v-model="password"
          autocomplete="current-password"
          required=""
          class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
    </div>
    <div class="space-y-1">
      <label
        for="confirm password"
        class="block text-sm font-medium text-gray-700"
      >
        confirm Password
      </label>
      <div class="mt-1">
        <input
          id="confirm password"
          name="confirm password"
          type="confirm password"
          v-model="passwordConfirm"
          autocomplete="confirm password"
          required=""
          class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
    </div>
    <button
      type="submit"
      class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      Button text
    </button>
  </form>
</template>

<script>
import { ref } from "vue";
import { useRoute } from "vue-router";
import AuthService from "@/services/AuthService";

export default {
  setup() {
    let email, password, passwordConfirm;

    email = ref("");
    password = ref("");
    passwordConfirm = ref("");

    const route = useRoute();

    const resetPassword = () => {
      const payload = {
        email: email.value,
        password: password.value,
        password_confirmation: passwordConfirm.value,
        token: route.query.token,
      };
      AuthService.resetPassword(payload).then(
        () => (this.message = "Password reset.")
      );
    };

    return {
      email,
      password,
      passwordConfirm,
      resetPassword,
    };
  },
};
</script>

<style></style>
