
-->
<template>
  <form action="#" class="w-full">
    <TabGroup>
      <TabList class="flex items-center">
        <Tab as="template" v-slot="{ selected }">
          <button
            :class="[
              selected
                ? 'text-gray-900 bg-gray-100 hover:bg-gray-200'
                : 'text-gray-500 hover:text-gray-900 bg-white hover:bg-gray-100',
              'ml-2 px-3 py-1.5 border border-transparent text-sm font-medium rounded-md',
            ]"
          >
            Review
          </button>
        </Tab>
        <Tab as="template" v-slot="{ selected }">
          <button
            :class="[
              selected
                ? 'text-gray-900 bg-gray-100 hover:bg-gray-200'
                : 'text-gray-500 hover:text-gray-900 bg-white hover:bg-gray-100',
              'px-3 py-1.5 border border-transparent text-sm font-medium rounded-md',
            ]"
          >
            Comment
          </button>
        </Tab>
      </TabList>
      <TabPanels class="mt-2">
        <TabPanel class="p-0.5 -m-0.5 rounded-lg">
          <div class="">
            <div
              class="
                mx-px
                mt-px
                px-3
                pt-5
                pb-12
                text-sm
                leading-5
                text-gray-800
                flex flex-col
                justify-center
                items-center
              "
            >
              <h2
                class="
                  text-2xl
                  font-extrabold
                  tracking-tight
                  text-gray-900
                  mb-5
                "
              >
                Customer Review
              </h2>

              <div class="bg-white flex justify-center items-center">
                <StarIcon
                  class="h-7 w-7 text-gray-500 cursor-pointer"
                  aria-hidden="true "
                  v-for="star in 5"
                  :key="star"
                  :class="[
                    star <= ratingData.rating
                      ? 'text-yellow-500'
                      : 'text-gray-500',
                    'h-7 w-7',
                  ]"
                  @click="revieWStarsLogic(star)"
                />
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel class="p-0.5 -m-0.5 rounded-lg">
          <label for="comment" class="sr-only">Comment</label>
          <div>
            <textarea
              rows="5"
              name="comment"
              id="comment"
              v-model="comment"
              class="
                block
                w-full
                py-3
                h-40
                -0
                resize-none
                focus:ring-0
                sm:text-sm
                appearance-none
                px-3
                border border-gray-300
                rounded-md
                shadow-sm
                placeholder-gray-400
                focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
              "
              placeholder="Add your comment..."
            />
          </div>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  </form>
</template>

<script>
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/vue";
import { StarIcon } from "@heroicons/vue/solid";
import { reactive, ref } from "@vue/reactivity";
import { watchEffect } from "@vue/runtime-core";
import { useStore } from "vuex";
import { useRoute } from 'vue-router';
const reviews = [
  {
    rating: 5,
  },

  // More reviews...
];
export default {
  components: {
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,

    StarIcon,
  },

  setup() {
    let comment = ref("");
let type = ref("");
    let store = useStore();
    let ratingData = reactive({
      rating: 0,
    });
    const revieWStarsLogic = (rating) => {
      ratingData.rating = rating;
    };

  let gigId = ref(null);
  let requestId = ref(null);
let route = useRoute();
let id = route.params.id;
let clientId = ref(null);
let handymanId = ref(null);
    store
      .dispatch("Transaction/getTransactionById", id)
      .then((result) => {
        console.log(result);
        type.value = result.cartItem.type

        if(type.value == "gig"){
          gigId.value = result.gig[0].id

        }else if (type.value == "request"){
          requestId.value = result.request[0].id
        }


          clientId.value = result.cartItem.client_id
          handymanId.value = result.cartItem.handyman_id

      })
      .catch((error) => {
        console.log(error);
      });


        watchEffect(() => {
      store.commit("Review/SET_COMMENT", comment.value);
      store.commit("Review/SET_RATING", ratingData.rating);
            store.commit("Review/SET_TYPE", type.value);
            store.commit("Review/SET_GIG_ID", gigId.value);
            store.commit("Review/SET_REQUEST_ID", requestId.value);
            store.commit("Review/SET_CLIENT_ID", clientId.value);
            store.commit("Review/SET_HANDYMAN_ID", handymanId.value);

    });

    return {
      reviews,
      ratingData,
      revieWStarsLogic,
      comment,
    };
  },
};
</script>

