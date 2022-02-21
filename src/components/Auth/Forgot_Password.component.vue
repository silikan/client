<template>
  <form
      @submit.prevent="forgotPassword"
      class="p-5 bg-white border rounded shadow"
    >
  <div>

    <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
    <div class="mt-1">
      <input type="email" v-model="email" name="email" id="email" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="you@example.com" aria-describedby="email-description" />
    </div>
    <p class="mt-2 text-sm text-gray-500" id="email-description">We'll only use this for spam.</p>
  </div>
    <button type="submit" class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
    Button text
    <MailIcon class="ml-3 -mr-1 h-5 w-5" aria-hidden="true" />
  </button>
  </form>

</template>
<script>
import { MailIcon } from '@heroicons/vue/solid'
import AuthService from "@/services/AuthService";
import { ref } from 'vue';

export default {
  components: {
    MailIcon,

  },
  setup() {

	  let email = ref('');


	  const forgotPassword = () => {
  const payload = {
        email: email.value,
      };

		  AuthService.forgotPassword(payload).then(() => (this.message = "Reset password email sent."))
	  }



	return {
	  //
	  forgotPassword,
	  email
	}
  },
}
</script>
