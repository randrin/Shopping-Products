<template>
  <div>
    <router-link to="/admin/products/create" class="btn btn-primary my-2"><i class="fa fa-plus-circle"></i><b class="text-title-icon">Create Product</b></router-link>
    <table class="table table-sm table-bordered">
      <thead>
        <th>ID</th>
        <th>Name</th>
        <th>Category</th>
        <th class="text-right">Price</th>
        <th class="text-right">Actions</th>
      </thead>
      <tbody>
        <tr v-for="p in products" v-bind:key="p.id">
          <td>{{ p.id }}</td>
          <td>{{ p.name }}</td>
          <td>{{ p.category }}</td>
          <td class="text-right">{{ p.price | currency }}</td>
          <td class="text-right">
            <button class="btn btn-sm btn-danger mx-1" v-on:click="removeProduct(p)"><i class="fa fa-remove"></i><b class="text-title-icon">Delete</b></button>
            <button class="btn btn-sm btn-warning mx-1" v-on:click="handleEdit(p)"><i class="fa fa-pencil"></i><b class="text-title-icon">Edit</b></button>
          </td>
        </tr>
      </tbody>
    </table>
    <Pagination />
  </div>
</template>

<script>
    import Pagination from "../Pagination";
    import { mapGetters, mapActions } from "vuex";

    export default {
    components: { Pagination },
    computed: {
        ...mapGetters({
            products: "processedProducts"
        })
    },
    methods: {
        ...mapActions(["removeProduct"]),
            handleEdit(product) {
            this.$router.push(`/admin/products/edit/${product.id}`);
        }
    }
}
</script>