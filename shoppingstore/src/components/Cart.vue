<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col bg-primary text-white text-center">
        <div class="mt-3 mb-3">
          <a class="navbar-brand">SHOPPING PRODUCTS CART</a>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col mt-2">
        <h2 class="text-center mt-5 mb-5">My Cart</h2>
        <table class="table table-bordered table-striped p-2">
          <thead>
            <tr>
              <th>Image</th>
              <th>Quantity</th>
              <th>Product</th>
              <th class="text-right">Price</th>
              <th class="text-right">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="lines.length == 0">
              <td colspan="4" class="text-center">Your cart is empty</td>
            </tr>
            <cart-line
              v-for="line in lines"
              v-bind:key="line.product.id"
              v-bind:line="line"
              v-on:quantity="handleQuantityChange(line, $event)"
              v-on:remove="remove"
            />
          </tbody>
          <tfoot v-if="lines.length > 0">
            <tr>
              <td colspan="3" class="text-right"><b>Total:</b></td>
              <td class="text-right"><b class="text-danger">{{ totalPrice | currency }}</b></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="text-center mt-5">
          <router-link to="/" class="btn btn-secondary m-1">
            <i class="fa fa-shopping-cart"></i><b class="text-title-icon">Continue Shopping</b>
          </router-link>
          <router-link to="/checkout" class="btn btn-primary m-1" v-if="lines.length !== 0">
            <i class="fa fa-credit-card"></i><b class="text-title-icon">Checkout</b>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
import CartLine from "./CartLine";

export default {
  components: { CartLine },
  computed: {
    ...mapState({ lines: state => state.cart.lines }),
    ...mapGetters({ totalPrice: "cart/totalPrice" })
  },
  methods: {
    ...mapMutations({
      change: "cart/changeQuantity",
      remove: "cart/removeProduct"
    }),
    handleQuantityChange(line, $event) {
      this.change({ line, quantity: $event });
    }
  }
};
</script>

