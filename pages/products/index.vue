<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="product in products">
        <!-- We need to bind too to be able to work -->
         <ProductCard :product="product"/>
         <!-- We bind it because it is a dynamic value which means that if we don't bind it we are just going to send a string -->
      </div>
    </div>
  </div>
</template>

<script setup>
//With this method I can decide which layout I want to use
definePageMeta({
  layout:"products"
})
// We use the useFetch to fetch the data and then we destructure the response
const {data: {_rawValue: products}} = await useFetch('https://fakestoreapi.com/products')


</script>

<style scoped>

</style>