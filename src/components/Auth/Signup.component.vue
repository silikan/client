<template>
  <div class="min-h-full flex">
    <div class="hidden lg:flex w-full flex-1 justify-center items-center">
      <img
        class="self-center ml-10"
        src="@\assets\undraw_fingerprint_re_uf3f.svg"
        alt=""
      />
    </div>
    <div class="flex flex-col justify-center py-12 px-4 flex-1">
      <div class="mx-auto w-full max-w-sm lg:w-96">
        <div>
          <img
            class="h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 class="mt-6 text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
          <p class="mt-2 text-sm text-gray-600">
            Or
            {{ " " }}
            <a
              href="#"
              class="font-medium text-indigo-600 hover:text-indigo-500"
            >
              start your 14-day free trial
            </a>
          </p>
        </div>
        <div class="flex justify-center m-10">
          <nav aria-label="Progress">
            <ol role="list" class="flex items-center">
              <li
                v-for="(step, stepIdx) in steps"
                :key="step.name"
                :class="[
                  stepIdx !== steps.length - 1 ? 'pr-8 sm:pr-20' : '',
                  'relative',
                ]"
              >
                <template v-if="step.status === 'complete'">
                  <div
                    class="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div class="h-0.5 w-full bg-indigo-600" />
                  </div>
                  <a
                    href="#"
                    class="relative w-8 h-8 flex items-center justify-center bg-indigo-600 rounded-full hover:bg-indigo-900"
                  >
                    <CheckIcon class="w-5 h-5 text-white" aria-hidden="true" />
                    <span class="sr-only">{{ step.name }}</span>
                  </a>
                </template>
                <template
                  v-else-if="step.status === 'current'"
                  condition="step.status === 'current'"
                >
                  <div
                    class="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div class="h-0.5 w-full bg-gray-200" />
                  </div>
                  <a
                    href="#"
                    class="relative w-8 h-8 flex items-center justify-center bg-white border-2 border-indigo-600 rounded-full"
                    aria-current="step"
                  >
                    <span
                      class="h-2.5 w-2.5 bg-indigo-600 rounded-full"
                      aria-hidden="true"
                    />
                    <span class="sr-only">{{ step.name }}</span>
                  </a>
                </template>
                <template v-else>
                  <div
                    class="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div class="h-0.5 w-full bg-gray-200" />
                  </div>
                  <a
                    href="#"
                    class="group relative w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full hover:border-gray-400"
                  >
                    <span
                      class="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300"
                      aria-hidden="true"
                    />
                    <span class="sr-only">{{ step.name }}</span>
                  </a>
                </template>
              </li>
            </ol>
          </nav>
        </div>
        <div class="mt-8">
          <RadioGroup v-model="selected" v-if="steps[0].status == 'current'">
            <RadioGroupLabel class="sr-only"> Privacy setting </RadioGroupLabel>
            <div class="bg-white rounded-md -space-y-px">
              <RadioGroupOption
                as="template"
                v-for="(setting, settingIdx) in settings"
                :key="setting.name"
                :value="setting"
                v-slot="{ checked, active }"
              >
                <div
                  :class="[
                    settingIdx === 0 ? 'rounded-tl-md rounded-tr-md' : '',
                    settingIdx === settings.length - 1
                      ? 'rounded-bl-md rounded-br-md'
                      : '',
                    checked
                      ? 'bg-indigo-50 border-indigo-200 z-10'
                      : 'border-gray-200',
                    'relative border p-4 flex cursor-pointer focus:outline-none',
                  ]"
                >
                  <span
                    :class="[
                      checked
                        ? 'bg-indigo-600 border-transparent'
                        : 'bg-white border-gray-300',
                      active ? 'ring-2 ring-offset-2 ring-indigo-500' : '',
                      'h-4 w-4 mt-0.5 cursor-pointer rounded-full border flex items-center justify-center',
                    ]"
                    aria-hidden="true"
                  >
                    <span class="rounded-full bg-white w-1.5 h-1.5" />
                  </span>
                  <div class="ml-3 flex flex-col">
                    <RadioGroupLabel
                      as="span"
                      :class="[
                        checked ? 'text-indigo-900' : 'text-gray-900',
                        'block text-sm font-medium',
                      ]"
                    >
                      {{ setting.name }}
                    </RadioGroupLabel>
                    <RadioGroupDescription
                      as="span"
                      :class="[
                        checked ? 'text-indigo-700' : 'text-gray-500',
                        'block text-sm',
                      ]"
                    >
                      {{ setting.description }}
                    </RadioGroupDescription>
                  </div>
                </div>
              </RadioGroupOption>
            </div>
          </RadioGroup>
          <div class="signup" v-if="steps[1].status == 'current'">
            <div>
              <div>
                <p class="text-sm font-medium text-gray-700">Sign in with</p>

                <div class="mt-1 grid grid-cols-3 gap-3">
                  <div>
                    <a
                      href="#"
                      class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                    >
                      <span class="sr-only">Sign in with Facebook</span>
                      <svg
                        class="w-5 h-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>

                  <div>
                    <a
                      href="#"
                      class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                    >
                      <span class="sr-only">Sign in with Twitter</span>
                      <svg
                        class="w-5 h-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
                        />
                      </svg>
                    </a>
                  </div>

                  <div>
                    <a
                      href="#"
                      class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                    >
                      <span class="sr-only">Sign in with GitHub</span>
                      <svg
                        class="w-5 h-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div class="mt-6 relative">
                <div
                  class="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div class="w-full border-t border-gray-300" />
                </div>
                <div class="relative flex justify-center text-sm">
                  <span class="px-2 bg-white text-gray-500">
                    Or continue with
                  </span>
                </div>
              </div>
            </div>

            <div class="mt-6">
              <form
                action="#"
                method="POST"
                class="space-y-6"
                @submit.prevent="registerUser"
              >
                <div>
                  <label
                    for="n ame"
                    class="block text-sm font-medium text-gray-700"
                  >
                    name
                  </label>
                  <div class="mt-1">
                    <input
                      id="name"
                      name="name"
                      type="name"
                      autocomplete="name"
                      v-model="name"
                      required=""
                      class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label
                    for="email"
                    class="block text-sm font-medium text-gray-700"
                  >
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
                  <label
                    for="password"
                    class="block text-sm font-medium text-gray-700"
                  >
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
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label
                      for="remember-me"
                      class="ml-2 block text-sm text-gray-900"
                    >
                      Remember me
                    </label>
                  </div>

                  <div class="text-sm">
                    <a
                      href="#"
                      class="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Forgot your password?
                    </a>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { CheckIcon } from "@heroicons/vue/solid";
