<template>
  <div>
    <h4 class="bg-primary p-2 text-white text-center">Shopping Products Cart</h4>
    <div class="container">
      <div class="row">
        <div class="col mt-2">
          <h2 class="text-center">My Cart</h2>
          <table class="table table-bordered table-striped p-2">
            <thead>
              <tr>
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
                <td colspan="3" class="text-right">Total:</td>
                <td class="text-right">{{ totalPrice | currency }}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="text-center">
            <router-link to="/" class="btn btn-secondary m-1"><i class="fa fa-shopping-cart"></i> Continue Shopping</router-link>
            <router-link
              to="/checkout"
              class="btn btn-primary m-1"
              v-bind:disabled="lines.length == 0"
            ><i class="fa fa-credit-card"></i> Checkout</router-link>
          </div>
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

