<template>


<div class="w-full mx-auto sm:px-6 lg:px-8 ">
  <div>
              
          <nav class="-mb-px flex space-x-8" aria-label="Tabs">
            <a
              v-for="tab in tabs"
              :key="tab.number"
              @click="navigateTabs(tab)"
              :href="tab.href"
              :class="[
                tab.current
                  ? 'border-pink-500 text-gray-900'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm cursor-pointer',
              ]"
              :aria-current="tab.current ? 'page' : undefined"
            >
              {{ tab.name }}
            </a>
          </nav>
          <Pricing :Data="authUserData" v-if="tabs[0].current === true" />
          <Pricing :Data="authUserData" v-if="tabs[1].current === true" />
          <Pricing :Data="authUserData" v-if="tabs[2].current === true" />

    <!-- <div class="sm:hidden">
 
      <label for="tabs" class="sr-only">Select a tab</label>
      <select
        id="tabs"
        name="tabs"
        class="
          block
          w-full
          pl-3
          pr-10
          py-2
          text-base
          border-gray-300
          focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
          sm:text-sm
          rounded-md
        "
      >
        <option>Basic</option>

        <option>Standard</option>

        <option selected>Premium</option>
      </select>
    </div>
    <div class="hidden sm:block ">
      <div class="border-b border-gray-200">
        <nav class="-mb-px flex space-x-8" aria-label="Tabs">
          <a
            href="#"
            class="
              border-transparent
              text-gray-500
              hover:text-gray-700 hover:border-gray-300
              whitespace-nowrap
              py-4
              px-1
              border-b-2
              font-medium
              text-sm
            "
          >
            Basic
          </a>

          <a
            href="#"
            class="
              border-transparent
              text-gray-500
              hover:text-gray-700 hover:border-gray-300
              whitespace-nowrap
              py-4
              px-1
              border-b-2
              font-medium
              text-sm
            "
          >
            Standard
          </a>

          <a
            href="#"
            class="
              border-indigo-500
              text-indigo-600
              whitespace-nowrap
              py-4
              px-1
              border-b-2
              font-medium
              text-sm
            "
            aria-current="page"
          >
            Premium
          </a>
        </nav>
      </div>
    </div>
  </div> -->


  <!-- <div>
    <Pricing />
  </div>
   -->

  </div>
  </div>
</template>

<script>
import Pricing from "./Pricing.component.vue";
 import {reactive} from "@vue/runtime-core";

export default {
  components: { Pricing },
  
 props: ["authUser"],

 setup(){

  // let authUserData = computed(() => {
  //      return props.authUser;
  //   });
     const tabs = reactive([
      { name: "Basic", number: 1, current: true },
       { name: "Standard", number: 2, current: false },
      { name: "Premium", number: 3, current: false },
    ]);

     const navigateTabs = (tab) => {
       if (tab.name === "Basic" && tab.number === 1) {
        tab.current = true;
        tabs[1].current = false;
         tabs[2].current = false;
      } else if (tab.name === "Standard" && tab.number === 2) {
         tab.current = true;
        tabs[2].current = false;
        tabs[0].current = false;
      } else if (tab.name === "Premium" && tab.number === 3) {
        tab.current = true;
        tabs[0].current = false;
        tabs[1].current = false;
       }
    };
     let timerange = reactive(null);


    // let ParsedTime = JSON.parse(authUserData.value.work_hours);
    //  if (ParsedTime !== null) {
    //   timerange = reactive({
    //     start: ParsedTime[0].hours,
    //     end: ParsedTime[1].hours,
    //   });
    // } else {
    //   timerange = reactive(null);
    // }

    
    return {
      tabs,
      // authUserData,
       navigateTabs,
      timerange,
    };
  }

};


</script>

<style>
</style>
