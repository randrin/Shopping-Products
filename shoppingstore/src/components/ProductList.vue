<template>
  <div>
    <div v-for="p in products" v-bind:key="p.id" class="card m-1 p-1 bg-light">
      <h4>
        {{p.name}}
        <span class="badge badge-pill badge-primary float-right">{{ p.price | currency}}</span>
      </h4>
      <div class="card-text bg-white p-1">{{ p.description }}</div>
    </div>
    <br>
    <Pagination />
  </div>
</template>

<script>
    import { mapGetters } from "vuex";
    import Pagination from './Pagination';

    export default {
        components: { Pagination },
        computed: {
            ...mapGetters({ products: "processedProducts" })
        }
    };
</script>