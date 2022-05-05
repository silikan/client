<template>

  <div class="mt-6 "  >
    <div class="flex" v-for="reply in replies" :key="reply.id">

    <div class="mr-4 flex-shrink-0">
   <Avatar
                      v-if="reply.user.name"
                      :url="reply.user.avatar"
                      :name="reply.user.name"
                      :height="10"
                      :width="10"
                    />
    </div>
    <div>
      <h4 class="text-lg font-bold">{{reply.user.name}}</h4>
      <p class="mt-1 text-md text-gray-700 italic">
       {{reply.comment}}
      </p>
    </div>
    </div>

  </div>
</template>

<script>
import Avatar from "@/components/Post/CommentAvatar.component.vue";

import { computed, ref } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import BlogServices from "@/services/BlogServices";
export default {
  props: ["commentId"],
  components: {
     Avatar
  },
  setup(props) {

 /*    function setPaginatedReplies(commit, response) {
    commit("SET_COMMENT_REPLIES", response.data.data);
    commit("SET_COMMENT_REPLIES_META", response.data.meta);
    commit("SET_COMMENT_REPLIES_LINKS", response.data.links);
    commit("SET_COMMENT_REPLIES_LOADING", false);
} */

    let route = useRoute();
    let id = route.params.id;

    let comment_id = computed(() => {
      return props.commentId;
    });

    let page = 1;





    console.log(id , comment_id.value , page);
let replies  , meta , links;
let result = ref([]);
 BlogServices.getPostCommentRepliesPaginate(id , comment_id.value , page).then((res)      => {

  result.value = res.data;


})

 replies = computed(() => {
  return result.value.data;
});

   meta = computed(() => {
    return result.value.meta;
  });

   links = computed(() => {
    return result.value.links;
  });

console.log(replies.value);



    /* let router = useRouter
     */




    return {
      replies,
      meta,
      links,
      open,
    };
  },
};
</script>

<style>
</style>
