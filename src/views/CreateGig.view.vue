<template>
<div class="flex flex-col items-center p-10 h-screen">
<Stepper/>

 <General/>
</div>
</template>

<script>
import Stepper from "../components/CreateGig/Stepper.component.vue"
import General from "../components/CreateGig/General.component.vue"
/* import Pricing from "../components/CreateGig/Pricing.component.vue"
import PaymentMthod from "../components/CreateGig/Payment_Mthod.component.vue"
import Upload from "../components/CreateGig/Upload.component.vue" */
export default {
    components:{Stepper,General,/* Pricing,PaymentMthod,Upload */}

}
</script>

<style>

</style>
