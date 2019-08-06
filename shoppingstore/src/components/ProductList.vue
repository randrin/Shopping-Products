<template>
  <div>
    <div v-for="p in products" v-bind:key="p.id" class="card m-1 p-1 bg-light">
      <div class="row">
        <div class="col-md-2">
          <img :src="p.url" width="100" height="100" />
        </div>
        <div class="col-md-10">
          <h4>
            <span class="format-name">{{p.name}}</span>
            <span class="badge badge-pill badge-primary float-right">{{ p.price | currency}}</span>
          </h4>
          {{ p.description }}
        </div>
      </div>
      <div class="card-text p-1">
        <button
          class="btn btn-success btn-sm float-right"
          v-on:click="handleProductAdd(p)">
          <i class="fa fa-cart-arrow-down"></i><span class="text-title-icon">Add To Cart</span>
        </button>
      </div>
    </div>
    <br />
    <Pagination />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import Pagination from "./Pagination";

export default {
  components: { Pagination },
  computed: {
    ...mapGetters({ products: "processedProducts" })
  },
  methods: {
    ...mapMutations({ addProduct: "cart/addProduct" }),
    handleProductAdd(product) {
      this.addProduct(product);
      this.$router.push("/cart");
    }
  }
};
</script>

<style scoped>
.format-name {
  text-transform: lowercase;
}
span.format-name {
  text-transform: uppercase;
}
</style>
