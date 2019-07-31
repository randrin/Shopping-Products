<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col bg-dark text-white">
        <a class="navbar-brand">SHOPPING STORE</a>
      </div>
    </div>
    <div class="row">
      <div class="col-3 bg-info p-2">
        <Categories />
      </div>
      <div class="col-9 bg-success p-2">
        <ProductList />
      </div>
    </div>
  </div>
</template>

<script>
    import ProductList from './ProductList';
    import Categories from './Categories';

    export default {
        components: { ProductList, Categories }
    }
</script>
