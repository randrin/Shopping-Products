<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col bg-dark text-white">
        <a class="navbar-brand mb-3 mt-3">SHOPPING STORE</a>
        <CartSummary />
      </div>
    </div>
    <div class="row">
      <div class="col-3 bg-info">
        <Categories />
      </div>
      <div class="col-9 bg-success">
        <ProductList />
      </div>
    </div>
  </div>
</template>

<script>
    import ProductList from './ProductList';
    import Categories from './Categories';
    import CartSummary from './CartSummary';

    export default {
        components: { ProductList, Categories, CartSummary }
    }
</script>