import {
  RadioGroup,
  RadioGroupDescription,
  RadioGroupLabel,
  RadioGroupOption,
} from "@headlessui/vue";

const steps = [
  { name: "Step 1", href: "#", status: "complete" },

  { name: "Step 3", href: "#", status: "current" },

  { name: "Step 5", href: "#", status: "upcoming" },
];
const settings = [
  {
    name: "Public access",
    description: "This project would be available to anyone who has the link",
  },
  {
    name: "Private to Project Members",
    description: "Only members of this project would be able to access",
  },
  {
    name: "Private to you",
    description: "You are the only one able to access this project",
  },
];

import { getError } from "@/utils/helpers";
import AuthService from "@/services/AuthService";
import { useRouter } from "vue-router";
import { ref } from "vue";

export default {
  components: {
    CheckIcon,
    RadioGroup,
    RadioGroupDescription,
    RadioGroupLabel,
    RadioGroupOption,
  },
  setup() {
    const selected = ref(settings[0]);
    let name, email, password, passwordConfirm, error;

    name = ref("");
    email = ref("");
    password = ref("");
    passwordConfirm = ref("");
    const router = useRouter();

    const registerUser = () => {
      error = null;
      const payload = {
        name: name.value,
        email: email.value,
        password: password.value,
        password_confirmation: passwordConfirm.value,
      };
      AuthService.registerUser(payload)
        .then(() => router.push("/dashboard"))
        .catch((error) => (error = getError(error)));
    };

    return {
      steps,
      settings,
      selected,
      name,
      email,
      password,
      passwordConfirm,
      error,
      registerUser,
    };
  },
};
</script>
