<template>
      <div class="mt-8">


          <h2
            class="
              max-w-6xl
              mx-auto
              mt-8
              px-4
              text-lg
              leading-6
              font-medium
              text-gray-900
              sm:px-6
              lg:px-8
            "
          >
            Recent activity
          </h2>

          <!-- Activity list (smallest breakpoint only) -->
          <div class="shadow">
            <!--



         -->
            <Gig />
            <Request />
            <User />
          </div>
        </div>
</template>

<script>
import Request from ".././Tables/Requests.com.ponent.vue";
import Gig from ".././Tables/Gigs.component.vue";
import User from ".././Tables/Users.component.vue";
export default {
	components: {
		Request,
		Gig,
		User
	},

}
</script>

<style>

</style>
