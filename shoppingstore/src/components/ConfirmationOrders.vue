<template>
  <div class="container mt-5">
    <div class="row">
      <div class="m-2 text-center">
        <h2>Thanks!</h2>
        <p>Thanks for placing your order, which is #{{ orderId }}.</p>
        <p>We'll ship your goods as soon as possible.</p>
        <router-link to="/" class="btn btn-primary">Return to Store</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    orderId() {
      return this.$route.params.id;
    }
  }
};
</script>

<style scoped>
  .container {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>


