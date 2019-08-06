<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col bg-dark text-white">
        <div class="mt-3 mb-3">
          <a class="navbar-brand">SHOPPING STORE</a>
        </div>
      </div>
    </div>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-6">
                <div class="m-2">
                    <div class="form-group m-2">
                        <label for="firstName">First Name</label>
                        <input id="firstName" name="firstName" v-model="$v.order.firstName.$model" class="form-control" />
                        <validation-error v-bind:validation="$v.order.firstName" />
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="m-2">
                    <div class="form-group m-2">
                        <label for="lastName">Last Name</label>
                        <input id="lastName" name="lastName" v-model="$v.order.lastName.$model" class="form-control" />
                        <validation-error v-bind:validation="$v.order.lastName" />
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="m-2">
                    <div class="form-group m-2">
                        <label for="email">Email Adresse</label>
                        <input id="email" name="email" v-model="$v.order.email.$model" class="form-control" />
                        <validation-error v-bind:validation="$v.order.email" />
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="m-2">
                    <div class="form-group m-2">
                        <label for="phone">Phone Number</label>
                        <input id="phone" type="number" name="phone" v-model="$v.order.phone.$model" class="form-control" />
                        <validation-error v-bind:validation="$v.order.phone" />
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4">
                <div class="m-2">
                    <div class="form-group m-2">
                        <label for="country">Country</label>
                        <input id="country" name="country" v-model="$v.order.country.$model" class="form-control" />
                        <validation-error v-bind:validation="$v.order.country" />
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="m-2">
                    <div class="form-group m-2">
                        <label for="city">City</label>
                        <input id="city" name="city" v-model="$v.order.city.$model" class="form-control" />
                        <validation-error v-bind:validation="$v.order.city" />
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="m-2">
                    <div class="form-group m-2">
                        <label for="zipCode">Zip Code</label>
                        <input id="zipCode" type="number" name="zipCode" v-model="$v.order.zipCode.$model" class="form-control" />
                        <validation-error v-bind:validation="$v.order.zipCode" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="text-center mt-5">
      <router-link to="/cart" class="btn btn-danger m-1"><i class="fa fa-chevron-left"></i><b class="text-title-icon">Back</b></router-link>
      <button class="btn btn-success m-1" v-on:click="submitOrder"><i class="fa fa-check-circle"></i><b class="text-title-icon">Place Order</b></button>
    </div>
  </div>
</template>

<script>
    import { required, email } from "vuelidate/lib/validators";
    import ValidationError from "../components/ValidationError";
    import { mapActions } from 'vuex';

    export default {
        components: { ValidationError },
        data: function() {
            return {
                order: {
                    firstName: null,
                    lastName: null,
                    email: null,
                    country: null,
                    city: null,
                    address: null,
                    zipCode: null,
                    phone: null
                }
            }
        },
        validations: {
            order: {
                firstName: { required },
                lastName: { required },
                email: { required, email },
                country: { required },
                city: { required },
                address: { required },
                zipCode: { required },
                phone: { required }
            }
        },
        methods: {
            ...mapActions({
                "storeOrder": "storeOrder",
                "clearCart": "cart/clearCartData"
            }),
            async submitOrder() {
                this.$v.$touch();
                if (!this.$v.$invalid) {
                    let order = await this.storeOrder(this.order);
                    this.clearCart();
                    this.$router.push(`/confirmation/${order}`);
                }
            }
        }
    };
</script>

