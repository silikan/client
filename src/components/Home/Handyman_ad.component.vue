<template>
  <div class="grid grid-cols-1 md:grid-cols-2 bg-prblue p-10 md:w-2/3 self-center mb-10">
    <div class="flex justify-center">
      <img
        src="@\assets\undraw_interview_re_e5jn.svg"
        class="w-60 lg:w-96 h-96"
        alt=""
      >
    </div>

    <div
      class="
        m-10
        px-4
        sm:px-6 sm:text-center
        md:max-w-2xl md:mx-auto
        lg:text-left lg:flex lg:items-center
      "
    >
      <div>
        <h2
          class="
            text-base
            font-semibold
            tracking-wider
            text-prgreen-600
            uppercase
          "
        >
          Work and get paid
        </h2>
        <p
          class="
            mt-2
            lg:text-4xl
            font-extrabold
            text-white
            tracking-tight
            sm:text-4xl
          "
        >
          For service providers
        </p>
        <p class="mt-5 max-w-prose mx-auto text-xl text-gray-500">
          If you're a service provider, signup and get paid for your services
        </p>
        <button
          type="button"
          class="
            inline-flex
            items-center
            px-4
            py-2
            border border-transparent
            text-sm
            font-medium
            rounded-md
            shadow-sm
            text-white
            bg-prgreen-600
            hover:bg-prgreen-700
            focus:outline-none
            focus:ring-2
            focus:ring-offset-2
            focus:ring-prgreen-500
          "
        >
          signup
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  setup() {
    return {};
  },
};
</script>
