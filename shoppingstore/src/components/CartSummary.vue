<template>
  <div class="float-right mb-3 mt-3">
    <small>
      <span class="badge badge-danger" v-if="itemCount > 0">{{ itemCount }}</span>
      <span class="badge badge-danger" v-else>0</span>
    </small>
    <router-link to="/cart" class="btn btn-sm bg-dark text-white" v-bind:disabled="itemCount == 0">
      <i class="fa fa-shopping-cart"></i>
    </router-link>
  </div>
</template>

<script>
    import { mapGetters } from "vuex";

    export default {
        computed: {
            ...mapGetters({
                itemCount: "cart/itemCount",
                totalPrice: "cart/totalPrice"
            })
        }
    };
</script>

<style>
    .fa-shopping-cart {
        font-size: 26px !important;
    }
    .badge-danger {
        font-size: 13px !important;
        border-radius: 50% !important;
        position: relative;
        top: -10px;
        right: -20px;
    }
</style>
